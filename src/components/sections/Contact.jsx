import { useState } from "react";
import { contactItems } from "../../data/data";
import SectionHeader from "../ui/SectionHeader";

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject_line: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState("");

  const validators = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    subject_line: (v) => v.trim().length >= 3,
    message: (v) => v.trim().length >= 10,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let firstMsg = "";

    Object.entries(validators).forEach(([key, validate]) => {
      if (!validate(fields[key])) {
        newErrors[key] = true;
        if (!firstMsg) firstMsg = "Please fill all fields correctly.";
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setMsg(firstMsg);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", "YOUR_ACCESS_KEY");
      formData.append("subject", "New message from Portfolio");

      Object.entries(fields).forEach(([k, v]) =>
        formData.append(k, v)
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMsg("Message sent successfully!");
        setFields({ name: "", email: "", subject_line: "", message: "" });
      } else {
        setStatus("error");
        setMsg("Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error.");
    }

    setTimeout(() => {
      setStatus(null);
      setMsg("");
    }, 4000);
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-sm border bg-bg-main text-text-heading text-sm outline-none transition-all duration-200
    ${
      errors[name]
        ? "border-red-500"
        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
    }`;

  return (
    <section id="contact" className="bg-bg-section py-16">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader subtitle="Get In Touch" title="Contact" highlight="Me" />

        <div className="flex flex-col lg:flex-row gap-10 mt-12">

          {/* Left Info */}
          <div className="lg:max-w-sm w-full">
            <p className="text-text-body mb-8 leading-relaxed">
              I'm currently available for freelance projects. Feel free to reach out!
            </p>

            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 mb-5 group"
              >
                <div className="flex items-center justify-center w-13 h-13 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition">
                  <i className={`${item.icon} text-primary text-lg`} />
                </div>

                <div>
                  <p className="text-xs uppercase text-text-muted tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-text-heading font-semibold text-sm">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1 bg-card-bg border border-border rounded-2xl p-8 max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass("name")}
                />

                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={inputClass("email")}
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject_line"
                value={fields.subject_line}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClass("subject_line")}
              />

              {/* Message */}
              <textarea
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message..."
                className={`${inputClass("message")} resize-none`}
              />

              {/* Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-lg font-semibold text-white
                bg-linear-to-r from-primary to-accent
                hover:shadow-lg hover:shadow-primary/30
                active:scale-95
                transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Message */}
              {msg && (
                <p
                  className={`text-center font-medium text-sm ${
                    status === "success" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {msg}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;