import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AppointmentEmptyCardProps {
  onClick?: () => void;
  time?: string;
}

export function AppointmentEmptyCard({
  onClick,
  time,
}: AppointmentEmptyCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer items-center rounded-xl border border-dashed border-gray-300 p-3 transition-all hover:border-gray-400 hover:bg-gray-50"
    >
      <div className="flex w-full items-center gap-3">
        {/* TIME SLOT */}
        <div className="min-w-28 rounded-lg border border-dashed border-gray-300 bg-transparent px-3 py-2 text-center text-lg font-semibold text-gray-500 group-hover:text-gray-600">
          {time || "9:00 AM"}
        </div>

        {/* EMPTY CONTENT AREA */}
        <div className="flex flex-1 items-center gap-3">
          {/* <div className="h-8 w-px bg-gray-200" /> */}

          {/* EMPTY PATIENT ICON */}
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-transparent p-2 text-lg text-gray-400 group-hover:text-gray-500">
            <FontAwesomeIcon icon={faPlus} className="text-sm" />
          </div> */}

          {/* EMPTY PATIENT INFO */}
          {/* <div className="flex min-w-96 flex-col">
            <div className="font-bold text-gray-400 group-hover:text-gray-500">
              Add Patient • Select Type
            </div>
            <div className="text-sm font-medium text-gray-300 group-hover:text-gray-400">
              Breed • Owner Name
            </div>
          </div> */}

          {/* EMPTY PROVIDER INFO */}
          {/* <div className="flex items-center gap-3">
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex min-w-80 flex-col">
              <div className="font-bold text-gray-400 group-hover:text-gray-500">
                Select Provider
              </div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-gray-400">
                Facility
              </div>
            </div>
          </div> */}
        </div>

        {/* EMPTY STATUS & ACTION */}
        <div className="flex items-center gap-4">
          {/* <div className="rounded-full border border-dashed border-gray-300 bg-transparent px-3 py-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">
            Scheduled
          </div> */}

          <div className="rounded-full border border-dashed border-gray-300 bg-transparent px-4 py-2 font-bold text-gray-400 transition-colors group-hover:border-gray-400 group-hover:text-gray-500">
            Create Appointment
            <FontAwesomeIcon icon={faPlus} className="ml-2 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
