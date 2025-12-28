import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import IntroSection from "../components/IntroSection"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home() {
  const navigate = useNavigate()
  const [downloading, setDownloading] = useState(false)

  const handleDownloadExtension = () => {
    setDownloading(true)
    
    // Create download link
    const link = document.createElement('a')
    link.href = 'http://127.0.0.1:5500/download-instructions.html'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setTimeout(() => setDownloading(false), 2000)
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <section className="home-container">
        <div className="home-left">
          <p className="home-count">
            <span className="green-dot"></span> 50,000 resumes created today
          </p>
          <h1 className="home-title">
            Cut <span style={{textDecoration:'line-through'}}>10-15 minutes</span> down to <span>8 seconds</span>
          </h1>
          <p className="home-sub">
            Axyres turns any job posting into a perfectly tailored, ATS-friendly resume in just 8 seconds. Apply to more jobs. Land 2x more interviews.
          </p>
          <div className="home-buttons">
            <button className="btn-primary" onClick={() => navigate("/templates")}>Create New Resume</button>
            <button 
              className="btn-outline" 
              onClick={handleDownloadExtension}
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Downloading...
                </>
              ) : (
                <>
                  <i className="fab fa-chrome"></i> Download Extension
                </>
              )}
            </button>
          </div>
          <div className="home-stats">
            <div>
              <h3 className="stat-green">50%</h3>
              <p>more likely to get hired</p>
            </div>
            <div>
              <h3 className="stat-yellow">15%</h3>
              <p>better pay with your next job</p>
            </div>
          </div>
        </div>
        
        <div className="resume-card">
          <img
            src="/sample_resume.png"
            alt="Resume Preview"
            className="resume-img"
          />
          <div className="ats-badge">ATS Perfect</div>
          <div className="extension-badge">
            <i className="fab fa-chrome"></i>
            <span>Chrome Extension Available</span>
          </div>
        </div>
      </section>
      <h1 className="intro-heading">🆕 Why Use Axyres's Resume Builder?</h1>
      <IntroSection/>
    </div>
    <Footer/>
    </>
  )
}