"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Appointment } from "@/data/appointments";

interface WeekViewProps {
  selectedDate: Date;
  timeSlots: string[];
  appointments: Appointment[];
  onEmptyCellClick?: (time: string, date: Date) => void;
}

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const getWeekDates = (date: Date) => {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay()); // Get Sunday

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    return day;
  });
};

export function WeekView({
  selectedDate,
  timeSlots,
  appointments,
  onEmptyCellClick,
}: WeekViewProps) {
  const weekDates = getWeekDates(selectedDate);

  return (
    <div className="grid grid-cols-[auto_repeat(7,1fr)] gap-[1px] rounded-lg bg-gray-200 p-[1px]">
      {/* Header Row */}
      <div className="bg-white p-3" /> {/* Empty corner cell */}
      {weekDates.map((date, index) => (
        <div key={date.toISOString()} className="bg-white p-3 text-center">
          <div className="text-sm font-medium text-gray-500">
            {weekDays[index]}
          </div>
          <div className="text-xl font-semibold">{date.getDate()}</div>
        </div>
      ))}
      {/* Time Slots */}
      {timeSlots.map((time) => (
        <React.Fragment key={time}>
          {/* Time Column */}
          <div className="flex items-center bg-white px-3 py-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
              {time}
            </div>
          </div>

          {/* Day Columns */}
          {weekDates.map((date) => {
            const dayAppointment = appointments.find((a) => a.time === time);
            const cellDate = date.toLocaleDateString();
            const isToday = new Date().toLocaleDateString() === cellDate;

            return (
              <div
                key={`${date.toISOString()}-${time}`}
                className={`relative min-h-[60px] bg-white p-1 hover:bg-gray-50 ${
                  isToday ? "bg-blue-50/30" : ""
                } ${!dayAppointment && onEmptyCellClick ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (!dayAppointment && onEmptyCellClick) {
                    onEmptyCellClick(time, date);
                  }
                }}
              >
                {dayAppointment && (
                  <div className="absolute inset-1">
                    <div
                      className={`h-full rounded-lg border-l-4 border-l-green-500 bg-green-50 p-2 text-sm`}
                    >
                      <div className="font-medium">
                        {dayAppointment.patient.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {dayAppointment.type}
                      </div>
                      <div className="text-xs text-gray-500">
                        {dayAppointment.provider}
                      </div>
                    </div>
                  </div>
                )}
                {!dayAppointment && onEmptyCellClick && (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-xs text-gray-400 hover:text-gray-600">
                      +
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
