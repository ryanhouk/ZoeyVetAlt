"use client";
import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [time, setTime] = useState<string>("");
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Update time
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);

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
    <section className="flex items-end justify-between relative z-10 p-4 lg:px-12">
      <h1 className="text-2xl lg:text-4xl font-bold">
        Good morning, Dr. Gronkiewicz
      </h1>
      <div className="flex flex-col">
        <p className="text-muted-foreground font-bold">{dayOfWeek}</p>
        <p className="text-4xl font-semibold tabular-nums">
          <span>{time.replace(/^0(\d):/, "$1:")}</span>
        </p>
      </div>
    </section>
  );
};

export default Greeting;
