import SteeringCommitee from "@/components/commitees/components/SteeringCommitee";
import ProgramCommitee from "@/components/commitees/components/ProgramCommitee";
import OrganizingCommitee from "@/components/commitees/components/OrganizingCommitee";

export const metadata = {
  title: "CALDAM 2027 | Committees",
  description: "Committees for CALDAM 2027.",
};

function Commitees() {
  return (
    <main className="px-4 py-8 sm:px-6 md:px-10 lg:px-14 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <SteeringCommitee />
        <ProgramCommitee />
        <OrganizingCommitee />
      </div>
    </main>
  );
}

export default Commitees;