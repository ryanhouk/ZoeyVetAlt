import React from "react";
import Container from "@/components/layout/Container";
import ContentHeader from "@/components/headings/ContentHeader";

const page = () => {
  return (
    <>
      <Container transparent className="grid grid-cols-12 gap-4">
        <Container className="col-span-8 w-full">
          <ContentHeader title="Appointments" />
          {/* ADD APPOINTMENTS HERE */}
        </Container>

        {/* NEW APPT DETAILS */}
        <Container className="col-span-4 w-full">
          <ContentHeader title="New Appointment" />
        </Container>
      </Container>
    </>
  );
};

export default page;
