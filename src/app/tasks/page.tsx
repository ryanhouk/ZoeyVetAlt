import React from "react";
import Container from "@/components/layout/Container";
import ContentHeader from "@/components/headings/ContentHeader";
import ContextNav from "@/components/nav/ContextNav";

const page = () => {
  return (
    <>
      <Container small>
        <ContextNav />
      </Container>
      <Container small>
        <ContentHeader title="Daily Tasks" />
      </Container>
    </>
  );
};

export default page;
