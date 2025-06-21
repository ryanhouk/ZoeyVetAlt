"use client";
import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [time, setTime] = useState<string>("");
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Update time in 12-hour format
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const timeString = `${hours}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;
      setTime(timeString);

      // Update day of week
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setDayOfWeek(days[now.getDay()]);
    };

    // Update immediately
    updateDateTime();

    // Update every minute
    const interval = setInterval(updateDateTime, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-4xl">
        Good morning, Dr. Gronkiewicz
      </h1>
      <div className="flex flex-col items-end">
        <p className="text-sm font-bold text-black/50 sm:text-base">
          {dayOfWeek}
        </p>
        <p className="text-3xl font-semibold tabular-nums sm:text-4xl lg:text-5xl">
          <span>{time}</span>
        </p>
      </div>
    </section>
  );
};

export default Greeting;
