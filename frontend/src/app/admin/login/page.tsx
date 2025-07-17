'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { decryptKey, encryptKey } from '@/lib/utils'
import Modal from '@/components/ui/Modal'

const OTP_LENGTH = 6;

const PasskeyModal = () => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true)
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  
  const encryptedKey = typeof window !== 'undefined' ? window.localStorage.getItem('accessKey') : null;
  useEffect(() => {
    if (path) {
      const accessKey = encryptedKey && decryptKey(encryptedKey);
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push('/admin');
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey, path, router]);

  const handleOtpChange = (value: string, idx: number) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    setError("");
    if (value && idx < OTP_LENGTH - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const validatePasskey = (e: React.FormEvent) => {
    e.preventDefault();
    const passkey = otp.join('');
    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      localStorage.setItem('accessKey', encryptedKey);
      setOpen(false);
      router.push('/admin');
    } else {
      setError('Invalid passkey. Please try again');
    }
  }

  const closeModal = () => {
    setOpen(false);
    router.push('/');
  }

  return (
    <>
      {open && (
        <Modal title="Admin Verification" onClose={closeModal}>
          <form onSubmit={validatePasskey} className="flex flex-col gap-4 items-center">
            <label className="text-base font-semibold mb-2 text-center">Enter 6-digit Admin Passkey</label>
            <div className="flex gap-2 justify-center mb-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={el => inputRefs.current[idx] = el}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  className="w-10 h-12 text-center text-xl border border-gray-400 rounded focus:border-blue-500 focus:outline-none transition-all bg-black text-white placeholder-gray-400"
                  value={digit}
                  onChange={e => handleOtpChange(e.target.value, idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                  autoFocus={idx === 0}
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="bg-black text-white rounded px-4 py-2 mt-2 w-full font-semibold hover:bg-gray-800 transition"
            >
              Enter Admin Passkey
            </button>
          </form>
        </Modal>
      )}
    </>
  )
}

export default PasskeyModal