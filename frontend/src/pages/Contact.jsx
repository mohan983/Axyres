import { useState } from "react"
import { faqs } from "../data/sample"
import Navbar from "../components/Navbar"

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="contact-content">
        <div className="faq-section">
          <h1>Frequently Asked Questions</h1>
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                {item.q}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
