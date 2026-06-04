import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Reveal from './Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_3wg9bbo",
        "template_w37u8ov",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "c402eDTcmo99mqzBx"
      );

      console.log("SUCCESS!", result);

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);

      alert("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-transparent transition-colors duration-300"
    >
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">Contact</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal className="glass-card rounded-[2rem] p-6 sm:p-8" variant="left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 dark:bg-slate-900/60">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-lg mr-4">
                  <Mail
                    className="text-blue-600 dark:text-blue-200"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    nithyasai5a@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 dark:bg-slate-900/60">
                <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-lg mr-4">
                  <Phone
                    className="text-teal-600 dark:text-teal-200"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 97055-90944
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 dark:bg-slate-900/60">
                <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-lg mr-4">
                  <MapPin
                    className="text-purple-600 dark:text-purple-200"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-gradient-to-r from-blue-50 to-teal-50 p-6 dark:from-slate-900 dark:to-slate-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Available for Opportunities
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently open to new opportunities and interesting
                projects. Whether you're looking for a full-time developer or
                need help with a freelance project, let's discuss how we can
                work together.
              </p>
            </div>
          </Reveal>

          <Reveal className="glass-card rounded-[2rem] p-6 sm:p-8" variant="right" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-slate-900/80 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-slate-900/80 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-slate-900/80 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-gray-300 bg-white/90 px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-slate-900/80 dark:text-white"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full min-h-12 items-center justify-center rounded-2xl bg-sky-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
