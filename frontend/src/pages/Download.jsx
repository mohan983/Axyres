import React, { useState } from "react";
import ResumePreview from "../components/ResumePreview";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Download() {
  const { formData, template, setTemplate } = useResume();
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Get the resume HTML
    const resumeElement = document.querySelector('.resume-preview');
    
    if (resumeElement) {
      // Create the print document
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${formData.personalInfo?.firstName || ''} ${formData.personalInfo?.lastName || ''}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Calibri&family=Arial&family=Georgia&family=Times+New+Roman&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', sans-serif;
              background: white !important;
              color: black !important;
              padding: 20px;
              margin: 0;
            }
            
            .print-resume {
              max-width: 800px;
              margin: 0 auto;
              background: white;
            }
            
            /* Print-specific styles */
            @media print {
              @page {
                margin: 0.5in;
                size: letter;
              }
              
              body {
                padding: 0;
                background: white;
              }
              
              .print-resume {
                margin: 0;
                max-width: 100%;
              }
              
              /* Hide elements that shouldn't print */
              .no-print {
                display: none !important;
              }
              
              /* Ensure backgrounds print */
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-resume">
            ${resumeElement.innerHTML}
          </div>
          <script>
            // Auto print and close
            window.onload = function() {
              setTimeout(function() {
                window.print();
                setTimeout(function() {
                  window.close();
                }, 500);
              }, 500);
            }
          </script>
        </body>
        </html>
      `);
      
      printWindow.document.close();
    } else {
      alert('Unable to generate PDF. Please try again.');
    }
    
    setDownloading(false);
  };

  const handleEdit = () => {
    navigate("/details");
  };

  const handleNewResume = () => {
    navigate("/templates");
  };

  const handleShare = () => {
    // In a real app, this would share the resume
    alert('Share functionality would be implemented here!');
  };

  return (
    <>
      <Navbar />
      <div className="download-page">
        <div className="download-container">
          <header className="download-header">
            <h1>🎉 Your Resume is Ready!</h1>
            <p className="download-subtitle">
              Preview, download, and share your professionally crafted resume
            </p>
          </header>

          <div className="download-main">
            <div className="resume-preview-section">
              <div className="resume-preview-container">
                <ResumePreview />
              </div>
            </div>

            <div className="download-options">
              <div className="options-header">
                <h2>Download Options</h2>
                <p>Choose how you want to save or share your resume</p>
              </div>

              <div className="options-grid">
                <div className="option-card">
                  <div className="option-icon">📄</div>
                  <div className="option-content">
                    <h3>Download as PDF</h3>
                    <p>Best for ATS and professional submissions</p>
                  </div>
                  <button 
                    className={`download-btn ${downloading ? 'downloading' : ''}`}
                    onClick={handleDownload}
                    disabled={downloading}
                  >
                    {downloading ? 'Generating...' : 'Download PDF'}
                  </button>
                </div>

                <div className="option-card">
                  <div className="option-icon">✏️</div>
                  <div className="option-content">
                    <h3>Edit Resume</h3>
                    <p>Make changes to your information</p>
                  </div>
                  <button className="edit-btn" onClick={handleEdit}>
                    Edit Details
                  </button>
                </div>

                <div className="option-card">
                  <div className="option-icon">🔄</div>
                  <div className="option-content">
                    <h3>Change Template</h3>
                    <p>Try a different template design</p>
                  </div>
                  <button className="template-btn" onClick={handleNewResume}>
                    Select Template
                  </button>
                </div>

                <div className="option-card">
                  <div className="option-icon">📧</div>
                  <div className="option-content">
                    <h3>Share Resume</h3>
                    <p>Send your resume via email or link</p>
                  </div>
                  <button className="share-btn" onClick={handleShare}>
                    Share
                  </button>
                </div>
              </div>

              {/* <div className="tips-section">
                <h3>💡 Before You Submit</h3>
                <ul className="tips-list">
                  <li>✅ <strong>Check for errors:</strong> Review spelling and grammar</li>
                  <li>✅ <strong>ATS Optimization:</strong> Use keywords from job description</li>
                  <li>✅ <strong>File naming:</strong> Use format: FirstName_LastName_Resume.pdf</li>
                  <li>✅ <strong>Test ATS:</strong> Use free ATS checkers to verify compatibility</li>
                  <li>✅ <strong>Print test:</strong> Print a copy to check formatting</li>
                </ul>
              </div> */}

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="action-btn print" onClick={window.print}>
                    🖨️ Print Resume
                  </button>
                  <button className="action-btn copy" onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/resume`);
                    alert('Resume link copied to clipboard!');
                  }}>
                    📋 Copy Link
                  </button>
                  <button className="action-btn email" onClick={() => {
                    const subject = `Resume - ${formData.personalInfo?.firstName || ''} ${formData.personalInfo?.lastName || ''}`;
                    const body = `Hi,\n\nPlease find my resume attached.\n\nBest regards,\n${formData.personalInfo?.firstName || ''} ${formData.personalInfo?.lastName || ''}`;
                    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}>
                    📧 Email Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}