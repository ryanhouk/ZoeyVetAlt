"use client";
import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import SearchInput from "@/components/form/SearchInput";
import React from "react";
import PatientSegmentCard from "@/components/cards/PatientSegmentCard";
import { patients } from "@/data/patients";

const page = () => {
  return (
    <>
      <Container small>
        <ContentHeader title="Patient Search" />
        <div className="flex items-center gap-4">
          <SearchInput
            className="w-full"
            placeholder="Search for a patient"
            onSearch={(value: string) => {
              console.log(value);
            }}
          />
          <div className="whitespace-nowrap text-teal-700">
            Search filters & facets will go here
          </div>
        </div>
      </Container>
      <Container small className="flex flex-col gap-4">
        {patients.map((patient) => (
          <PatientSegmentCard key={patient.id} patient={patient} />
        ))}
      </Container>
    </>
  );
};

export default page;
