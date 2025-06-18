import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { appointments } from "@/data/appointments";
import Greeting from "@/components/specialty/Greeting";
import React from "react";

const page = () => {
  return (
    <>
      <Container>
        <Greeting />
      </Container>
      <Container>
        <ContentHeader
          title="Up Next"
          linkTitle="Expand View"
          linkHref="/home"
        />
        <div className="flex flex-col gap-4">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.time} appointment={appointment} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default page;
