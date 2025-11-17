"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Greeting() {
  return (
    <div className="h-auto flex pt-12 items-center justify-center bg-white overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8 relative z-10">
        {/* Left side – Text */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Greetings
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I am a dedicated
            Software Engineer
            passionate about using technology to create a better world. I build
            innovative solutions that drive impact and believe success comes
            through collaboration, teamwork, and a shared vision. With
            adaptability and continuous learning, I contribute expertise to
            projects that foster growth, efficiency, and positive change.
          </motion.p>
        </div>

        {/* Right side – SVG Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Image
            src="/favicon.svg"
            alt="Profile Illustration"
            width={350}
            height={350}
            className="w-64 md:w-80 lg:w-96 h-auto animate-float"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
}
