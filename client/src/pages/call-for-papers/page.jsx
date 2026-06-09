import React from "react";
import CaldamTopics from "@/data/caldamTopics.json";
import Component from "./_components/Component";

export const metadata = {
  title: "CALDAM 2027 | Call For Papers",
  description: "Call For Papers for CALDAM 2027.",
};

export default function Page() {
  return (
    <main className="space-y-10 bg-white pb-12 sm:space-y-14 sm:pb-16">
      <section className="bg-bluecolor px-4 py-10 sm:px-6 md:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">
            Call For Papers
          </h1>
          <div className="rounded-xl bg-white p-6 text-slate-700 shadow-sm sm:p-8">
            <h2 className="text-bluecolor text-2xl font-semibold">
              Submission Link
            </h2>
            <a
              href="https://easychair.org/conferences/?conf=caldam2027"
              target="_blank"
              rel="noreferrer"
              className="bg-orange mt-3 inline-flex rounded-lg px-5 py-3 font-semibold text-slate-900 transition hover:opacity-90"
            >
              Submit via EasyChair
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Submission Guidelines
            </h2>
            <p className="text-base leading-7 text-slate-800 sm:text-lg">
              CALDAM 2027 invites papers describing original research in the
              areas of design, analysis and experimental evaluation of
              algorithms and in discrete applied mathematics. An indicative list
              of sub-areas is given below.
            </p>
            <p className="text-base leading-7 text-slate-800 sm:text-lg">
              Papers must be typeset using LaTeX/LaTeX2e and may not exceed 14
              pages in LNCS style, including bibliographic references. Further
              details may be included in a clearly marked appendix that will be
              read at the discretion of the program committee.
            </p>
            <p className="text-base leading-7 text-slate-800 sm:text-lg">
              Only electronic submission is allowed. Submitted papers must
              describe previously unpublished work and may not be submitted
              concurrently to another conference with refereed proceedings or to
              a refereed journal. Please find the guidelines for authors on the{" "}
              <a
                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                target="_blank"
                rel="noreferrer"
                className="text-bluecolor font-semibold underline underline-offset-4"
              >
                Springer website
              </a>
              .
            </p>
          </div>
          <aside className="bg-bluecolor rounded-xl p-6 text-white shadow-sm sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold">Important Dates</h2>
            <Component />
          </aside>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Proceedings</h2>
          <p className="mt-4 text-base leading-7 text-slate-800 sm:text-lg">
            The proceedings of accepted papers of CALDAM 2027 will be published
            in the Lecture Notes in Computer Science (LNCS) by Springer. Also,
            selected papers of CALDAM 2027 are likely to be published in a
            special issue of the Theoretical Computer Science (TCS) journal of
            Elsevier and the Acta Informatica journal of Springer.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">More Details</h2>
          <p className="mt-3 text-base leading-7 text-slate-800 sm:text-lg">
            For more details, check out the{" "}
            <a
              href="https://caldam2026.iitdh.ac.in"
              target="_blank"
              rel="noreferrer"
              className="text-bluecolor font-semibold underline underline-offset-4"
            >
              CALDAM 2026 website
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-bluecolor space-y-6 px-4 py-8 sm:px-6 md:px-10 lg:px-14 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              CALDAM 2027 Topics
            </h2>
            <p className="font-light italic text-white">but not limited to</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 text-black sm:grid-cols-2 lg:grid-cols-3">
            {CaldamTopics.map((topic) => (
              <li
                key={topic}
                className="flex min-h-[72px] items-center justify-center rounded-3xl bg-white px-4 py-3 text-center font-semibold shadow-sm"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
