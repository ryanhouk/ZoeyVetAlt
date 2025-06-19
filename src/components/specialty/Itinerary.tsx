import React from "react";
import Badge from "@/components/indicators/Badge";

const Itinerary = () => {
  return (
    <>
      <div className="flex flex-col rounded-2xl bg-blue-100 p-4">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">
          Today&apos;s Overview
        </h2>
        <div className="flex gap-2">
          <Badge title="Dr. Edwards is on call this weekend" />
          <Badge title="Your shift: 9:00 AM - 6:00 PM" />
          <Badge title="Team meeting at 9:00 AM in the break room." />
        </div>
      </div>
    </>
  );
};

export default Itinerary;
