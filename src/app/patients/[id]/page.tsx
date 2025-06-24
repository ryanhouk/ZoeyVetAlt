"use client";
import Container from "@/components/layout/Container";
import React from "react";
import Heading from "@/components/headings/Heading";
import Divider from "@/components/layout/Divider";
import SingleDataItem from "@/components/cards/SingleDataPoint";
import Spacer from "@/components/layout/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDog,
  faCat,
  faUser,
  faFile,
  faList,
  faPaw,
} from "@fortawesome/pro-duotone-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import LinkButtonBorder from "@/components/buttons/LinkButtonBorder";
import ContextNav from "@/components/nav/ContextNav";
import SmallHeading from "@/components/headings/SmallHeading";
import MedHistoryCard from "@/components/cards/MedHistoryCard";
import ContentHeader from "@/components/headings/ContentHeader";
import { patients } from "@/data/patients";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const PatientDetails = () => {
  const params = useParams();
  const patientId = params.id as string;

  const patient = patients.find((p) => p.id === patientId);

  if (!patient) {
    notFound();
  }

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

  const getSpeciesColor = (species: string) => {
    switch (species) {
      case "Canine":
        return "bg-blue-100 text-blue-500";
      case "Feline":
        return "bg-purple-100 text-purple-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <>
      <Container>
        <ContextNav />
      </Container>
      <Container transparent className="grid-cols-8 gap-4 xl:grid">
        {/* Patient Details */}
        <Container className="col-span-2 w-full">
          <LinkButtonBorder
            title="All Patients"
            iconLeft={faList}
            url="/patients"
          />
          <Spacer small />
          <Divider />
          <div className="flex items-center gap-4">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${getSpeciesColor(patient.species)}`}
            >
              <FontAwesomeIcon
                icon={getSpeciesIcon(patient.species)}
                className="text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <Heading level={1}>{patient.name}</Heading>
              <p className="text-sm font-medium text-neutral-500">
                {patient.species} • {patient.status}
              </p>
            </div>
          </div>
          <Spacer small />
          <Divider />
          <div>
            <SmallHeading
              icon={faPaw}
              title="Patient Information"
              showBtn
              iconColor="text-yellow-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <SingleDataItem heading="Species" title={patient.species} />
              <SingleDataItem heading="Breed" title={patient.breed} />
              <SingleDataItem heading="Gender" title={patient.gender} />
              <SingleDataItem heading="Age" title={patient.age} />
              <SingleDataItem heading="Birth Date" title={patient.birthDate} />
              <SingleDataItem heading="Weight" title={patient.weight} />
              <SingleDataItem
                heading="Microchip ID"
                title={patient.microchipId}
              />
            </div>
            <Spacer small />
            <Divider />
            <div>
              <SmallHeading
                icon={faUser}
                title="Client Information"
                showBtn
                iconColor="text-green-500"
              />
              <SingleDataItem heading="Owner" title={patient.owner.name} />
              <SingleDataItem heading="Email" title={patient.owner.email} />
              <SingleDataItem heading="Phone" title={patient.owner.phone} />
              <SingleDataItem heading="Status" title={patient.status} />
            </div>
            <hr className="my-3" />
            <div>
              <div className="mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faFile} className="text-purple-500" />
                <h2 className="text-lg font-bold">Notes</h2>
              </div>
              <p className="rounded-lg border bg-neutral-100 p-4">
                {patient.notes || "No notes available for this patient."}
              </p>
              <div className="mt-3">
                <LinkButtonBorder title="Save" url="/" />
              </div>
            </div>
          </div>
        </Container>

        {/* Right Side */}
        <Container className="col-span-4 w-full">
          <ContentHeader title={`${patient.name}'s Medical Records`} />
        </Container>
        <div className="col-span-2">
          <Container className="w-full">
            <SmallHeading
              icon={faClockRotateLeft}
              title="Medical History"
              iconColor="text-purple-500"
              btnTitle="See All"
              showBtn
            />
            <div className="space-y-3">
              <MedHistoryCard
                date={new Date("2025-09-20")}
                visitType="Final Follow Up"
                provider="Dr. Edwards"
                secondaryProvider="Dr. Gronkiewicz"
              />
              <MedHistoryCard
                date={new Date("2025-07-16")}
                visitType="Follow Up Visit"
                provider="Dr. Gronkiewicz"
              />
              <MedHistoryCard
                date={new Date("2025-06-19")}
                visitType="Enucleation Procedure"
                provider="Dr. Gronkiewicz"
              />
            </div>
          </Container>
          <Container className="w-full">
            <SmallHeading
              icon={faComments}
              title="Client Chat"
              iconColor="text-blue-500"
            />
            <div className="text-teal-700">
              We can create the ability to chat with the client here just like a
              standard SMS chat. This would be a third party integration,
              invisible to AEC, but noted for development purposes.
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PatientDetails;
