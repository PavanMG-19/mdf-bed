import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Calendar, Award, ArrowRight, CheckCircle, Bell } from "lucide-react";

export default function Home() {
  const statistics = [
    { label: "Years of Legacy", value: "22+", icon: <Calendar className="text-secondary" size={24} /> },
    { label: "NCTE Intake Seats", value: "100", icon: <Users className="text-secondary" size={24} /> },
    { label: "B.Ed. Pass Rate", value: "100%", icon: <Award className="text-secondary" size={24} /> },
    { label: "Teachers Trained", value: "2000+", icon: <BookOpen className="text-secondary" size={24} /> },
  ];

  const highlights = [
    {
      title: "Experienced Faculty",
      desc: "Learn from Ph.D. holders and expert educators with decades of school teaching and training experience.",
    },
    {
      title: "ICT-Enabled Learning",
      desc: "Smart classrooms and computer labs designed to prepare teachers for modern, digital classrooms.",
    },
    {
      title: "Practical Internships",
      desc: "Extensive hands-on teaching practice in leading public and private schools across the region.",
    },
  ];

  const notices = [
    { date: "June 10, 2026", title: "Admission Enquiry open for B.Ed. 2026-2028 batch.", active: true },
    { date: "June 02, 2026", title: "Dates for B.Ed. Second Semester Practicum Examinations announced.", active: false },
    { date: "May 25, 2026", title: "National Level Seminar on 'Modern Pedagogies in Secondary Education' on June 18.", active: false },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white bg-slate-950 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764606/Pragathi_school_photo_dfrs8j.jpg"
            alt="MDF College Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 text-center sm:text-left flex flex-col gap-6">
          <span className="inline-flex self-center sm:self-start text-white font-bold text-md uppercase tracking-widest px-1 py-1">
            Recognized by NCTE | Affiliated to Kuvempu University
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight max-w-5xl leading-tight">
            Nurturing Educators for a <span className="text-secondary-light">Brighter Tomorrow</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-5xl leading-relaxed">
            Begin your journey towards a fulfilling teaching career at MDF College of Education. Receive premier training, hands-on internships, and holistic pedagogy instruction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center sm:justify-start">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
            >
              Apply Online
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:-translate-y-0.5 transition-all text-center"
            >
              Explore College &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="relative z-20 max-w-7xl mx-auto w-full px-4 lg:px-8 -mt-16">
        <div className="bg-white dark:bg-primary-light rounded-3xl shadow-xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800 p-8">
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="bg-secondary/10 p-3 rounded-2xl mb-3">{stat.icon}</div>
              <span className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white leading-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-dark/70 dark:text-neutral-light/70 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome & Info */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Welcome to MDF College
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary dark:text-white leading-snug">
            Shaping the Teachers Who Will Inspire the Next Generation
          </h2>
          <p className="text-base text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed">
            MDF College of Education was established with a singular vision: to impart quality teacher education. We believe that teaching is not just a profession, but a calling. Our 2-year Bachelor of Education (B.Ed.) program focuses on theoretical knowledge, modern methodologies, child psychology, and practical classroom teaching.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <span className="text-sm font-semibold text-neutral-dark dark:text-neutral-light">Individual mentorship programs</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <span className="text-sm font-semibold text-neutral-dark dark:text-neutral-light">Regular workshops & micro-teaching</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <span className="text-sm font-semibold text-neutral-dark dark:text-neutral-light">NCTE-approved laboratories</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <span className="text-sm font-semibold text-neutral-dark dark:text-neutral-light">100% placement assistance</span>
            </div>
          </div>
          <Link href="/about" className="text-secondary font-bold hover:underline inline-flex items-center gap-2 mt-2">
            Read Principal&apos;s Message &amp; Vision <ArrowRight size={16} />
          </Link>
        </div>

        {/* Principal Portrait Welcome Card */}
        <div className="lg:col-span-5 bg-white dark:bg-primary-light rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md p-6 relative overflow-hidden">
          <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
            <Image
              src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png"
              alt="Principal MDF College"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-bold text-primary dark:text-white">Dr. Shilpa V N</h3>
            <span className="text-xs text-secondary font-semibold uppercase tracking-wider">Principal, MDF College of Education</span>
            <p className="text-xs text-neutral-dark/60 dark:text-neutral-light/60 mt-3 italic leading-relaxed">
              &ldquo;We welcome you to a community of learners and educators. At MDF College of Education, our mission is to prepare you for the classrooms of today and the educational leadership of tomorrow.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Features Grid */}
      <section className="bg-slate-50 dark:bg-primary-dark/50 py-20 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center flex flex-col gap-3 mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Why MDF College</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white">Our Educational Pillars</h2>
            <p className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 leading-relaxed">
              Creating a foundation where excellence meets practical experience, helping our teacher-candidates build confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                <span className="text-3xl font-extrabold text-secondary/20">0{i + 1}</span>
                <h3 className="text-xl font-bold text-primary dark:text-white">{h.title}</h3>
                <p className="text-sm text-neutral-dark/70 dark:text-neutral-light/70 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board and Events */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Notice Board */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-2xl font-bold text-primary dark:text-white flex items-center gap-2.5">
              <Bell className="text-secondary" size={24} />
              Notice Board
            </h3>
            <span className="text-xs font-semibold text-secondary hover:underline cursor-pointer">View All</span>
          </div>

          <div className="flex flex-col gap-4">
            {notices.map((n, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${n.active
                  ? "bg-secondary/5 border-secondary/30"
                  : "bg-white dark:bg-primary-light border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                  }`}
              >
                <span className="text-xs text-secondary font-semibold">{n.date}</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mt-1.5 leading-snug">
                  {n.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar / Quick Info */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-2xl font-bold text-primary dark:text-white">Academic Calendar</h3>
          </div>
          <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-8 flex flex-col justify-between h-full gap-6 shadow-lg">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-secondary-light">B.Ed. Academic Year 2026</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Stay updated with the crucial dates for exams, micro-teaching sessions, seminars, internships, and cultural activities.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-xs text-slate-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Practicum Record Submission</span>
                <span className="font-semibold text-white">June 20, 2026</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Community Living Camp</span>
                <span className="font-semibold text-white">July 05 - July 10, 2026</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>B.Ed. Annual Examinations</span>
                <span className="font-semibold text-white">August 12, 2026 onwards</span>
              </div>
            </div>
            <Link
              href="/academics"
              className="bg-white text-primary hover:bg-slate-100 py-3 rounded-xl text-center text-sm font-bold shadow-md transition-colors"
            >
              Admission Prospectus (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-50 dark:bg-primary-dark/50 py-20 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center flex flex-col gap-3 mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Success Stories</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white">What Our Alumni Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-primary-light p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 italic leading-relaxed">
                &ldquo;The B.Ed training I received at MDF College of Education was exceptional. The focus on micro-teaching and class internships gave me the confidence to handle high school classes on day one of my job. Highly recommend it!&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-2 border-t border-slate-50 dark:border-slate-800 pt-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-sm">
                  SS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary dark:text-white">Sanjay S.</h4>
                  <span className="text-xs text-neutral-dark/50 dark:text-neutral-light/50">High School Teacher (Social Science)</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-primary-light p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 italic leading-relaxed">
                &ldquo;MDF College doesn&apos;t just focus on theoretical books; they trained us in computer integrated teaching, art and drama in education. This has made me a creative teacher, and my students love my classes.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-2 border-t border-slate-50 dark:border-slate-800 pt-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-sm">
                  MP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary dark:text-white">Meera Prasad</h4>
                  <span className="text-xs text-neutral-dark/50 dark:text-neutral-light/50">Primary Educator (English & Mathematics)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
