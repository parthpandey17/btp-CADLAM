export const metadata = {
  title: "CALDAM 2027 | Venue",
  description: "Venue information for CALDAM 2027.",
};

export default function VenuePage() {
  return (
    <main className="space-y-10 px-4 py-8 sm:px-6 md:px-10 lg:px-14 lg:py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-semibold uppercase sm:text-4xl">
          Venue
        </h1>
        <div className="rounded-xl bg-bluecolor p-6 text-white sm:p-8">
          <p className="text-2xl font-semibold">
            The LNM Institute of Information Technology
          </p>
          <p className="mt-2 text-lg font-medium">
            Jaipur, Rajasthan, India
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg">
            CALDAM 2027 will be organized jointly by the Department of Computer
            Science and Engineering, and the Department of Mathematics, The LNM
            Institute of Information Technology (LNMIIT), Jaipur.
          </p>
        </div>
      </section>
    </main>
  );
}
