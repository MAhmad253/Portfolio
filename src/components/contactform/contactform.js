import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";

// ⚙️ 1. Create a free account at https://www.emailjs.com
// ⚙️ 2. Add an Email Service (e.g. Gmail) → copy the Service ID
// ⚙️ 3. Create an Email Template → copy the Template ID
//        Use variables in the template body: {{from_name}}, {{from_email}},
//        {{company}}, {{project_type}}, {{budget}}, {{message}}
// ⚙️ 4. Copy your Public Key from Account → General
// ⚙️ 5. Paste all three below (or better, load them from environment variables)
const EMAILJS_SERVICE_ID = "service_r30vlw8";
const EMAILJS_TEMPLATE_ID = "template_1mirwhr";
const EMAILJS_PUBLIC_KEY = "zQVpptCXk0IcVHwnB";

const initialFormState = {
  from_name: "",
  from_email: "",
  company: "",
  project_type: "AI / RAG Solution",
  budget: "",
  message: "",
};

const projectTypes = [
  "AI / RAG Solution",
  "LLM Fine-Tuning",
  "Chatbot / AI Agent",
  "Backend / API Development",
  "Data Science / ML Model",
  "Other",
];

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

        emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData(initialFormState);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-form-title">Tell Me About Your Project</h3>
      <p className="contact-form-subtitle">
        Share a few details about what you need and I&apos;ll get back to you
        within 24 hours.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="from_name">Your Name *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="from_email">Your Email *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="jane@gmail.com"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="company">Company (optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="project_type">Project Type</label>
            <select
              id="project_type"
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="contact-form-field">
          <label htmlFor="budget">Estimated Budget (optional)</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g. $500 - $1000"
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="message">Project Requirements *</label>
          <textarea
            id="message"
            name="message"
            rows={1}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe what you're building, the problem you're solving, and any timeline you have in mind..."
            required
          />
        </div>

        <button
          type="submit"
          className="contact-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Requirements"}
        </button>

        {status === "success" && (
          <p className="contact-form-status success">
            ✅ Thanks! Your message has been sent — I&apos;ll reply within 24
            hours.
          </p>
        )}
        {status === "error" && (
          <p className="contact-form-status error">
            ⚠️ Please fill in your name, email, and requirements before
            sending.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
