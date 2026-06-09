import Sponsors from "./components/Sponsors";
import Landing from "./components/Landing";
import Organizers from "./components/Organizers";
import Timeline from "./components/Timeline";
import Timer from "./components/Timer";
import links from "@/data/links-marquee.json";
import CaldamTopics from "@/data/caldamTopics.json";
import LinksMarquee from "./components/LinksMarquee";
import Condolense from "./components/Condolense";
const HomePage = () => {
  return (
    <>
      <Landing />
      <LinksMarquee links={links} />
      <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-6xl space-y-4">
          <h2 className="text-bluecolor text-3xl font-semibold sm:text-4xl">
            CALDAM 2027
          </h2>
          <p className="text-base leading-7 text-slate-800 sm:text-lg">
            The thirteenth CALDAM (CALDAM 2027) will be organized jointly by the
            Department of Computer Science and Engineering, and the Department
            of Mathematics, The LNM Institute of Information Technology
            (LNMIIT), Jaipur from 11th to 13th of February 2027. As in earlier
            CALDAMs, the proceedings of accepted papers of CALDAM 2027 will be
            published in the Lecture Notes in Computer Science by Springer.
            Also, selected papers of CALDAM 2027 are likely to be published in a
            special issue of the Theoretical Computer Science (TCS) journal of
            Elsevier and the Acta Informatica journal of Springer. As before, it
            is likely that Springer will sponsor awards for the best student
            presentations.
          </p>
        </div>
      </section>
      <section className="bg-bluecolor px-4 py-10 sm:px-6 md:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
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
      {/* <Timer endTime={"2026-02-17"} /> */}
      {/*<Timeline /> //use timeline for final version */}
      {/* <div className="h-[300px] p-8 max-lg:flex-col lg:h-[400px] lg:p-14">
        <div>
          <h3 className="text-4xl font-bold">TIMELINE</h3>
        </div>
        <div className="flex h-full items-center justify-center font-semibold">
          <p className="text-2xl"> TBA </p>
        </div>
      </div> */}
      {/* <Condolense /> */}
      <Organizers />
      <Sponsors />
    </>
  );
};

export default HomePage;
