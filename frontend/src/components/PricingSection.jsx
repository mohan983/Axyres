import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
      
      {/* Top Header Row Block */}
      <div className="pricing-header-row">
        <div className="pricing-header-left">
          <span className="pricing-number">06 · PRICING</span>
          <h2 className="pricing-title">
            Free where it matters. <span className="title-italic">Paid where it
            earns its keep.</span>
          </h2>
        </div>
        <div className="pricing-header-right">
          <p className="pricing-subtext">
            No credit card to start. Cancel anytime. Annual saves 25%.
          </p>
        </div>
      </div>

      {/* Grid Canvas: 3 Tier Cards */}
      <div className="pricing-cards-grid">
        
        {/* Tier 1: FREE */}
        <div className="price-card tier-free">
          <span className="tier-badge">FREE</span>
          <div className="price-display">
            <span className="amount">$0</span>
            <span className="period">forever</span>
          </div>
          <p className="tier-tagline">Start tailoring today.</p>
          
          <button className="pricing-btn btn-dark-filled">Get free</button>
          
          <ul className="tier-features-list">
            <li><Check size={14} className="green-check" /> Master Resume</li>
            <li><Check size={14} className="green-check" /> Chrome extension</li>
            <li><Check size={14} className="green-check" /> 3 free exports (no watermark)</li>
            <li><Check size={14} className="green-check" /> Turbo mode</li>
            <li><Check size={14} className="green-check" /> ATS scoring</li>
          </ul>
        </div>

        {/* Tier 2: PRO (Standalone Dark Accent Card) */}
        <div className="price-card tier-pro dark-theme-card">
          <span className="tier-badge">PRO</span>
          <div className="price-display">
            <span className="amount">$9</span>
            <span className="period">/ month</span>
          </div>
          <p className="tier-tagline">For active job seekers.</p>
          
          <button className="pricing-btn btn-light-filled">Start Pro</button>
          
          <ul className="tier-features-list">
            <li><Check size={14} className="green-check" /> Everything in Free</li>
            <li><Check size={14} className="green-check" /> Unlimited exports</li>
            <li><Check size={14} className="green-check" /> Precision conversational AI</li>
            <li><Check size={14} className="green-check" /> All 4 templates</li>
            <li><Check size={14} className="green-check" /> Versioning & history</li>
            <li><Check size={14} className="green-check" /> Priority queue</li>
          </ul>
        </div>

        {/* Tier 3: TEAM */}
        <div className="price-card tier-team">
          <span className="tier-badge">TEAM</span>
          <div className="price-display">
            <span className="amount">$29</span>
            <span className="period">/ user / month</span>
          </div>
          <p className="tier-tagline">Career services & bootcamps.</p>
          
          <button className="pricing-btn btn-dark-filled">Talk to us</button>
          
          <ul className="tier-features-list">
            <li><Check size={14} className="green-check" /> Everything in Pro</li>
            <li><Check size={14} className="green-check" /> Cohort dashboards</li>
            <li><Check size={14} className="green-check" /> Bulk seats</li>
            <li><Check size={14} className="green-check" /> Custom templates</li>
            <li><Check size={14} className="green-check" /> SSO</li>
            <li><Check size={14} className="green-check" /> SLA support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}