"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const BACKEND_URL = "http://localhost:3001"

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Completed: 'bg-green-100 text-green-800',
};

type Booking = {
  name: string;
  phone: string;
  category: string;
  numberOfPeople: number;
}; 

function useGetBookings() {
  const [bookings, setBookings] = useState<Booking[]>([])
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/booking`)
      .then(res => {
        setBookings(res.data.getTodaysBooking)
      })
  }, [])
  return bookings
}


export default function AyambilBookings() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessKey = localStorage.getItem('accessKey');
      if (!accessKey) {
        router.replace('/admin/login');
      }
    }
  }, [router]);
  const bookings = useGetBookings();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-6xl bg-black/90 rounded-2xl shadow-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-orange-400">Ayambil/Chauvihar Bookings - Today</h2>
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-lg">
            + Add Booking
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700 border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-lg font-semibold text-orange-300 bg-black">Sr.No</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-orange-300 bg-black">Name</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-orange-300 bg-black">Phone</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-orange-300 bg-black">Type</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-orange-300 bg-black">Persons</th>

              </tr>
            </thead>
            <tbody className="bg-black/80 divide-y divide-gray-700">
              {bookings.map((b, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-4 font-bold text-lg text-white">{idx + 1}</td>
                  <td className="px-4 py-4 font-bold text-lg text-white">{b.name}</td>
                  <td className="px-4 py-4 text-blue-200 font-medium">{b.phone}</td>
                  <td className="px-4 py-4 text-gray-300">{b.category}</td>
                  <td className="px-4 py-4 text-gray-300">{b.numberOfPeople}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 