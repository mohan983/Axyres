import React from 'react';
import { Zap, Wand2 } from 'lucide-react';

export default function TwoModes() {
  return (
    <section id="two-modes" className="two-modes-section">
      
      {/* Top Header Split Row */}
      <div className="modes-header-row">
        <div className="modes-header-left">
          <span className="modes-number">05 · TWO MODES</span>
          <h2 className="modes-title">
            When you have <span className="title-bold">8 seconds.</span><br />
            <span className="title-italic">Or 8 minutes.</span>
          </h2>
        </div>
        <div className="modes-header-right">
          <p>
            Speed and craft are not a trade-off. Pick the mode that fits the 
            application — both run on the same Master Resume.
          </p>
        </div>
      </div>

      {/* Grid Row: Turbo & Precision Intro Cards */}
      <div className="modes-cards-grid">
        
        {/* Card 1: Turbo (Light Mode Card) */}
        <div className="mode-intro-card light-card">
          <div className="mode-icon-box turbo-icon">
            <Zap size={20} fill="#f59e0b" color="#f59e0b" />
          </div>
          <h3>Turbo</h3>
          <p className="mode-card-description">
            1-click tailoring. Conservative edits. Default template. Missing skills 
            ignored. Built for applying at velocity.
          </p>
          <div className="mode-card-footer">
            <span className="meta-label">avg latency</span>
            <span className="meta-value">5-8s</span>
          </div>
        </div>

        {/* Card 2: Precision (Dark Mode Card) */}
        <div className="mode-intro-card dark-card">
          <div className="mode-icon-box precision-icon">
            <Wand2 size={20} color="#10b981" />
          </div>
          <h3>Precision</h3>
          <p className="mode-card-description">
            Conversational AI. Deeper ATS rewrite. Missing-skill flags. 
            Metricization suggestions. Built for the role you actually want.
          </p>
          <div className="mode-card-footer">
            <span className="meta-label">avg latency</span>
            <span className="meta-value">20-40s</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Detailed Features Matrix Comparison Table */}
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>CAPABILITY</th>
              <th>TURBO</th>
              <th>PRECISION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cap-cell">Bullets rewrite depth</td>
              <td>Light verb / keyword sharpening</td>
              <td>Full impact rewrite</td>
            </tr>
            <tr>
              <td className="cap-cell">Missing skills</td>
              <td>Ignored</td>
              <td>Flagged · suggestions</td>
            </tr>
            <tr>
              <td className="cap-cell">Conversational AI</td>
              <td className="dash-value">—</td>
              <td>Yes (chat to refine)</td>
            </tr>
            <tr>
              <td className="cap-cell">Metric suggestions</td>
              <td className="dash-value">—</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td className="cap-cell">Template choice</td>
              <td>Your default</td>
              <td>All 4 + adjustments</td>
            </tr>
            <tr>
              <td className="cap-cell">Best for</td>
              <td>Volume applying</td>
              <td className="highlight-column-text">Top-priority roles</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}