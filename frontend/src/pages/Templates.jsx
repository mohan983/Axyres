import Navbar from "../components/Navbar"
import TemplateCard from "../components/TemplateCard"
import { useResume } from "../context/ResumeContext"
import { useNavigate } from "react-router-dom"
import { templates } from "../data/sample"

export default function Templates() {
  const { setTemplate } = useResume()
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className="templates-page">
      <h1>Resume Templates</h1>
      <p>Select a template to begin building your resume.</p>

      <div className="templates-grid">
        {templates.map(t => (
          <TemplateCard
            key={t.id}
            image={t.image}
            name={t.name}
            onClick={() => {
              setTemplate(t.id)
              // Navigate to ResumeStart page with template ID
              navigate(`/resume-start?template=${t.id}`)
            }}
          />
        ))}
      </div>
    </div>
    </>
  )
}