export default function IntroSection() {
  return (
    <section className="intro-container">
        <div className="intro-left">
            <video
                src="/DJI_0893.MP4"
                controls
                style={{ width: '100%', borderRadius: '12px' }}
            />
        </div>

        <div className="intro-right">
            <h1 className="intro-sub" style={{color:'black', marginBottom:'5px'}}>
                Master Resume
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                Start with the "Single Source of Truth." The visual emphasizes that the user only needs to build their profile once.
            </p>
            <h1 className="intro-sub" style={{color:'black', marginBottom:'5px'}}>
                Chrome Extension
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                Instantly scraping job descriptions from any job portals is the primary hook for user acquisition.
            </p>
            <h1 className="intro-sub" style={{color:'black', marginBottom:'5px'}}>
                Precision AI & ATS Scoring
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                The focus here is on keywords, metrics, and tone, ensuring your resume passes automatic screening systems used by top companies.
            </p>
        </div>
    </section>
  )
}
