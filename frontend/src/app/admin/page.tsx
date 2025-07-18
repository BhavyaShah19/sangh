'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';


function useAllBookings() {
  const [ayambil, setAyambil] = useState(0)
  const [chauvihar, setChauvihar] = useState(0)
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/bookingBasedOnCategory`)
      .then(res => {
        (res.data.totalBookings[0].category==='AYAMBIL')?setAyambil(res.data.totalBookings[0]._sum.numberOfPeople):setChauvihar(res.data.totalBookings[0]._sum.numberOfPeople),
        res.data.totalBookings[1] && setChauvihar(res.data.totalBookings[1]._sum.numberOfPeople)
      })
  }, [])
  return { ayambil, chauvihar }
}

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessKey = localStorage.getItem('accessKey');
      if (!accessKey) {
        router.replace('/admin/login');
      }
    }
  }, [router]);

  const handleClick = () => {
    router.push('/admin/bookings');
  }
  const { ayambil, chauvihar } = useAllBookings()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#232526] to-[#0f2027] text-[#22223b] font-sans flex flex-col items-center justify-center py-6 px-2">
      {/* Header */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow mb-1 text-center">Admin Dashboard</h1>
        <p className="text-lg md:text-xl text-orange-200 text-center mb-4">Manage sangh operations and bookings</p>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-3xl flex justify-center mt-4">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 md:gap-6 px-2 py-2 md:px-8 md:py-4 items-center w-full">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow transition w-full md:w-auto justify-center">
            <FaCog /> Dashboard
          </button>
          <button onClick={handleClick} className="flex items-center gap-2 px-6 py-3 rounded-xl text-orange-700 hover:bg-orange-100 transition w-full md:w-auto justify-center">
            <FaCalendarAlt /> Ayambil/Chauvihar Names
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col gap-2 items-center min-w-[220px]">
          <div className="flex items-center gap-2 text-orange-700 text-xl font-bold">
            Today's Ayambil Count<FaCalendarAlt />
          </div>
          <div className="text-5xl font-extrabold text-orange-600">{ayambil.toString()}</div>
        </div>
        <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col gap-2 items-center min-w-[220px]">
          <div className="flex items-center gap-2 text-orange-700 text-xl font-bold">
            Today's Chauvihar Count<FaCalendarAlt />
          </div>
          <div className="text-5xl font-extrabold text-orange-600">{chauvihar.toString()}</div>
        </div>
        {/* Card 2 */}
        <div className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-2xl shadow-lg p-8 flex flex-col gap-2 items-center min-w-[220px]">
          <div className="flex items-center gap-2 text-green-700 text-xl font-bold">
            Total Bookings <FaUsers />
          </div>
          <div className="text-5xl font-extrabold text-green-600">{ayambil + chauvihar}</div>
        </div>
        {/* Card 3 */}
        {/* <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col gap-2 items-center min-w-[220px]">
          <div className="flex items-center gap-2 text-blue-700 text-xl font-bold">
            Total Members <FaUsers />
          </div>
          <div className="text-5xl font-extrabold text-blue-600">150</div>
          <div className="text-blue-500 text-lg">Active members</div>
        </div> */}
      </div>

      {/* Logout Button */}
      {/* <div className="fixed top-6 right-6 z-50">
          <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition">Logout</button>
        </div> */}
    </div>
  )
}
