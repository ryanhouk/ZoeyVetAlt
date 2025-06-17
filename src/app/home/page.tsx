import Container from "@/components/layout/Container";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { appointments } from "@/data/appointments";
import React from "react";

const page = () => {
  return (
    <>
      <Container>
        <AppointmentCard appointment={appointments[0]} />
      </Container>
    </>
  );
};

export default page;
