"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, GraduationCap, CheckCircle, Info } from "lucide-react";

export default function Academics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the duration of the B.Ed. course?",
      a: "The Bachelor of Education (B.Ed.) is a full-time, regular professional program of 2 years duration (divided into 4 semesters).",
    },
    {
      q: "What are the eligibility criteria for admission?",
      a: "Candidates must have completed a Bachelor's Degree (B.A., B.Sc., B.Com.) or Master's Degree with a minimum of 50% marks (45% for SC/ST/OBC/PWD candidates from Karnataka).",
    },
    {
      q: "Is there any age limit for the B.Ed. course?",
      a: "No, there is no upper age limit for seeking admission to the B.Ed. course.",
    },
    {
      q: "Are internships provided during the course?",
      a: "Yes, a compulsory school teaching internship of 20 weeks is spread across the 2-year program in recognized local schools as per Kuvempu University guidelines.",
    },
    {
      q: "How can I apply for admission?",
      a: "You can apply either online by filling out the form on our Contact Us page, or by visiting our campus office in person to submit the B.Ed. application form along with relevant transcripts.",
    },
  ];

  const subjects = [
    "Childhood and Growing Up",
    "Learning and Teaching",
    "Language Across the Curriculum",
    "Drama and Art in Education",
    "Understanding Disciplines and School Subjects",
    "Pedagogy of School Subject (English/Kannada/Math/Science/Social Science)",
  ];

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
          <span className="text-secondary font-bold text-xs uppercase tracking-widest font-sans">Academic Programs</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">B.Ed. Curriculum & Admissions</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Detailed information about course structure, eligibility, fees, and admission procedures for MDF College.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Course Info */}
        <div className="lg:col-span-8 flex flex-col gap-8">

          {/* B.Ed program details */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center gap-2">
              <GraduationCap className="text-secondary" />
              Bachelor of Education (B.Ed.) Overview
            </h2>
            <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed">
              The B.Ed. program at MDF College of Education is designed to equip teacher-trainees with pedagogical skills, psychological insights, and professional values. The curriculum balances academic theories of childhood development and classroom methods with hands-on practice sessions.
            </p>
          </div>

          {/* Curriculum breakdown */}
          <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-bold text-primary dark:text-white">Core Subjects & Pedagogical Methodology</h3>
            <p className="text-xs sm:text-sm text-neutral-dark/60 dark:text-neutral-light/60">
              The program covers fundamental educational papers and teaching methodologies for specific secondary school subjects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {subjects.map((sub, idx) => (
                <div key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
              <Info className="text-secondary" size={20} />
              Eligibility Criteria & Seat Intake
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-primary-dark/40 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-2">
                <h4 className="text-sm font-bold text-primary dark:text-white">Academic Qualifications</h4>
                <p className="text-xs text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
                  Graduation or post-graduation degree in Arts, Science, or Commerce with at least 50% aggregate marks (45% for SC/ST candidates of Karnataka state).
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-primary-dark/40 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-2">
                <h4 className="text-sm font-bold text-primary dark:text-white">Intake Capacity</h4>
                <p className="text-xs text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
                  MDF College has an approved annual intake capacity of <strong>100 students</strong> (2 units of 50 students each) as authorized by the NCTE.
                </p>
              </div>
            </div>
          </div>

          {/* Fees Structure table */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-primary dark:text-white">Fees Structure (Tentative)</h3>
            <div className="overflow-x-auto border border-slate-100 dark:border-slate-850 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-primary-dark text-primary dark:text-slate-200 border-b border-slate-100 dark:border-slate-800">
                    <th className="px-6 py-4 font-bold">Category</th>
                    <th className="px-6 py-4 font-bold">First Year Fee</th>
                    <th className="px-6 py-4 font-bold">Second Year Fee</th>
                    <th className="px-6 py-4 font-bold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-neutral-dark dark:text-slate-300">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-primary dark:text-white">Government Quota Seats</td>
                    <td className="px-6 py-4">₹ 15,000 / year</td>
                    <td className="px-6 py-4">₹ 15,000 / year</td>
                    <td className="px-6 py-4">Fees as fixed by the Govt. of Karnataka</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-primary dark:text-white">Management Quota Seats</td>
                    <td className="px-6 py-4">₹ 45,000 / year</td>
                    <td className="px-6 py-4">₹ 45,000 / year</td>
                    <td className="px-6 py-4">Inclusive of library & seminar fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Admission Sidebar & FAQs */}
        <div className="lg:col-span-4 flex flex-col gap-8">

          {/* Admissions Guide */}
          <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col gap-6">
            <h3 className="text-lg font-bold text-secondary-light">Admission Process</h3>
            <div className="flex flex-col gap-5 text-xs text-slate-200">
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Enquiry Submission</h4>
                  <p className="mt-1">Fill out the Enquiry Form or visit the campus to submit your details.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Document Verification</h4>
                  <p className="mt-1">Submit your graduation mark sheets, transfer certificate, and caste/category certificates for verification.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Confirmation & Fee</h4>
                  <p className="mt-1">Once verified, pay the admission fees to confirm your seat registration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-primary dark:text-white">Admission FAQs</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-primary-light shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-xs sm:text-sm text-primary dark:text-white hover:text-secondary transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80 border-t border-slate-50 dark:border-slate-800 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
