import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useResume } from "../context/ResumeContext";
import Navbar from "../components/Navbar";


export default function ResumeStart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTemplate } = useResume();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);
  
  // Get template ID from URL or location state
  const queryParams = new URLSearchParams(location.search);
  const templateId = queryParams.get('template') || location.state?.templateId || 1;

  const handleBuildFromScratch = () => {
    navigate("/details");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a PDF, DOC, DOCX, or TXT file.");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size should be less than 5MB.");
      return;
    }

    setUploading(true);
    setUploadError("");
    setUploadSuccess(false);

    // Simulate AI processing with timeout
    setTimeout(() => {
      // In a real app, you would:
      // 1. Upload the file to your backend
      // 2. Process it with AI/ML algorithms (like spaCy, NLTK, or custom models)
      // 3. Extract and structure the resume data
      // 4. Return the structured data

      // For now, we'll simulate extracted data
      const mockExtractedData = {
        personalInfo: {
          firstName: "John",
          lastName: "Doe",
          jobTitle: "Software Engineer",
          email: "john.doe@example.com",
          phone: "(123) 456-7890",
          location: "San Francisco, CA",
          linkedin: "linkedin.com/in/johndoe",
          github: "github.com/johndoe",
          website: "johndoe.com",
          summary: "Experienced software engineer with 5+ years in web development. Specialized in React, Node.js, and cloud technologies. Passionate about building scalable applications and solving complex problems."
        },
        education: [
          {
            id: Date.now(),
            school: "Stanford University",
            degree: "Bachelor of Science",
            field: "Computer Science",
            gpa: "3.8/4.0",
            startDate: "2016",
            endDate: "2020",
            location: "Stanford, CA",
            description: "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Development."
          }
        ],
        experience: [
          {
            id: Date.now(),
            company: "Tech Innovations Inc.",
            role: "Senior Software Engineer",
            location: "San Francisco, CA",
            startDate: "2020",
            endDate: "Present",
            description: "Lead development of web applications using React and Node.js. Improved application performance by 40%.",
            achievements: "• Led a team of 5 developers\n• Implemented CI/CD pipeline\n• Reduced page load time by 60%"
          },
          {
            id: Date.now() + 1,
            company: "Digital Solutions",
            role: "Software Engineer",
            location: "San Jose, CA",
            startDate: "2018",
            endDate: "2020",
            description: "Developed and maintained web applications. Collaborated with cross-functional teams.",
            achievements: "• Developed 10+ features\n• Improved code quality by 30%"
          }
        ],
        skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "Git", "Agile Methodologies"],
        projects: [
          {
            id: Date.now(),
            title: "E-commerce Platform",
            description: "Built a full-stack e-commerce platform with React and Node.js",
            link: "https://github.com/johndoe/ecommerce",
            technologies: "React, Node.js, MongoDB, Stripe API",
            startDate: "2022",
            endDate: "2023"
          }
        ],
        certifications: [
          {
            id: Date.now(),
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2022",
            credentialId: "AWS-123456"
          }
        ],
        languages: ["English (Native)", "Spanish (Fluent)"]
      };

      // Set the template first
      setTemplate(parseInt(templateId));
      
      // Store extracted data in localStorage for the Details page to use
      localStorage.setItem('extractedResumeData', JSON.stringify(mockExtractedData));
      
      setUploading(false);
      setUploadSuccess(true);
      
      // Navigate to details page after 1.5 seconds to show success message
      setTimeout(() => {
        navigate("/details");
      }, 1500);
    }, 2000);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const event = { target: { files: [file] } };
      handleFileUpload(event);
    }
  };

  return (
    <>
      <Navbar />
      <div className="resume-start-page">
        <div className="resume-start-container">
          <header className="resume-start-header">
            <h1>Choose How to Create Your Resume</h1>
            <p className="subtitle">Select your preferred method to build a professional resume</p>
          </header>

          <div className="options-grid">
            {/* Option 1: Build from Scratch */}
            <div className="option-card build-from-scratch">
              <div className="option-icon">🛠️</div>
              <div className="option-content">
                <h2>Build from Scratch</h2>
                <p className="option-description">
                  Start with a blank template and fill in your details manually. 
                  Perfect if you want complete control over your resume content.
                </p>
                <ul className="option-features">
                  <li>✓ Complete control over content</li>
                  <li>✓ Step-by-step guidance</li>
                  <li>✓ ATS-optimized templates</li>
                  <li>✓ Real-time preview</li>
                </ul>
              </div>
              <div className="option-actions">
                <button 
                  className="option-btn primary"
                  onClick={handleBuildFromScratch}
                >
                  Start Building
                </button>
              </div>
            </div>

            {/* Option 2: Upload Existing Resume */}
            <div 
              className={`option-card upload-resume ${uploading ? 'uploading' : ''} ${uploadSuccess ? 'success' : ''}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="option-icon">📄</div>
              <div className="option-content">
                <h2>Upload Existing Resume</h2>
                <p className="option-description">
                  Upload your current resume and let our AI extract and organize your information. 
                  We'll pre-fill the form for you to review and edit.
                </p>
                
                <div className="upload-area">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.txt"
                    className="file-input"
                    id="resume-upload"
                  />
                  
                  {!uploading && !uploadSuccess && (
                    <>
                      <div className="upload-prompt">
                        <div className="upload-icon">📤</div>
                        <h3>Drag & Drop or Click to Upload</h3>
                        <p className="upload-hint">Supported formats: PDF, DOC, DOCX, TXT (Max 5MB)</p>
                        <button 
                          className="upload-btn"
                          onClick={triggerFileUpload}
                        >
                          Choose File
                        </button>
                      </div>
                      <div className="supported-formats">
                        <span className="format-badge">PDF</span>
                        <span className="format-badge">DOC</span>
                        <span className="format-badge">DOCX</span>
                        <span className="format-badge">TXT</span>
                      </div>
                    </>
                  )}

                  {uploading && (
                    <div className="upload-progress">
                      <div className="progress-spinner"></div>
                      <h3>Analyzing Your Resume</h3>
                      <p className="progress-text">Our AI is extracting information from your resume...</p>
                      <div className="progress-steps">
                        <div className="progress-step active">Uploading</div>
                        <div className="progress-step active">Processing</div>
                        <div className="progress-step">Extracting</div>
                        <div className="progress-step">Structuring</div>
                      </div>
                    </div>
                  )}

                  {uploadSuccess && (
                    <div className="upload-success">
                      <div className="success-icon">✅</div>
                      <h3>Resume Analyzed Successfully!</h3>
                      <p className="success-text">Your information has been extracted and pre-filled. Redirecting to edit...</p>
                    </div>
                  )}

                  {uploadError && (
                    <div className="upload-error">
                      <div className="error-icon">❌</div>
                      <p className="error-text">{uploadError}</p>
                      <button 
                        className="retry-btn"
                        onClick={() => {
                          setUploadError("");
                          triggerFileUpload();
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="ai-features">
                <h4>AI-Powered Extraction</h4>
                <ul>
                  <li>✓ Extracts contact information</li>
                  <li>✓ Identifies work experience</li>
                  <li>✓ Pulls education details</li>
                  <li>✓ Recognizes skills & certifications</li>
                  <li>✓ Maintains formatting</li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="comparison-section">
            <h2>Which Option is Right for You?</h2>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Build from Scratch</th>
                    <th>Upload & Extract</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time Required</td>
                    <td>10-15 minutes</td>
                    <td>2-3 minutes</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>First-time resume builders</td>
                    <td>Updating existing resumes</td>
                  </tr>
                  <tr>
                    <td>Control Level</td>
                    <td>Complete control</td>
                    <td>AI-assisted</td>
                  </tr>
                  <tr>
                    <td>Accuracy</td>
                    <td>100% (your input)</td>
                    <td>95% (AI + review)</td>
                  </tr>
                  <tr>
                    <td>ATS Optimization</td>
                    <td>✓ Built-in</td>
                    <td>✓ Automatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="back-section">
            <button 
              className="back-btn"
              onClick={() => navigate("/templates")}
            >
              ← Back to Templates
            </button>
            <p className="back-hint">Not sure which to choose? <strong>Build from Scratch</strong> is recommended for most users.</p>
          </div>
        </div>
      </div>
    </>
  );
}