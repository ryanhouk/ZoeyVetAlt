"use client";
import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import SearchInput from "@/components/form/SearchInput";
import React from "react";

const page = () => {
  return (
    <>
      <Container small>
        <ContentHeader title="Patient Search" />
        <SearchInput
          placeholder="Search for a patient"
          onSearch={(value: string) => {
            console.log(value);
          }}
        />
      </Container>
      <Container small>RECENT PATIENTS LIST</Container>
    </>
  );
};

export default page;
