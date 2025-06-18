import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { appointments } from "@/data/appointments";
import Greeting from "@/components/specialty/Greeting";
import React from "react";
import Itinerary from "@/components/specialty/Itinerary";
import Spacer from "@/components/layout/Spacer";
import IconCard from "@/components/cards/IconCard";
import {
  faCalendarAlt,
  faListCheck,
  faPaw,
  faBox,
  faFlaskVial,
  faSparkles,
} from "@fortawesome/pro-duotone-svg-icons";

const page = () => {
  return (
    <>
      <Container>
        <Greeting />
        <Spacer small />
        <Itinerary />
      </Container>
      <Container>
        <ContentHeader title="Quick Actions" linkTitle="Edit" linkHref="/" />
        <div className="grid grid-cols-6 gap-4">
          <IconCard
            href="/appointments"
            title="Appointments"
            icon={faCalendarAlt}
            iconColor="text-purple-500"
            description="View and manage appointments"
          />
          <IconCard
            href="/tasks"
            title="Tasks"
            icon={faListCheck}
            iconColor="text-green-500"
            description="5 uncompleted tasks"
          />
          <IconCard
            href="/patients"
            title="Patients"
            icon={faPaw}
            iconColor="text-yellow-500"
            description="Search and manage patients"
          />
          <IconCard
            href="/inventory"
            title="Inventory"
            icon={faBox}
            iconColor="text-orange-500"
            description="View and manage inventory"
          />
          <IconCard
            href="/"
            title="Lab Results"
            icon={faFlaskVial}
            iconColor="text-red-500"
            description="3 new labs to review."
          />
          <IconCard
            href="/"
            title="Auto-Notes"
            icon={faSparkles}
            iconColor="text-indigo-500"
            description="AI transcriptions records."
          />
        </div>
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
