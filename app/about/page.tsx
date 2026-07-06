import Image from "next/image";
import { Award, Compass, Eye, ShieldCheck, CheckSquare } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Subpage Header Banner */}
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
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">About Our Institution</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Who We Are</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Learn about MDF College of Education, our legacy of training quality educators, and our commitment to educational excellence.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
          <div className="bg-secondary/10 text-secondary p-4 rounded-2xl w-fit">
            <Eye size={28} />
          </div>
          <h2 className="text-2xl font-bold text-primary dark:text-white">Our Vision</h2>
          <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed">
            To build a center of excellence in teacher education, producing value-oriented, academically competent, and socially responsible teacher-educators who will guide future generations and contribute to nation-building.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
          <div className="bg-secondary/10 text-secondary p-4 rounded-2xl w-fit">
            <Compass size={28} />
          </div>
          <h2 className="text-2xl font-bold text-primary dark:text-white">Our Mission</h2>
          <ul className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 flex flex-col gap-3">
            <li className="flex gap-2.5 items-start">
              <CheckSquare size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>To provide rigorous theoretical knowledge combined with practical teaching skills.</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckSquare size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>To instill ethical principles, dedication to teaching, and empathy for students.</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckSquare size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>To integrate ICT-enabled teaching aids and modern pedagogical theories into classroom practice.</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckSquare size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>To promote the importance of co-curricular activities for the holistic development of students.</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <CheckSquare size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>To build a center of excellence in teacher education, producing value-oriented, academically competent, and socially responsible teacher-educators who will guide future generations and contribute to nation-building.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Chairman & Principal Messages */}
      <section className="bg-slate-50 dark:bg-primary-dark/50 py-20 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-20">

          {/* Chairman message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4 order-2 lg:order-1">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Governing Council Message</span>
              <h3 className="text-2xl font-bold text-primary dark:text-white">Message from the Chairman</h3>
              <div className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 flex flex-col gap-4 leading-relaxed">
                <p>
                  &ldquo;Teaching is the profession that creates all other professions. At MDF College of Education, we take this responsibility very seriously. Our goal is to provide an environment that fosters intellectual growth, teaching competencies, and high moral standards.&rdquo;
                </p>
                <p>
                  We have invested in top-tier infrastructure, a highly qualified faculty, and comprehensive teaching tools to ensure our B.Ed. candidates receive the best training possible. I invite all aspiring educators to join us and experience teacher preparation at its finest.
                </p>
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-primary dark:text-white">Sri. B. R. Jayanth</h4>
                <span className="text-xs text-neutral-dark/60 dark:text-neutral-light/60">President, MDF(R.) Sagar</span>
              </div>
            </div>
            {/* Placeholder image for Chairman */}
            <div className="lg:col-span-4 order-1 lg:order-2 bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-4 rounded-3xl shadow-sm">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <Image src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png" alt="Dr. Arati Patil Principal" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
          </div>

          {/* Principal message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-4 rounded-3xl shadow-sm">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png"
                  alt="Dr. Arati Patil Principal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Institutional Head Message</span>
              <h3 className="text-2xl font-bold text-primary dark:text-white">Message from the Principal</h3>
              <div className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 flex flex-col gap-4 leading-relaxed">
                <p>
                  &ldquo;Educating the mind without educating the heart is no education at all.&rdquo; &mdash; Aristotle. At MDF College of Education, we believe in a holistic training process. A school teacher needs to understand not just &apos;what to teach&apos; but also &apos;how children learn&apos; and &apos;how to inspire&apos;.
                </p>
                <p>
                  Our B.Ed course curriculum is enriched with micro-teaching, lesson planning workshops, community camp, drama in education, and school internship modules. Our faculty works closely with each trainee to build communication, classroom management skills, and core teaching strategies.
                </p>
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-primary dark:text-white">Dr. Shilpa V N</h4>
                <span className="text-xs text-neutral-dark/60 dark:text-neutral-light/60">Principal, MDF College of Education</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Accreditations and Affiliations Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3 max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Approvals & Recognitions</span>
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white">Official Affiliations</h2>
          <p className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 leading-relaxed">
            MDF College of Education adheres strictly to government regulations and university guidelines to ensure legally sound and high-quality certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm flex flex-col gap-4">
            <ShieldCheck size={32} className="text-secondary" />
            <h3 className="text-lg font-bold text-primary dark:text-white">NCTE Recognition</h3>
            <p className="text-xs sm:text-sm text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
              Recognized by the National Council for Teacher Education (NCTE), Southern Regional Committee, Bangalore. Order No: F.SRO/NCTE/B.Ed/2008-09/12456.
            </p>
          </div>

          <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm flex flex-col gap-4">
            <Award size={32} className="text-secondary" />
            <h3 className="text-lg font-bold text-primary dark:text-white">University Affiliation</h3>
            <p className="text-xs sm:text-sm text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
              Permanently affiliated to Kuvempu University, Shivamogga, Karnataka, satisfying all academic requirements and semester guidelines.
            </p>
          </div>

          <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm flex flex-col gap-4">
            <ShieldCheck size={32} className="text-secondary" />
            <h3 className="text-lg font-bold text-primary dark:text-white">Govt. of Karnataka Approved</h3>
            <p className="text-xs sm:text-sm text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
              Fully approved and recognized by the Department of Higher Education, Government of Karnataka, allowing government school internship permissions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
