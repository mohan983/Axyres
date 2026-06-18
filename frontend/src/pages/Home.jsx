import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import IntroSection from "../components/IntroSection"
import WhyAxyres from "../components/WhyAxyres"
import AtsLab from "../components/AtsLab"
import TwoModes from "../components/TwoModes"
import PricingSection from "../components/PricingSection"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Zap, Download, MousePointer2,FlashlightIcon } from "lucide-react"

export default function Home() {
  const navigate = useNavigate()

  // Logo text data array matching your image references
  const companies = [
    "Indeed", "Wellfound", "Greenhouse", "Lever", 
    "Ashby", "Workday", "Y Combinator", "Stripe"
  ];

  return (
    <>
      <Navbar/>
      <div className="container">
        <section id="/" className="axyres-container">
          {/* Left Column: Marketing Copy */}
          <div className="left-column">
            <div className="badge-wrapper">
              <span className="tag-badge"># A CHROME-EXTENSION-FIRST RESUME ENGINE</span>
            </div>
            
            <h1 className="hero-title">
              Tailored resumes, <br />
              <span className="italic-text">in the time it takes</span> <br />
              to read the job.
            </h1>
            
            <p className="hero-description">
              Axyres turns any job posting into an ATS-optimized resume
              straight from your browser. One Master Resume. Two modes. Zero rewriting.
            </p>
            
            <div className="cta-group">
              <button className="spl_btn btn" onClick={() => navigate("/templates")}>
                Create Your Resume
              </button>
              <button className="btn-secondary" onClick={() => navigate("/extension")}>
                Get Extension <Download size={16} />
              </button>
            </div>
            
            <div className="features-footer">
              <span><Zap size={12} fill="currentColor" /> TURBO MODE: 5-8S</span>
              <span className="separator">•</span>
              <span>PDF · DOCX · TXT</span>
              <span className="separator">•</span>
              <span>PRIVACY-FIRST</span>
            </div>
          </div>

          {/* Right Column: Extension Mockup UI */}
          <div className="right-column">
            <div className="extension-window">
              {/* Window Header */}
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="address-bar">
                  linkedin.com/jobs/4521 · senior product designer
                </div>
              </div>

              {/* Extension Content */}
              <div className="extension-body">
                <div className="brand-header">
                  <div className="brand-logo">A</div>
                  <span className="brand-name">Axyres</span>
                  <span className="version-tag">v0.3 - BETA</span>
                </div>

                {/* Detected Role Card */}
                <div className="card role-card">
                  <span className="card-label">DETECTED ROLE</span>
                  <h3>Senior Product Designer</h3>
                  <p>Linear · Remote (EU)</p>
                </div>

                {/* Metrics Row */}
                <div className="metrics-row">
                  <div className="card metric-card">
                    <span className="card-label">MATCH</span>
                    <span className="metric-value match-green">87%</span>
                  </div>
                  <div className="card metric-card">
                    <span className="card-label">KEYWORDS</span>
                    <span className="metric-value">12</span>
                  </div>
                </div>

                {/* Keyword Tags */}
                <div className="keyword-tags">
                  <span className="keyword-tag">Design Systems</span>
                  <span className="keyword-tag">Figma</span>
                  <span className="keyword-tag">B2B SaaS</span>
                  <span className="keyword-tag">Prototyping</span>
                  <span className="keyword-tag">Research</span>
                </div>

                {/* Mode Toggle Buttons */}
                <div className="mode-toggle">
                  <button className="btn-toggle-turbo">
                    <Zap size={14} fill="currentColor" /> Turbo
                  </button>
                  <button className="btn-toggle-precision">
                    Precision
                  </button>
                </div>
              </div>
            </div>
            <div className="extension-badge">
              <i className="fab fa-chrome"></i>
              <span><Zap size={16} color="orange" /> JD Scraped in 0.42s</span>
            </div>
          </div>
        </section>

        {/* 🆕 INFINITE MOVING LOGO WALL MARQUEE SECTION */}
        <section className="marquee-logo-section">
          <span className="marquee-caption">SCRAPES JOB POSTINGS FROM</span>
          
          <div className="marquee-viewport">
            <div className="marquee-track">
              {/* First Set of Logos */}
              {companies.map((company, index) => (
                <span key={`group-1-${index}`} className="marquee-logo-item">
                  {company}
                </span>
              ))}
              {/* Duplicate Set for Seamless Loop Intersections */}
              {companies.map((company, index) => (
                <span key={`group-2-${index}`} className="marquee-logo-item">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>

        <WhyAxyres/>
        <AtsLab/>
        <TwoModes/>
        <PricingSection/>
      </div>
      <Footer/>
    </>
  )
}