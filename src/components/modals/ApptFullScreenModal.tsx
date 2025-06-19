"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Appointment } from "@/data/appointments";
import { AppointmentCard } from "@/components/schedule/AppointmentCard";
import { useState, useEffect } from "react";

interface ApptFullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  selectedDate?: Date;
}

const ApptFullScreenModal = ({
  isOpen,
  onClose,
  appointments,
  selectedDate = new Date(),
}: ApptFullScreenModalProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-opacity-50 fixed inset-0 z-50 bg-black"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative h-full w-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between border-b border-gray-200 bg-neutral-100 p-6"
            >
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Today&apos;s Appointments
                  </h1>
                  <p className="font-medium">{formatDate(selectedDate)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                  <span className="text-3xl font-semibold">
                    {formatTime(currentTime)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>
            </motion.div>

            {/* Content */}
            <div className="h-full overflow-y-auto p-6">
              {appointments.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex h-full items-center justify-center"
                >
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mx-auto mb-4 text-6xl text-gray-300"
                    />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      No Appointments
                    </h3>
                    <p className="text-gray-600">
                      No appointments scheduled for this day.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <motion.div
                      key={`${appointment.time}-${appointment.patient.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <AppointmentCard appointment={appointment} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApptFullScreenModal;
