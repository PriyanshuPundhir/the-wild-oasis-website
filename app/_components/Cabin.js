import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-10 border border-primary-800 py-1.5 px-6 mb-16">
      <div className="relative scale-[1.1] -translate-x-1.5">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-5xl mb-3 translate-x-[-180px] bg-primary-950 p-4 pb-1 w-[130%]">
          Cabin {name}
        </h3>

        <p className="text-sm text-primary-300 mb-6">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-2.5 mb-5">
          <li className="flex gap-1.5 items-center">
            <UsersIcon className="h-3.5 w-3.5 text-primary-600" />
            <span className="text-sm">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-1.5 items-center">
            <MapPinIcon className="h-3.5 w-3.5 text-primary-600" />
            <span className="text-sm">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-1.5 items-center">
            <EyeSlashIcon className="h-3.5 w-3.5 text-primary-600" />
            <span className="text-sm">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
