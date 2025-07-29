import CabinCard from "@/app/_components/CabinCard";
import { getCabin, getCabins } from "../_lib/data-service";
import Cabinlist from "../_components/Cabinlist";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// after every hour data would be refetched and stored in the cache at route level
export const revalidate = 86400;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl mb-3 text-accent-400 font-semibold">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-sm mb-6 max-w-3xl">
        Cozy yet luxurious cabins nestled in the Italian Dolomites. Wake up to
        mountain views, explore serene forests, or relax in a private hot tub
        under the stars. Your peaceful escape awaits.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <Cabinlist filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
