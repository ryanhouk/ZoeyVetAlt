interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
  };
  type: string;
  status: "Regular" | "In Progress" | "Scheduled";
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

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border-l-4 hover:brightness-95 transition-all ${
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
        <div
          className={`text-lg font-semibold bg-white min-w-28 text-center py-2 px-3 rounded-lg border border-black/40`}>
          {appointment.time}
        </div>
        <div className="h-8 w-px bg-black/20" />
        <div>
          <div className="font-bold">
            {appointment.patient.name} • {appointment.type}
          </div>
          <div className="font-medium text-sm text-black/70">
            {appointment.patient.breed} • {appointment.patient.owner}
          </div>
        </div>
      </div>
    </div>
  );
}
