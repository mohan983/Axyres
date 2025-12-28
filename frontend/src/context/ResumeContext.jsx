import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [template, setTemplate] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      linkedin: "",
      github: "",
      website: "",
      summary: ""
    },
    education: [
      { 
        id: Date.now(), 
        school: "", 
        degree: "", 
        field: "", 
        gpa: "", 
        startDate: "", 
        endDate: "", 
        location: "",
        description: "" 
      }
    ],
    experience: [
      { 
        id: Date.now(), 
        company: "", 
        role: "", 
        location: "", 
        startDate: "", 
        endDate: "", 
        description: "",
        achievements: "" 
      }
    ],
    skills: [""],
    projects: [
      { 
        id: Date.now(), 
        title: "", 
        description: "", 
        link: "",
        technologies: "",
        startDate: "",
        endDate: ""
      }
    ],
    certifications: [
      { id: Date.now(), name: "", issuer: "", date: "", credentialId: "" }
    ],
    languages: [""]
  });

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const updatePersonalInfo = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addArrayItem = (section, newItem) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setFormData(prev => {
      const newArray = [...prev[section]];
      newArray[index] = {
        ...newArray[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: newArray
      };
    });
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const setAllFormData = (data) => {
    setFormData(data);
  };

  return (
    <ResumeContext.Provider value={{ 
      template, 
      setTemplate, 
      formData, 
      setFormData,
      setAllFormData,
      updateFormData,
      updatePersonalInfo,
      addArrayItem,
      updateArrayItem,
      removeArrayItem
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}