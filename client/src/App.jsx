import React, { useEffect } from "react";
import HomePage from "@/pages/page";
import CallForPapersPage from "@/pages/call-for-papers/page";
import CommitteesPage from "@/pages/commitees/page";
import CondolencePage from "@/pages/condolence/page";
import ConferenceSchedulePage from "@/pages/conference-schedule/page";
import DamSpecialIssuePage from "@/pages/damspecialissue/page";
import InvitedSpeakersPage from "@/pages/invitedspeakers/page";
import PhotosPage from "@/pages/photos/page";
import PreConfSchedulePage from "@/pages/pre-conf-schedule/page";
import PreConferenceSchoolPage from "@/pages/pre-conference-school/page";
import PreConferenceRegistrationPage from "@/pages/pre-conference-school/registration/page";
import YoungResearchersForumPage from "@/pages/pre-conference-school/young-researchers-forum/page";
import ProceedingsPage from "@/pages/proceedings/page";
import RegistrationPage from "@/pages/registration/page";
import RegistrationRegisterPage from "@/pages/registration/register/page";
import VenuePage from "@/pages/venue/page";
import Navbar from "@/components/shared/re-used/Navbar";
import Footer from "@/components/shared/re-used/Footer";
import GlobalHero from "@/components/shared/GlobalHero";
import { usePathname } from "@/compat/router";

const routes = {
  "/": {
    component: HomePage,
    title: "CALDAM 2027 | Conference on Algorithms and Discrete Applied Mathematics",
  },
  "/call-for-papers": {
    component: CallForPapersPage,
    title: "CALDAM 2027 | Call For Papers",
  },
  "/commitees": {
    component: CommitteesPage,
    title: "CALDAM 2027 | Committees",
  },
  "/condolence": {
    component: CondolencePage,
    title: "CALDAM 2027 | Condolence",
  },
  "/conference-schedule": {
    component: ConferenceSchedulePage,
    title: "CALDAM 2027 | Conference Schedule",
  },
  "/damspecialissue": {
    component: DamSpecialIssuePage,
    title: "CALDAM 2027 | DAM Special Issue",
  },
  "/invitedspeakers": {
    component: InvitedSpeakersPage,
    title: "CALDAM 2027 | Invited Speakers",
  },
  "/photos": {
    component: PhotosPage,
    title: "CALDAM 2027 | Photos",
  },
  "/pre-conf-schedule": {
    component: PreConfSchedulePage,
    title: "CALDAM 2027 | Pre-Conference Schedule",
  },
  "/pre-conference-school": {
    component: PreConferenceSchoolPage,
    title: "CALDAM 2027 | Pre-Conference School",
  },
  "/pre-conference-school/registration": {
    component: PreConferenceRegistrationPage,
    title: "CALDAM 2027 | Pre-Conference Registration",
  },
  "/pre-conference-school/young-researchers-forum": {
    component: YoungResearchersForumPage,
    title: "CALDAM 2027 | Young Researchers Forum",
  },
  "/proceedings": {
    component: ProceedingsPage,
    title: "CALDAM 2027 | Proceedings",
  },
  "/registration": {
    component: RegistrationPage,
    title: "CALDAM 2027 | Registration",
  },
  "/registration/register": {
    component: RegistrationRegisterPage,
    title: "CALDAM 2027 | Register",
  },
  "/venue": {
    component: VenuePage,
    title: "CALDAM 2027 | Venue",
  },
};

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-bluecolor">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you requested does not exist in this React build.
      </p>
    </main>
  );
}

export default function App() {
  const pathname = usePathname();
  const route = routes[pathname];
  const PageComponent = route?.component ?? NotFoundPage;
  const showGlobalHero = pathname !== "/";

  useEffect(() => {
    document.title = route?.title ?? "CALDAM 2027";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, route]);

  return (
    <>
      <Navbar />
      {showGlobalHero && <GlobalHero />}
      <PageComponent />
      <Footer />
    </>
  );
}
