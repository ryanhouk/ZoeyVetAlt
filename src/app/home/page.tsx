"use client";

import ContentHeader from "@/components/headings/ContentHeader";
import Container from "@/components/layout/Container";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { appointments } from "@/data/appointments";
import Greeting from "@/components/specialty/Greeting";
import React, { useState } from "react";
import Itinerary from "@/components/specialty/Itinerary";
import Spacer from "@/components/layout/Spacer";
import IconCard from "@/components/cards/IconCard";
import ApptFullScreenModal from "@/components/modals/ApptFullScreenModal";
import {
  faCalendarAlt,
  faListCheck,
  faPaw,
  faBox,
  faFlaskVial,
  faSparkles,
} from "@fortawesome/pro-duotone-svg-icons";
import { faExpand, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visitTypeColors = [
    { type: "Recheck", color: "bg-yellow-500", textColor: "text-black" },
    { type: "Post-op", color: "bg-green-500", textColor: "text-black" },
    { type: "Emergency", color: "bg-red-600", textColor: "text-black" },
    { type: "Surgery", color: "bg-indigo-500", textColor: "text-black" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* Left side - Main content */}
        <div className="col-span-9 space-y-6">
          {/* GREETING AND ITINERARY */}
          <Container>
            <Greeting />
            <Spacer small />
            <Itinerary />
          </Container>

          {/* QUICK ACTION CARDS */}
          <Container>
            <ContentHeader
              title="Quick Actions"
              linkTitle="Edit"
              linkHref="/"
              linkIcon={faPenToSquare}
            />
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
                description="AI transcriptions for records."
              />
            </div>
          </Container>

          {/* APPT LIST */}
          <Container>
            <ContentHeader
              title="Up Next"
              isButton
              linkTitle="Expand View"
              linkHref="/home"
              linkIcon={faExpand}
              onClick={() => setIsModalOpen(true)}
            />
            <div className="flex gap-4 text-xs font-medium">
              {visitTypeColors.map((visitType) => (
                <div key={visitType.type} className="flex items-center gap-2">
                  <div
                    className={`h-3 w-3 rounded-full ${visitType.color}`}
                  ></div>
                  <span className={visitType.textColor}>{visitType.type}</span>
                </div>
              ))}
            </div>
            <Spacer small />
            <div className="flex flex-col gap-4">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.time}
                  appointment={appointment}
                />
              ))}
            </div>
          </Container>
        </div>

        {/* Right side - Team Chat */}
        <div className="col-span-3">
          <Container className="h-full">
            <ContentHeader title="Team Chat" />
            <div className="text-teal-700">
              This space can be used for a chat available to all team members.
              So the front desk can quickly communicate with anyone in the back
              of house or from a visit room to someone else, etc.
            </div>
          </Container>
        </div>
      </div>

      <ApptFullScreenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointments={appointments}
        selectedDate={new Date()}
      />
    </>
  );
};

export default Page;
