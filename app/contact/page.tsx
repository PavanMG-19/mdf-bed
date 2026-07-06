"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marks: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.marks || !formData.subject) {
      setError("Please fill out all required fields.");
      return;
    }

    if (formData.phone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Success response
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      marks: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="relative bg-primary text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764606/Pragathi_school_photo_dfrs8j.jpg"
            alt="MDF College Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col gap-3 text-center sm:text-left">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest font-sans">Connect with Us</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">Contact Us & Admissions Enquiry</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Have questions about B.Ed eligibility, admissions, or fees? Send us an enquiry or visit our office.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-primary dark:text-white">College Contact Information</h2>
            <p className="text-sm text-neutral-dark/60 dark:text-neutral-light/60">
              For official transcripts, admissions counselling, and general administration inquiries.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl h-fit">
                <MapPin size={22} />
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
                <h4 className="font-bold text-primary dark:text-white">Campus Address</h4>
                <p className="leading-relaxed">
                  Tarapura Campus, BH Road, Sagar, Shivamogga Dist, Karnataka - 577401
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl h-fit">
                <Phone size={22} />
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
                <h4 className="font-bold text-primary dark:text-white">Call Office</h4>
                <p>Admission Helpline: +91 7338464183</p>
                <p>Administrative Desk: +91 7338464183</p>
              </div>
            </div>

            <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl h-fit">
                <Mail size={22} />
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
                <h4 className="font-bold text-primary dark:text-white">Email Communications</h4>
                <a href="mailto:mdf.bedcollege@gmail.com" className="hover:text-secondary">mdf.bedcollege@gmail.com</a>
              </div>
            </div>

            <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl h-fit">
                <Clock size={22} />
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
                <h4 className="font-bold text-primary dark:text-white">Office Hours</h4>
                <p>Monday - Friday: 9:00 AM to 5:00 PM</p>
                <p>Saturday: 9:00 AM to 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Enquiry Form */}
        <div className="lg:col-span-7 bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">

          {submitted ? (
            <div className="py-12 flex flex-col items-center gap-4 text-center">
              <CheckCircle2 size={56} className="text-emerald-500" />
              <h3 className="text-xl font-bold text-primary dark:text-white">Enquiry Submitted Successfully!</h3>
              <p className="text-sm text-neutral-dark/70 dark:text-neutral-light/70 max-w-sm">
                Thank you for your interest in MDF College of Education. Our admission counsellors will review your details and contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-primary text-white hover:bg-primary-light dark:bg-secondary dark:hover:bg-secondary-dark px-6 py-2.5 rounded-full text-xs font-bold"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs sm:text-sm">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-primary dark:text-white">B.Ed. Admission Enquiry Form</h3>
                <p className="text-xs text-neutral-dark/50 dark:text-neutral-light/50">
                  Please provide accurate academic information to check eligibility.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 rounded-xl text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  {error}
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-primary dark:text-white">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-primary dark:text-white">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-primary dark:text-white">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Graduation Marks and Pedagogy Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-primary dark:text-white">Graduation / PG Marks (%) *</label>
                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                    placeholder="e.g. 64.5"
                    className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-primary dark:text-white">Preferred Pedagogy Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white"
                    required
                  >
                    <option value="">Select Pedagogy Method</option>
                    <option value="english">Pedagogy of English</option>
                    <option value="kannada">Pedagogy of Kannada</option>
                    <option value="mathematics">Pedagogy of Mathematics</option>
                    <option value="science">Pedagogy of Science</option>
                    <option value="social_science">Pedagogy of Social Science</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-primary dark:text-white">Additional Queries</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter details or questions here..."
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-primary-dark border border-slate-100 dark:border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Admission Enquiry</span>
              </button>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
