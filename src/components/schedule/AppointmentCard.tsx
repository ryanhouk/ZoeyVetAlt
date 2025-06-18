import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
  };
  type: string;
  provider: string;
  facility: string;
  reason: string;
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
  Scheduled: "text-blue-600",
  "In Progress": "text-yellow-600",
  Completed: "text-green-600",
  Cancelled: "text-red-600",
  "No Show": "text-gray-600",
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <div
      className={`flex items-center p-3 rounded-lg border-l-4 hover:brightness-95 transition-all ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]
          ?.border || "border-gray-500"
      } ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]?.bg ||
        "bg-gray-50"
      } ${
        visitTypeColors[appointment.type as keyof typeof visitTypeColors]
          ?.lightBorder || "border-gray-200"
      } transition-all cursor-pointer`}>
      <div className="flex items-center gap-3">
        {/* APPT TIME */}
        <div
          className={`text-lg font-semibold bg-white min-w-28 text-center py-2 px-3 rounded-lg border border-black/40`}>
          {appointment.time}
        </div>
        {/* PATIENT INFO */}
        <div className="flex items-center min-w-80 gap-3 flex-1">
          <div className="h-8 w-px bg-black/20" />
          <div className="flex flex-col">
            <div className="font-bold">
              {appointment.patient.name} • {appointment.type}
            </div>
            <div className="font-medium text-sm text-black/70">
              {appointment.patient.breed} • {appointment.patient.owner}
            </div>
          </div>
        </div>
        {/* PROVIDER INFO */}
        <div className="flex items-center gap-3 min-w-80 flex-1">
          <div className="h-8 w-px bg-black/20" />
          <div className="flex flex-col">
            <div className="text-black font-bold">{appointment.provider}</div>
            <div className="text-sm font-medium text-black/70">
              {appointment.facility}
            </div>
          </div>
        </div>

        {/* STATUS & CHECK IN */}
        <div id="checkin" className="flex gap-6 items-center">
          <div className={`font-semibold ${statusColors[appointment.status]}`}>
            {appointment.status}
          </div>
          <div className="px-4 py-2 font-bold bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
            Check In
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
