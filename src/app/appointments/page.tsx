"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import ContentHeader from "@/components/headings/ContentHeader";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { AppointmentEmptyCard } from "@/components/schedule/AppointmentEmptyCard";
import { WeekView } from "@/components/schedule/WeekView";
import NewAppointmentModal from "@/components/modals/NewAppointmentModal";
import { appointments } from "@/data/appointments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFilter,
  faCalendarDay,
  faCalendarWeek,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "@/components/form/SearchInput";
import { TabControl } from "@/components/buttons/TabControl";
import Divider from "@/components/layout/Divider";

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
];

const viewTabs = [
  { id: "day", label: "Day", icon: faCalendarDay },
  { id: "week", label: "Week", icon: faCalendarWeek },
];

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState("day");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handlePrevDay = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - (activeView === "week" ? 7 : 1));
      return newDate;
    });
  };

  const handleNextDay = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + (activeView === "week" ? 7 : 1));
      return newDate;
    });
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  const handleCreateAppointment = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTimeSlot("");
  };

  const renderDayView = () => (
    <div className="space-y-2">
      {timeSlots.map((timeSlot) => {
        const appointment = appointments.find((a) => a.time === timeSlot);

        if (appointment) {
          return (
            <AppointmentCard
              key={`${timeSlot}-${appointment.patient.name}`}
              appointment={appointment}
            />
          );
        }

        return (
          <AppointmentEmptyCard
            key={timeSlot}
            time={timeSlot}
            onClick={() => handleCreateAppointment(timeSlot)}
          />
        );
      })}
    </div>
  );

  return (
    <>
      <Container transparent className="grid gap-4 lg:grid-cols-12">
        <Container className="col-span-8 w-full space-y-4">
          <ContentHeader
            title="All Appointments"
            isButton
            linkTitle="Create Appointment"
            onClick={() => handleCreateAppointment(timeSlots[0])}
            buttonIcon={faPlus}
          />
          <Divider />
          {/* Date Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevDay}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={handleToday}
                className="rounded-lg px-4 py-1 text-sm font-medium hover:bg-gray-100"
              >
                Today
              </button>
              <button
                onClick={handleNextDay}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <span className="ml-2 text-lg font-semibold">
                {formatDate(selectedDate)}
              </span>
            </div>
            <TabControl
              tabs={viewTabs}
              activeTab={activeView}
              onChange={setActiveView}
            />
          </div>
          <Divider />

          {/* Search and Filters */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <SearchInput
                placeholder="Search appointments..."
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100">
              <FontAwesomeIcon icon={faFilter} />
              All Status
            </button>
          </div>
          <Divider />

          {/* View Content */}
          {activeView === "day" ? (
            renderDayView()
          ) : (
            <WeekView
              selectedDate={selectedDate}
              timeSlots={timeSlots}
              appointments={appointments}
              onEmptyCellClick={(time) => handleCreateAppointment(time)}
            />
          )}
        </Container>

        {/* NEW APPT DETAILS */}
        <Container className="col-span-4 w-full">
          <ContentHeader title="Possible Side Panel" />
          <Divider />
        </Container>
      </Container>

      {/* New Appointment Modal */}
      <NewAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        prePopulatedTime={selectedTimeSlot}
      />
    </>
  );
};

export default Page;
