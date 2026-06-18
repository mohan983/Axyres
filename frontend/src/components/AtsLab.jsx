import React from 'react';
import { Scan } from 'lucide-react';

export default function AtsLab() {
  return (
    <section id="ats-lab" className="ats-lab-section">
      {/* Section Header */}
      <div className="lab-header">
        <span className="lab-number">04 · ATS LAB</span>
        <h2 className="lab-title">
          See exactly why a recruiter <span className="title-italic">would <br />
          (or wouldn't) shortlist you.</span>
        </h2>
      </div>

      {/* Main Row / Grid Section */}
      <div className="lab-grid">
        {/* Card 1: Your Resume Summary */}
        <div className="lab-card input-card">
          <span className="card-lbl">YOUR RESUME SUMMARY</span>
          <p className="card-text-content">
            Product designer with 6+ years across B2B SaaS. Shipped design systems, 
            end-to-end flows, and qualitative research. Strong in Figma, prototyping, 
            and developer tools.
          </p>
        </div>

        {/* Card 2: Target Job Description */}
        <div className="lab-card input-card">
          <span className="card-lbl">TARGET JOB DESCRIPTION</span>
          <p className="card-text-content">
            We are hiring a Senior Product Designer with experience in B2B SaaS, 
            design systems, prototyping in Figma, and a track record of shipping 
            end-to-end. Accessibility and motion craft preferred.
          </p>
        </div>

        {/* Card 3: ATS Match Output Display */}
        <div className="lab-card output-card">
          <div className="circular-progress-box">
            <svg width="140" height="140" className="radial-svg">
              <circle className="radial-bg" cx="70" cy="70" r="58" />
            </svg>
            <div className="radial-text-center">
              <span className="percentage-num">0%</span>
              <span className="percentage-lbl">ATS MATCH</span>
            </div>
          </div>
          <p className="output-hint-text">
            Score will animate from 0 — based on keyword density, role fit, and section formatting.
          </p>
        </div>
      </div>

      {/* Footer Meta Row */}
      <div className="lab-footer">
        <span className="powered-by">Powered by Claude Sonnet 3.5</span>
        <button className="score-action-btn">
          <Scan size={14} /> Score with Axyres
        </button>
      </div>
    </section>
  );
}