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
                Build a resume that gets attention
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                Beat the competition — your resume should highlight your strengths and present your best self.
            </p>
            <h1 className="intro-sub" style={{color:'black', marginBottom:'5px'}}>
                Get paid more
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                a strong resume moves you toward better job opportunities.
            </p>
            <h1 className="intro-sub" style={{color:'black', marginBottom:'5px'}}>
                ATS-friendly resumes
            </h1>
            <p className="intro-sub" style={{marginBottom:'10px'}}>
                pass automatic screening systems used by top companies.
            </p>
        </div>
    </section>
  )
}
