import sponsorsData from "@/data/sponsors.json";
import Image from "next/image";
import Link from "next/link";

const Sponsors = ({ bg }) => {
  return (
    <div className={`${bg} p-8 lg:p-14`}>
      <h1 className="mb-10 text-4xl font-bold uppercase text-bluecolor">
        Sponsors
      </h1>
      {sponsorsData.length === 0 && (
        <div className="rounded-xl border border-bluecolor/20 bg-white p-6 text-lg font-medium text-slate-700">
          To be updated soon.
        </div>
      )}
      <div className="flex items-center justify-evenly max-lg:flex-col max-lg:space-y-5">
        {sponsorsData.map((d, index) => (
          <div
            key={index}
            className="mx-2 aspect-square w-64 rounded-lg border-2 border-bluecolor p-8 max-lg:w-60"
          >
            <Link href={d.companyPageURL} target="_blank">
              <Image
                src={d.imageURL}
                alt={d.organizationName}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
