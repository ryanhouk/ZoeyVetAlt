import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faUser,
  faCalendar,
  faWeightHanging,
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

  // Gender color: blue for male, pink for female
  const genderColor =
    patient.gender === "male" ? "text-blue-500" : "text-pink-500";

  return (
    <Link href={`/patients/${patient.id}`} className="block">
      <div className="flex flex-col gap-3 rounded-xl border border-l-4 border-gray-300 bg-gray-50 p-3 transition-all hover:brightness-95 sm:flex-row sm:items-center sm:gap-4 lg:px-4 lg:py-2">
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* TOP ROW - PATIENT INFO AND STATUS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={getSpeciesIcon(patient.species)}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white p-1.5 text-lg ${genderColor} sm:h-10 sm:w-10 sm:p-2 sm:text-xl`}
              />
              <div className="flex flex-col">
                <div className="text-base font-bold sm:text-lg">
                  {patient.name}
                </div>
                <div className="text-xs font-medium text-gray-600 sm:text-sm">
                  {patient.breed} • {patient.gender}
                </div>
              </div>
            </div>
            <div className="whitespace-nowrap rounded-full border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700 sm:px-3 sm:py-1 sm:text-sm">
              {patient.status}
            </div>
          </div>

          {/* PATIENT DETAILS */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs">
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
            {/* <div className="flex items-center gap-2 text-xs">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="w-3 text-gray-500"
              />
              <span className="truncate font-medium text-gray-600">
                {patient.microchipId}
              </span>
            </div> */}
          </div>

          {/* OWNER INFO */}
          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold text-black">
              {patient.owner.name}
            </div>
            <div className="truncate text-xs font-medium text-gray-600">
              {patient.owner.email}
            </div>
            <div className="text-xs font-medium text-gray-600">
              {patient.owner.phone}
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden w-full items-center gap-4 sm:flex">
          {/* PATIENT ICON & BASIC INFO */}
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={getSpeciesIcon(patient.species)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-xl ${genderColor}`}
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
              {/* <div className="flex items-center gap-2 text-sm">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="w-3 text-gray-500"
                />
                <span className="font-medium text-gray-600">
                  {patient.microchipId}
                </span>
              </div> */}
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
