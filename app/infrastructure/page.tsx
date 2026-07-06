import Image from "next/image";
import { Book, Cpu, FlaskConical, Palette, Layers } from "lucide-react";

export default function Infrastructure() {
  const facilities = [
    {
      title: "Extensive College Library",
      desc: "Our college library is a hub of knowledge, housing a vast collection of books, textbooks, reference materials, encyclopedias, and academic journals.",
      image: "/library.png",
      icon: <Book size={20} className="text-secondary" />,
      features: [
        "5,000+ books on education and methodologies",
        "12 national and international educational journals",
        "Digital library section with e-journal access",
        "Spacious reading room accommodating 60 students",
      ],
    },
    {
      title: "Science & Mathematics Laboratory",
      desc: "Equipped with essential apparatus, glassware, chemicals, and laboratory models to perform physical and biological science experiments.",
      image: "/science_lab.png",
      icon: <FlaskConical size={20} className="text-secondary" />,
      features: [
        "Compound and student microscopes",
        "Physical science models and charts",
        "Biological specimens and slide preparations",
        "Mathematics teaching aids and geometric models",
      ],
    },
    {
      title: "Art & Craft Resource Center",
      desc: "A creative workshop space where teacher trainees learn to make teaching aids, puppets, charts, and engage in creative expressions.",
      image: "/art_craft.png",
      icon: <Palette size={20} className="text-secondary" />,
      features: [
        "Drawing tables and painting supplies",
        "Puppet-making materials for educational plays",
        "Clay modeling equipment",
        "Annual art and craft exhibition setup",
      ],
    },
    {
      title: "ICT Resource Center (Computer Lab)",
      desc: "A fully air-conditioned computer center designed to train B.Ed. candidates in computer-aided instruction and online learning systems.",
      image: "/campus_hero.png", // reusing campus hero for general layout
      icon: <Cpu size={20} className="text-secondary" />,
      features: [
        "25+ internet-connected modern desktop systems",
        "Audio-visual equipment and smart projectors",
        "Teacher training software tools",
        "High-speed campus-wide Wi-Fi network",
      ],
    },
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
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Campus Tour</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Infrastructure & Facilities</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Explore our state-of-the-art resource centers, laboratories, and study spaces designed for comprehensive teacher preparation.
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Laying Foundations</span>
            <h2 className="text-2xl font-bold text-primary dark:text-white">A Resource-Rich Environment for Educators</h2>
            <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed">
              MDF College of Education provides an ideal campus setup that aligns with NCTE requirements. From specialized psychology testing kits to smart classrooms, our physical resources are curated to help B.Ed. candidates transition smoothly from student teachers to professional educators.
            </p>
          </div>
          <div className="lg:col-span-4 bg-secondary/5 dark:bg-primary-dark/60 border border-secondary/20 p-6 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-secondary font-bold text-sm">
              <Layers size={18} />
              <span>Campus Assets Summary</span>
            </div>
            <ul className="text-xs text-neutral-dark/70 dark:text-neutral-light/70 flex flex-col gap-2">
              <li>• Multi-Purpose Assembly Hall (150 Seats)</li>
              <li>• Psychology Lab & Resource Room</li>
              <li>• Sports & Playground Facilities</li>
              <li>• Clean Drinking Water & Power Backup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-16">
        {facilities.map((fac, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* Image Box */}
            <div
              className={`lg:col-span-5 bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-3 rounded-3xl shadow-sm ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
            >
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Description Box */}
            <div
              className={`lg:col-span-7 flex flex-col gap-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary/15 p-2.5 rounded-xl text-secondary">{fac.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">{fac.title}</h3>
              </div>
              <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed">
                {fac.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {fac.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex gap-2 items-start text-xs sm:text-sm text-neutral-dark/70 dark:text-neutral-light/70">
                    <span className="text-secondary font-bold shrink-0">&bull;</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
