"use client";

import Image from "next/image";

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-200 to-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My Stories
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Journey through my personal and professional life. Learn about the experiences that shaped me.
        </p>
        <div className="flex gap-4">
          <a
            href="#journey"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Read My Journey
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* My Journey Section */}
      <section id="journey" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
        <div className="space-y-12">
          {/* Story Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/story1.svg"
              alt="Story 1"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">The Beginning</h3>
              <p className="text-gray-700">
                I started learning web development a few years ago, exploring HTML, CSS, and JavaScript.
                It was challenging, but every small project built my confidence.
              </p>
            </div>
          </div>

          {/* Story Block 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/story2.svg"
              alt="Story 2"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">The Growth</h3>
              <p className="text-gray-700">
                Working on real projects taught me problem-solving, teamwork, and best coding practices.
                Each challenge shaped the developer I am today.
              </p>
            </div>
          </div>

          {/* Story Block 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/story3.svg"
              alt="Story 3"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Looking Forward</h3>
              <p className="text-gray-700">
                I continue to explore new technologies, building projects that help people and inspire creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-purple-600 text-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-purple-500 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold">50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="p-6 bg-purple-500 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold">10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="p-6 bg-purple-500 rounded-xl shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold">1000+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          I’m always open to collaborating on interesting projects or just having a friendly chat.
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
