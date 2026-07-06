import Image from "next/image";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Faculty() {
  const teachingStaff = [
    {
      name: "Dr. Shilpa V N",
      designation: "Principal",
      qualification: "M.A. (English), M.Ed., Ph.D. in Education",
      experience: "18 Years",
      specialization: "Educational Administration, English Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Raveendra H N",
      designation: "Assistant Professor in Education",
      qualification: "M.Sc. (Physics), M.Ed., KSET",
      experience: "10 Years",
      specialization: "Educational Technology, Mathematics Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Dattatreya P Hegde",
      designation: "Assistant Professor in Education",
      qualification: "M.A. (History), M.Ed., NET",
      experience: "8 Years",
      specialization: "Sociological Foundations, Social Science Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Haleshappa N",
      designation: "Assistant Professor in Education",
      qualification: "M.A. (Kannada), M.Ed.",
      experience: "7 Years",
      specialization: "Language Studies, Kannada Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Vinayaka A S",
      designation: "Assistant Professor in Education",
      qualification: "M.Sc. (Chemistry), M.Ed.",
      experience: "6 Years",
      specialization: "Guidance & Counselling, Science Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Ms. Savitha H",
      designation: "Assistant Professor in Education",
      qualification: "M.Sc. (Chemistry), M.Ed.",
      experience: "6 Years",
      specialization: "Guidance & Counselling, Science Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Ramesh N Naik",
      designation: "Assistant Professor in Education",
      qualification: "M.Sc. (Chemistry), M.Ed.",
      experience: "6 Years",
      specialization: "Guidance & Counselling, Science Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Janardhan Gudigar S N",
      designation: "Assistant Professor in Education",
      qualification: "M.Sc. (Chemistry), M.Ed.",
      experience: "6 Years",
      specialization: "Guidance & Counselling, Science Pedagogy",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
    {
      name: "Mr. Bharath Raj N",
      designation: "Assistant Professor in Physical Education and Sports",
      qualification: "B.P.Ed., M.P.Ed.",
      experience: "6 Years",
      specialization: "Physical Education and Sports",
      image: "https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png",
    },
  ];

  const adminStaff = [
    { name: "Mr. Mohan Kumar M B", role: "Librarian (M.Lib.Sc.)" },
    { name: "Mr. Anjanmurthy C", role: "Office Superintendent" },
    { name: "Mr. X", role: "Office Attendant" },
    { name: "Ms. Indira", role: "Helper" },
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
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Our Team</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Faculty & Staff Members</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Meet the experienced educators and administrators dedicated to training and guiding future school teachers.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 flex flex-col gap-16">

        {/* Principal Detailed Feature Card */}
        <div className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 max-w-xs mx-auto md:mx-0 bg-slate-50 dark:bg-primary-dark/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="relative h-72 w-full rounded-xl overflow-hidden">
              <Image
                src={teachingStaff[0].image || "/principal.png"}
                alt={teachingStaff[0].name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4">
            <span className="inline-flex self-start bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded">
              Institutional Head
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white">
              {teachingStaff[0].name}
            </h2>
            <p className="text-sm text-neutral-dark/80 dark:text-neutral-light/80 leading-relaxed italic">
              &ldquo;Providing our teacher-candidates with academic rigor, practical expertise, and high moral benchmarks is our continuous endeavor. I am proud to lead a highly skilled team of educators who deliver quality instruction.&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-5 text-xs sm:text-sm text-neutral-dark/80 dark:text-neutral-light/80">
              {/*<div className="flex gap-2.5 items-center">
                <GraduationCap size={18} className="text-secondary shrink-0" />
                <span><strong>Qualification:</strong> {teachingStaff[0].qualification}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Award size={18} className="text-secondary shrink-0" />
                <span><strong>Experience:</strong> {teachingStaff[0].experience}</span>
              </div>
              <div className="flex gap-2.5 items-center sm:col-span-2">
                <BookOpen size={18} className="text-secondary shrink-0" />
                <span><strong>Specialization:</strong> {teachingStaff[0].specialization}</span>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Teaching Staff Grid */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-primary dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            Assistant Professors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingStaff.slice(1).map((faculty, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                {/* Faculty Portrait Placeholder */}
                <div className="h-44 w-full bg-slate-50 dark:bg-primary-dark/80 rounded-2xl flex flex-col items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-800/60 shrink-0">

                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    height={100}
                    width={100}
                    className="object-cover"
                  />
                </div>
                {/* Faculty details */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h4 className="font-bold text-base text-primary dark:text-white">{faculty.name}</h4>
                  <span className="text-xs text-secondary font-semibold">{faculty.designation}</span>
                  {/*<div className="text-xs text-neutral-dark/70 dark:text-neutral-light/70 flex flex-col gap-1.5 border-t border-slate-50 dark:border-slate-800 pt-3 mt-2">
                    <p><strong>Qual:</strong> {faculty.qualification}</p>
                    <p><strong>Exp:</strong> {faculty.experience}</p>
                    <p><strong>Spec:</strong> {faculty.specialization}</p>
                  </div>*/}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Teaching / Support Staff */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-primary dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            Administrative & Support Staff
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminStaff.map((staff, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-primary-light border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm text-center flex flex-col gap-1"
              >
                <h4 className="font-bold text-sm text-primary dark:text-white">{staff.name}</h4>
                <span className="text-xs text-slate-500 font-medium">{staff.role}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
