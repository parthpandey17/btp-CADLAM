import programCommmitee from "@/data/programCommitee.json";
import CardGrid from "./CardGrid";

export default function ProgramCommitee() {
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <p className="mb-10 text-4xl font-bold uppercase text-white lg:text-5xl">
        Program Committee
      </p>

      <div className="rounded-xl bg-white p-6 text-lg font-medium text-slate-700">
        To be updated soon.
      </div>

      <div className="mt-8">
        <CardGrid data={programCommmitee} darkVariant={true} />
      </div>
    </div>
  );
}