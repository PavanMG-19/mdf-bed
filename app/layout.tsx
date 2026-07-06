import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDF College of Education - Premier B.Ed College",
  description: "Welcome to MDF College of Education. A leading teacher training institution recognized by NCTE, offering a 2-year Bachelor of Education (B.Ed.) program.",
  keywords: "MDF College of Education, B.Ed College, Teacher Training, Bachelor of Education, Education College, BEd Admissions, Shivamogga BEd college",
  authors: [{ name: "MDF College of Education" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-light dark:bg-primary-dark text-primary dark:text-neutral-light font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
