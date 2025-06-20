import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faUser,
  faCalendar,
  faWeightHanging,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Patient {
  id: string;
  name: string;
  species: "Canine" | "Feline" | "Other";
  breed: string;
  gender: "male" | "female";
  age: string;
  birthDate: string;
  weight: string;
  microchipId: string;
  owner: {
    name: string;
    email: string;
    phone: string;
  };
  status: "Active" | "Inactive" | "Deceased" | "Transferred";
  lastVisit?: string;
  notes?: string;
}

interface PatientSegmentCardProps {
  patient: Patient;
}

const PatientSegmentCard = ({ patient }: PatientSegmentCardProps) => {
  const getSpeciesIcon = (species: string) => {
    switch (species) {
      case "Canine":
        return faDog;
      case "Feline":
        return faCat;
      default:
        return faUser;
    }
  };

  return (
    <Link href={`/patients/${patient.id}`} className="block">
      <div className="flex cursor-pointer items-center rounded-xl border border-l-4 border-gray-300 bg-gray-50 px-4 py-2 transition-all hover:brightness-95">
        <div className="flex w-full items-center gap-4">
          {/* PATIENT ICON & BASIC INFO */}
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={getSpeciesIcon(patient.species)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-xl text-gray-600"
            />
            <div className="flex min-w-64 flex-col">
              <div className="text-lg font-bold">{patient.name}</div>
              <div className="text-sm font-medium text-gray-600">
                {patient.breed} • {patient.gender}
              </div>
            </div>
          </div>

          {/* PATIENT DETAILS */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-px bg-gray-300" />
            <div className="flex min-w-80 flex-col gap-1">
              <div className="flex items-center gap-2 text-sm">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="w-3 text-gray-500"
                />
                <span className="font-medium">{patient.age}</span>
                <span className="text-gray-400">•</span>
                <FontAwesomeIcon
                  icon={faWeightHanging}
                  className="w-3 text-gray-500"
                />
                <span className="font-medium">{patient.weight}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="w-3 text-gray-500"
                />
                <span className="font-medium text-gray-600">
                  {patient.microchipId}
                </span>
              </div>
            </div>
          </div>

          {/* OWNER INFO */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-px bg-gray-300" />
            <div className="flex min-w-80 flex-col">
              <div className="font-bold text-black">{patient.owner.name}</div>
              <div className="text-sm font-medium text-gray-600">
                {patient.owner.email}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {patient.owner.phone}
              </div>
            </div>
          </div>

          {/* STATUS & ACTIONS */}
          <div className="ml-auto flex items-center gap-4">
            <div className="whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-700">
              {patient.status}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PatientSegmentCard;
