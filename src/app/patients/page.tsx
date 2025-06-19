"use client";
import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import SearchInput from "@/components/form/SearchInput";
import React from "react";
import Link from "next/link";

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
        RECENT PATIENTS LIST
        <Link className="font-bold hover:underline" href="/patients/details">
          Temp Link to view Patient Details
        </Link>
      </Container>
    </>
  );
};

export default page;
