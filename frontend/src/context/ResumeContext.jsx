import { createContext, useContext, useState, useEffect } from "react";

const ResumeContext = createContext(null);

const initialFormData = {
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
    {
      id: Date.now(),
      name: "",
      issuer: "",
      date: "",
      credentialId: ""
    }
  ],

  languages: [""]
};

export function ResumeProvider({ children }) {
  const [template, setTemplate] = useState(() => {
    return localStorage.getItem("selectedTemplate") || 1;
  });

  // 🔥 Load formData from localStorage on first render
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : initialFormData;
  });

  // 🔥 Auto-save formData
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  // 🔥 Auto-save template
  useEffect(() => {
    localStorage.setItem("selectedTemplate", template);
  }, [template]);

  /* ---------------- BASIC UPDATERS ---------------- */

  const setAllFormData = (data) => {
    setFormData(data);
  };

  const updateFormData = (section, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: value
    }));
  };

  /* ---------------- PERSONAL INFO ---------------- */

  const updatePersonalInfo = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  /* ---------------- ARRAY HELPERS ---------------- */

  const addArrayItem = (section, newItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[section]];
      updated[index] = {
        ...updated[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: updated
      };
    });
  };

  const removeArrayItem = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
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
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within ResumeProvider");
  }
  return context;
}

