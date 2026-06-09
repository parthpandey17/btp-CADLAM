"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import TextContraction from "@/components/Home/components/TextContraction";
import Link from "next/link";
import { RiArrowRightUpFill } from "react-icons/ri";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Landing() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      
    >
      {/* Overlay - Strong for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50" />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10 md:px-12 lg:px-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
              Pre-Conference School 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-6 max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Indo-Spanish Pre-Conference School on Algorithms and Combinatorics
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-10 max-w-3xl text-center">
            <h2 className="text-lg font-semibold text-gray-700 sm:text-xl md:text-2xl">
              Jointly Organized with IIT Bhilai
            </h2>
          </motion.div>

          {/* Metadata - Date & Location */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex max-w-3xl flex-col gap-6 sm:flex-row sm:gap-8 sm:justify-center text-center"
          >
            {/* Date */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                <FaCalendar className="text-base text-orange-600" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Date
              </p>
              <p className="text-sm font-medium text-gray-900">
                February 10–11, 2026
              </p>
              <p className="text-xs text-gray-600">
                2 Days of Learning
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-gray-300 sm:block"></div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <BiSolidNavigation className="text-lg text-blue-700" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Location
              </p>
              <Link
                href="https://www.lnmiit.ac.in/"
                target="_blank"
                className="group inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
              >
                The LNM Institute Of Technology
                <RiArrowRightUpFill className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <p className="text-xs text-gray-600">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-3xl text-center"
          >
            <TextContraction
              className="text-base leading-relaxed text-gray-700 md:text-lg"
              contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10–11, 2026 by the Department of Applied Mathematics and Computational Sciences, The LNM Institute Of Technology, India. The school is aimed at fulfilling two purposes: "
              contentRemaining="(i) as a pre-conference school for CALDAM 2026, and (ii) as an Indo-Spanish School on Algorithms and Combinatorics."
            />
          </motion.div>

          
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
