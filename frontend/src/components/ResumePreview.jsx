import { useResume } from '../context/ResumeContext';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';


export default function ResumePreview() {
  const { template, formData } = useResume();

  // Transform data for templates
  const transformData = () => {
    // If formData has the new structure (with personalInfo object), use it as is
    if (formData.personalInfo) {
      return {
        personalInfo: {
          name: `${formData.personalInfo.firstName || ''} ${formData.personalInfo.lastName || ''}`.trim(),
          title: formData.personalInfo.jobTitle || '',
          email: formData.personalInfo.email || '',
          phone: formData.personalInfo.phone || '',
          location: formData.personalInfo.location || '',
          linkedin: formData.personalInfo.linkedin || '',
          github: formData.personalInfo.github || '',
          website: formData.personalInfo.website || '',
          summary: formData.personalInfo.summary || ''
        },
        education: formData.education || [],
        experience: formData.experience || [],
        skills: formData.skills?.filter(s => s && s.trim()) || [],
        projects: formData.projects || [],
        certifications: formData.certifications || [],
        languages: formData.languages?.filter(l => l && l.trim()) || []
      };
    }
    
    // Otherwise, transform old structure to new structure
    return {
      personalInfo: {
        name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
        title: formData.jobTitle || '',
        email: formData.email || '',
        phone: formData.phone || '',
        summary: formData.summary || '',
        location: '',
        linkedin: '',
        github: '',
        website: ''
      },
      education: formData.education || [],
      experience: formData.experience || [],
      skills: formData.skills?.filter(s => s && s.trim()) || [],
      projects: formData.projects || [],
      certifications: [],
      languages: []
    };
  };

  const transformedData = transformData();

  const templates = {
    1: <Template1 data={transformedData} />,
    2: <Template2 data={transformedData} />,
    3: <Template3 data={transformedData} />,
    4: <Template4 data={transformedData} />
  };

  return (
    <div className="resume-preview">
      {templates[template] || <Template1 data={transformedData} />}
    </div>
  );
}