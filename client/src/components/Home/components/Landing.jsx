"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaArrowRight, FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import lnmiitJaipur5 from "@/assets/LNMIIT_Jaipur5.jpg";

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
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-[center_78%]"
      style={{ backgroundImage: `url(${lnmiitJaipur5})` }}
    >
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-900/25 to-slate-950/60" />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-8xl flex-col items-center justify-center px-4 py-10 text-center sm:px-8 sm:py-14 md:px-10 lg:px-12"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center rounded-full bg-slate-950/75 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-slate-700/80 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-300" />
              Featured Conference 2027
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 max-w-7xl">
            <h1 className="text-[2.2rem] font-bold leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] sm:text-[3rem] lg:text-[3.8rem]">
              13<sup className="text-[1.5rem] align-super sm:text-3xl">th</sup>{" "}
              Annual International Conference on Algorithms and Discrete Applied
              Mathematics
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 max-w-3xl">
            <h2 className="text-4xl font-semibold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] sm:text-5xl">
              CALDAM 2027
            </h2>
            <p className="mt-3 text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:text-3xl">
              Excellence in Algorithms & Discrete Mathematics
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-10 grid w-full max-w-2xl grid-cols-1 gap-4 rounded-2xl border border-white/25 bg-slate-900/40 p-4 text-white sm:grid-cols-2 sm:gap-0 sm:p-6"
          >
            <div className="flex flex-col items-center space-y-2 sm:border-r sm:border-white/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <BiSolidNavigation className="text-lg text-blue-200" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Location
              </p>
              <p className="text-lg font-bold text-white">
                The LNM Institute of Information Technology
              </p>
              <p className="text-md font-bold text-slate-200">
                Jaipur, Rajasthan, India
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                <FaCalendar className="text-base text-orange-200" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Date
              </p>
              <p className="text-lg font-bold text-white">
                11-13 February 2027
              </p>
              <p className="text-sm font-bold text-slate-200">
                3 Days of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 mt-4 max-w-7xl">
            <p className="rounded-2xl border border-white/25 bg-slate-900/40 p-4 text-xl font-medium leading-relaxed text-slate-100 drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)] md:text-2xl">
              The International Conference on Algorithms and Discrete Applied
              Mathematics (CALDAM), held under the aegis of the{" "}
              <span className="font-semibold text-blue-200">
                Association for Computer Science and Discrete Mathematics
                (ACSDM)
              </span>
              , is intended to bring together researchers working in the areas
              of Algorithms and Applied Discrete Mathematics and provide a
              high-quality forum for the dissemination and discussion of
              research results in these broad areas. CALDAM has originated from
              the ongoing efforts for promoting research in Algorithms and
              Discrete Mathematics.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link href="/call-for-papers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl sm:text-lg"
              >
                <span>Call for Papers</span>
                <FaArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
