import React from "react";
import Container from "@/components/layout/Container";
import ContentHeader from "@/components/headings/ContentHeader";
import ContextNav from "@/components/nav/ContextNav";

const page = () => {
  return (
    <>
      <Container>
        <ContextNav />
      </Container>
      <Container>
        <ContentHeader title="Daily Tasks" />
      </Container>
    </>
  );
};

export default page;
