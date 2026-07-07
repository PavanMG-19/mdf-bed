import Link from "next/link";
import { Phone, Mail, MapPin, Award, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-light border-t border-primary-light">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Info Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-secondary to-secondary-light p-2 rounded-lg text-white">
              <Award size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg tracking-tight leading-tight">MDF COLLEGE</span>
              <span className="text-[10px] tracking-wider text-secondary uppercase font-semibold">Of Education (B.Ed.)</span>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            MDF College of Education is a premier teacher training institution dedicated to shaping compassionate, knowledgeable, and highly skilled educators for the future.
          </p>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Award size={14} className="text-secondary" />
              Recognized by NCTE, New Delhi
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={14} className="text-secondary" />
              Affiliated to State University
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
            <li>
              <Link href="/" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">About Us</Link>
            </li>
            <li>
              <Link href="/academics" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Academics & Admission</Link>
            </li>
            <li>
              <Link href="/infrastructure" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Campus Infrastructure</Link>
            </li>
            <li>
              <Link href="/faculty" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Faculty Members</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Photo Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Course Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Academic Course
          </h3>
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="text-sm font-semibold text-secondary">Bachelor of Education (B.Ed.)</h4>
              <p className="text-xs text-slate-300 mt-1">Duration: 2 Years (Regular Program)</p>
              <p className="text-xs text-slate-300">Intake Capacity: 100 Students</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Eligibility Criteria</h4>
              <p className="text-xs text-slate-400 mt-1">50% Marks in Graduation or Post-Graduation. 5% relaxation for reserved categories.</p>
            </div>
            <Link
              href="/academics"
              className="text-xs font-bold text-secondary-light hover:underline mt-1 inline-block"
            >
              Learn More about Admissions &rarr;
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
            <li className="flex gap-2.5">
              <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
              <span>Tarapur Campus, BH Road, Sagar, Shivamogga, Karnataka - 577401</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={16} className="text-secondary shrink-0" />
              <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 733 846 4183</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={16} className="text-secondary shrink-0" />
              <a href="mailto:[EMAIL_ADDRESS]" className="hover:text-secondary transition-colors">mdf.bedcollege@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-primary-dark text-slate-400 text-xs py-6 border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MDF College of Education. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-secondary transition-colors">Admission Enquiry</Link>
            <span className="text-slate-700">|</span>
            <Link href="/about" className="hover:text-secondary transition-colors">Vision & Mission</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
