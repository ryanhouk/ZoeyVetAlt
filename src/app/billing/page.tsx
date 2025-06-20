import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import ContextNav from "@/components/nav/ContextNav";
import React from "react";

const page = () => {
  return (
    <>
      <Container small>
        <ContextNav />
      </Container>
      <Container small>
        <ContentHeader title="Billing" />
      </Container>
    </>
  );
};

export default page;
