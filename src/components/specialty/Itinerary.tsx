import React from "react";
import Badge from "@/components/indicators/Badge";

const Itinerary = () => {
  return (
    <>
      <div className="flex bg-blue-100 flex-col p-4 rounded-2xl">
        <h2 className="text-2xl font-bold mb-2 text-blue-900">
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
