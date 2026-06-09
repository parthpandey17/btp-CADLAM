import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
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

export default function GlobalHero() {
  return (
    <section
      className="relative min-h-[44vh] w-full overflow-hidden bg-cover bg-[center_78%]"
      style={{ backgroundImage: `url(${lnmiitJaipur5})` }}
    >
      <div className="absolute inset-0 bg-slate-950/48" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/26 to-slate-950/55" />

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mx-auto flex min-h-[40vh] w-full max-w-8xl flex-col items-center justify-center px-4 py-6 text-center sm:px-8 sm:py-8 md:px-10 lg:px-12"
        >
          <motion.div variants={itemVariants} className="mb-10 max-w-7xl">
            <h1 className="text-[1.6rem] font-bold leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] sm:text-[2rem] lg:text-[2.5rem]">
              13<sup className="text-[1.5rem] align-super sm:text-3xl">th</sup>{" "}
              Annual International Conference on Algorithms and Discrete Applied
              Mathematics
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] sm:text-2xl">
              CALDAM 2027
            </h2>
            <p className="mt-1 text-base font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:text-lg">
              Excellence in Algorithms & Discrete Mathematics
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-1 grid w-full max-w-lg grid-cols-1 gap-3 rounded-2xl border border-white/25 bg-slate-900/40 p-2.5 text-white sm:grid-cols-2 sm:gap-0 sm:p-3"
          >
            <div className="flex flex-col items-center space-y-2 sm:border-r sm:border-white/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <BiSolidNavigation className="text-base text-blue-200" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Location
              </p>
              <p className="text-md font-bold text-white sm:text-md">
                The LNM Institute of Information Technology
              </p>
              <p className="text-[11px] font-bold text-slate-200 sm:text-xs">
                Jaipur, Rajasthan, India
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <FaCalendar className="text-sm text-orange-200" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Date
              </p>
              <p className="text-md font-bold text-white sm:text-md">
                11-13 February 2027
              </p>
              <p className="text-[11px] font-bold text-slate-200 sm:text-xs">
                3 Days of Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
