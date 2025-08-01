"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const activefilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activefilter={activefilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activefilter={activefilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activefilter={activefilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activefilter={activefilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activefilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activefilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
