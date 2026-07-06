"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Drama,
  GraduationCap,
  Image as ImageIcon,
  Camera,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const iconMap = {
  drama: Drama,
  graduation: GraduationCap,
};

function ImageSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // cycle every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
        <ImageIcon size={32} />
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <Image
            src={img}
            alt={`${alt} - Image ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover group-hover/slider:scale-105 transition-transform duration-500"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer flex items-center justify-center border border-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer flex items-center justify-center border border-white/10"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-[2px]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "events", name: "Seminars & Events" },
    { id: "honors&achievements", name: "Honors & Achievements" },
  ];

  const galleryItems = [
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E1-1_lppua9.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E1-2_gkjeae.jpg"
      ],
      title: "B.Ed. Commencement Ceremony",
      category: "events",
      iconName: "drama",
      desc: "The journey to shaping the future begins here! We officially welcomed our newest cohort of future educators at the 2026 B.Ed. Orientation Programme. The day was filled with inspiring words, foundational insights into the teaching profession, and a wonderful sense of community as our students took their first steps toward becoming classroom leaders. Explore the gallery below to see the highlights, smiles, and collaborative spirit that set the tone for an incredible academic year ahead."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E2-1_g4u4zj.jpg"
      ],
      title: "Dr. B. R. Ambedkar Jayanti",
      category: "events",
      iconName: "drama",
      desc: "Education is the most powerful weapon to change the world, and no one exemplified this truth better than Babasaheb. We came together as a campus community to celebrate Ambedkar Jayanti, honoring his monumental contributions to social justice, equality, and constitutional democracy. For our B.Ed. trainees, his life stands as the ultimate blueprint for how education can uplift society and empower the marginalized."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E3-1_xwvtj0.jpg"
      ],
      title: "Yoga and its importance",
      category: "events",
      iconName: "drama",
      desc: "Unity of mind, body, and spirit! Our campus was full of vibrant energy as our B.Ed. department held a session dedicated to the practice of Yoga. Students and faculty stepped away from their desks and onto the mats to experience the profound benefits of this ancient practice. Beyond physical fitness, the session highlighted how practicing mindfulness helps future educators build emotional resilience and patience—qualities essential for leading tomorrow's classrooms."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E4-1_ov737p.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E4-2_lvwcee.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278762/E4-3_ylekta.jpg"
      ],
      title: "Student Union Inauguration",
      category: "events",
      iconName: "drama",
      desc: "Leadership is the capacity to translate vision into reality. The official Inauguration Ceremony of our newly elected Student Union was charged with immense pride and enthusiasm as our student leaders took their solemn oaths, promising to serve the college community with integrity, dedication, and responsibility. For future teachers, stepping into campus governance is the ultimate preparation for leading classrooms and school systems with confidence, marking the beginning of a year dedicated to student welfare and impactful leadership."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278760/E5-1_ze0bmb.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E5-2_dtgab9.jpg"
      ],
      title: "A Grand Welcome: Freshers Party 2026",
      category: "events",
      iconName: "drama",
      desc: "Every new beginning deserves a memorable celebration. To officially welcome our incoming batch of future educators, the seniors organized a vibrant Freshers Party filled with music, talent showcases, and incredible energy. The event served as the perfect ice-breaker, breaking down boundaries and creating an instant sense of belonging. It was a wonderful celebration of new friendships and a lively kickoff to what promises to be an unforgettable academic journey together."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278761/E6-1_vub8yj.jpg"
      ],
      title: "Health Checkup and Hands-on CPR Training Workshop",
      category: "events",
      iconName: "drama",
      desc: "Ensuring the safety and well-being of the school community is a core responsibility of every educator. To prepare our student-teachers for real-world campus environments, we hosted a vital health assessment and practical CPR workshop. Led by certified medical professionals, the session provided essential health screenings alongside step-by-step training in cardiopulmonary resuscitation. This interactive program gave our B.Ed. cohort the practical knowledge and confidence required to handle medical emergencies effectively."
    },
    {
      src: [
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278762/E7-1_o9guw7.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278762/E7-2_vthtym.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278763/E7-3_jqehwx.jpg",
        "https://res.cloudinary.com/djmhlbhee/image/upload/v1781278762/E7-4_uc90xp.jpg"
      ],
      title: "Celebrating Creativity and Confidence: Fashion Fiesta",
      category: "events",
      iconName: "drama",
      desc: "Teaching is an art, and creativity knows no bounds! Our B.Ed. students traded their textbooks for the runway at our campus Fashion Fiesta, showcasing an incredible display of style, confidence, and cultural diversity. The event allowed our future educators to express their unique personalities, step out of their comfort zones, and build stage presence—a vital skill for anyone leading a classroom. It was a spectacular celebration of teamwork, design, and vibrant energy that brought our entire college community together."
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
          <span className="text-secondary font-bold text-xs uppercase tracking-widest font-sans">Visual Gallery</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">Campus & Event Memories</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            A window into the academic life, practical learning sessions, and cultural achievements of MDF College of Education.
          </p>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-10 flex flex-col items-center gap-12">
        <div className="flex flex-wrap gap-2.5 justify-center bg-slate-50 dark:bg-primary-light p-2 rounded-2xl border border-slate-100 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${filter === cat.id
                ? "bg-secondary text-white shadow"
                : "text-neutral-dark/80 hover:text-secondary dark:text-neutral-light/80 hover:bg-slate-100 dark:hover:bg-primary-dark"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery List (Alternating Details Layout) */}
        <div className="flex flex-col gap-16 lg:gap-24 w-full mt-4">
          {filteredItems.map((item, idx) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || ImageIcon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Image Box */}
                <div
                  className={`lg:col-span-5 bg-white dark:bg-white/70 border border-slate-100 dark:border-primary-light/40 p-1 rounded-1xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="relative h-64 sm:h-80 w-full rounded-1xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <ImageSlideshow images={item.src} alt={item.title} />
                  </div>
                </div>

                {/* Description Box */}
                <div
                  className={`lg:col-span-7 flex flex-col gap-5 ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="border border-secondary/35 rounded-xl p-2.5 bg-secondary/10 dark:bg-secondary/20 text-secondary inline-flex items-center justify-center shrink-0">
                      <IconComponent size={22} />
                    </div>
                    <div className="flex flex-col">
                      {/*<span className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                        {item.category === "campus"
                          ? "Campus"
                          : item.category === "labs"
                            ? "Laboratory"
                            : "Events"}
                      </span>*/}
                      <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-dark/80 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>


                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 flex flex-col items-center gap-3 text-slate-400 text-sm">
            <ImageIcon size={48} className="opacity-40" />
            <span>No contents found in this category.</span>
          </div>
        )}
      </section>
    </div>
  );
}
