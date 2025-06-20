import {
  faArrowRight,
  faDog,
  faCat,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
    gender: "male" | "female";
  };
  type: string;
  provider: string;
  facility: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled" | "No Show";
}

interface AppointmentCardProps {
  appointment: Appointment;
}

const visitTypeColors = {
  "Annual Checkup": {
    border: "border-blue-500",
    lightBorder: "border-blue-200",
    bg: "bg-blue-50",
  },
  "Dental Cleaning": {
    border: "border-indigo-500",
    lightBorder: "border-indigo-200",
    bg: "bg-indigo-50",
  },
  Recheck: {
    border: "border-orange-500",
    lightBorder: "border-orange-200",
    bg: "bg-orange-50",
  },
  Vaccination: {
    border: "border-green-500",
    lightBorder: "border-green-200",
    bg: "bg-green-50",
  },
  "Follow-up": {
    border: "border-yellow-500",
    lightBorder: "border-yellow-200",
    bg: "bg-yellow-50",
  },
  "Post-op": {
    border: "border-red-500",
    lightBorder: "border-red-200",
    bg: "bg-red-50",
  },
  Emergency: {
    border: "border-red-600",
    lightBorder: "border-red-200",
    bg: "bg-red-50",
  },
  Surgery: {
    border: "border-indigo-500",
    lightBorder: "border-indigo-200",
    bg: "bg-indigo-50",
  },
};

const statusColors = {
  Scheduled: "text-teal-600",
  "In Progress": "text-yellow-600",
  Completed: "text-green-600",
  Cancelled: "text-red-600",
  "No Show": "text-gray-600",
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  // Determine if it's a cat based on breed containing "Cat"
  const isCat = appointment.patient.breed.toLowerCase().includes("cat");
  const speciesIcon = isCat ? faCat : faDog;

  const handleCheckInToggle = () => {
    setIsCheckedIn(!isCheckedIn);
  };

  return (
    <div
      className={`flex items-center rounded-xl border-l-4 p-3 transition-all hover:brightness-95 ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]
          ?.border || "border-gray-500"
      } ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]?.bg ||
        "bg-gray-50"
      } ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]
          ?.lightBorder || "border-gray-200"
      } cursor-pointer transition-all`}
    >
      <div className="flex w-full items-center gap-3">
        {/* APPT TIME */}
        <div
          className={`min-w-28 rounded-lg border border-black/40 bg-white px-3 py-2 text-center text-lg font-semibold`}
        >
          {appointment.time}
        </div>
        {/* PATIENT INFO */}
        <div className="flex flex-1 items-center gap-3">
          <div className="h-8 w-px bg-black/20" />
          <FontAwesomeIcon
            icon={speciesIcon}
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white p-2 text-lg ${
              appointment.patient.gender === "male"
                ? "text-blue-500"
                : "text-pink-500"
            }`}
          />
          <div className="flex min-w-96 flex-col">
            <div className="font-bold">
              {appointment.patient.name} • {appointment.type}
            </div>
            <div className="text-sm font-medium text-black/70">
              {appointment.patient.breed} • {appointment.patient.owner}
            </div>
          </div>
          {/* PROVIDER INFO */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-px bg-black/20" />
            <div className="flex min-w-64 flex-col">
              <div className="font-bold text-black">{appointment.provider}</div>
              <div className="text-sm font-medium text-black/70">
                {appointment.facility}
              </div>
            </div>
          </div>
        </div>

        {/* STATUS & CHECK IN */}
        <div id="checkin" className="flex items-center gap-4">
          <div
            className={`whitespace-nowrap rounded-full border border-black/20 bg-white px-3 py-1 text-sm font-semibold ${
              statusColors[appointment.status]
            }`}
          >
            {appointment.status}
          </div>
          {/* <div className="px-4 py-2 font-bold bg-white border-2 border-teal-500 text-teal-600 hover:text-white hover:border-teal-600 rounded-full hover:bg-teal-600 transition-colors">
            Patient Details
          </div> */}
          <button
            onClick={handleCheckInToggle}
            className={`whitespace-nowrap rounded-full border-2 px-4 py-2 font-bold transition-colors hover:cursor-pointer ${
              isCheckedIn
                ? "border-orange-600 bg-orange-600 text-white hover:bg-orange-700"
                : "border-teal-600 bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            {isCheckedIn ? "Check Out" : "Check In"}
            <FontAwesomeIcon
              icon={isCheckedIn ? faArrowRight : faArrowLeft}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
