import { Link, useNavigate, useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [navActiveTab, setNavActiveTab]=useState('Home')
  const navigate=useNavigate()
  const location=useLocation()

  useEffect(() => {
    const path = location.pathname
    if (path === '/') setNavActiveTab('Home')
    else if (path === '/contact') setNavActiveTab('Contact')
  }, [location.pathname])

  return (
    <div className="navbar">
        <Link className="brand" to="/"><img src='/Logo.png' style={{width:'40px'}}/>Axyres</Link>
        <div className="links">
            <Link to="/contact" className={navActiveTab==='Contact'?'nav-active':null}>Contact</Link>
            {user ? (
            <button className="btn" onClick={() => { logout(); navigate('/') }}>
                Logout
            </button>
            ) : (
            <Link to="/login" className="btn">Login</Link>
            )}
        </div>
    </div>
  )
}
