import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function RootLayout() {
  return <div className="min-h-screen bg-[var(--surface)] text-[var(--text)]"><Navbar /><Outlet /><Footer /></div>
}
