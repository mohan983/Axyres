import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [navActiveTab, setNavActiveTab] = useState('Home')
  const navigate = useNavigate()
  const location = useLocation()

  // 1. Track route paths to manage sub-page vs home-page baseline highlights
  useEffect(() => {
    const path = location.pathname
    if (path === '/contact') {
      setNavActiveTab('Contact')
    } else if (path !== '/') {
      setNavActiveTab('') // Clear active home sections if on other routes like /login
    }
  }, [location.pathname])

  // 2. Intersection Observer to highlight links dynamically during scrolling
  useEffect(() => {
    // Only observe sections if the user is actively on the Home page
    if (location.pathname !== '/') return;

    const sectionIds = ['why-axyres', 'ats-lab', 'two-modes', 'pricing']
    const observers = []

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // If the section occupies the majority of the viewport, mark it active
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setNavActiveTab(entry.target.id)
        }
      });
    };

    const observerOptions = {
      root: null, // references the browser viewport
      rootMargin: '-20% 0px -40% 0px', // focused calculation box in middle of screen
      threshold: [0.3]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    });

    return () => observer.disconnect();
  }, [location.pathname])

  // 3. Smooth scroll fallbacks if navigating directly on the home page view
  const handleScroll = (id) => {
    setNavActiveTab(id) // Immediately highlight on click
    if (location.pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setNavActiveTab('Home'); // Optional: Reset the active tab state back to Home baseline
    }
  };

  return (
    <div className="navbar">
      <Link className="brand" to="/" onClick={handleLogoClick}>
        <img src='/Logo.png' style={{width:'110px'}}/>
      </Link>
      <div className="links">
        {/* Dynamic className conditional checks applying 'nav-active' style matching your Contact link configuration */}
        <Link 
          to="/#why-axyres" 
          className={navActiveTab === 'why-axyres' ? 'nav-active' : null}
          onClick={() => handleScroll('why-axyres')}
        >
          Why Axyres
        </Link>
        <Link 
          to="/#ats-lab" 
          className={navActiveTab === 'ats-lab' ? 'nav-active' : null}
          onClick={() => handleScroll('ats-lab')}
        >
          ATS Lab
        </Link>
        <Link 
          to="/#two-modes" 
          className={navActiveTab === 'two-modes' ? 'nav-active' : null}
          onClick={() => handleScroll('two-modes')}
        >
          Modes
        </Link>
        <Link 
          to="/#pricing" 
          className={navActiveTab === 'pricing' ? 'nav-active' : null}
          onClick={() => handleScroll('pricing')}
        >
          Pricing
        </Link>
        
        <Link to="/contact" className={navActiveTab === 'Contact' ? 'nav-active' : null}>Contact</Link>
        
        {user ? (
          <button className="spl_btn" onClick={() => { logout(); navigate('/') }}>
            Logout
          </button>
        ) : (
          <button className="spl_btn" onClick={() => { navigate('/login') }}>
            Login
          </button>
        )}
      </div>
    </div>
  )
}