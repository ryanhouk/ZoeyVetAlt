import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/pro-duotone-svg-icons";
import ButtonFill from "../buttons/ButtonFill";

interface NewAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prePopulatedTime?: string;
}

export default function NewAppointmentModal({
  isOpen,
  onClose,
  prePopulatedTime,
}: NewAppointmentModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/35 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-50 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl"
          >
            {/* Modal header */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarPlus}
                  className="text-xl text-emerald-600"
                />
                <h2 className="text-2xl font-bold">New Appointment</h2>
              </div>
              <p className="mt-1 font-medium">
                Schedule a new appointment for a patient
                {prePopulatedTime && (
                  <span className="ml-1 font-medium text-blue-600">
                    at {prePopulatedTime}
                  </span>
                )}
              </p>
            </div>

            {/* Form content */}
            <div className="space-y-4">
              {/* Time slot (pre-populated) */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Time
                </label>
                <div className="rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900">
                  {prePopulatedTime || "Select time"}
                </div>
              </div>

              {/* Patient selection */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Patient
                </label>
                <div className="h-12 w-full rounded-md bg-gray-100"></div>
              </div>

              {/* Appointment type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Appointment Type
                </label>
                <div className="h-12 w-full rounded-md bg-gray-100"></div>
              </div>

              {/* Provider selection */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Provider
                </label>
                <div className="h-12 w-full rounded-md bg-gray-100"></div>
              </div>

              {/* Notes */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <div className="h-24 w-full rounded-md bg-gray-100"></div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="mt-6 flex justify-between space-x-3">
              <button
                onClick={onClose}
                className="rounded-full border-2 px-4 py-2 text-sm font-medium transition-all hover:cursor-pointer hover:bg-gray-200"
              >
                Cancel
              </button>
              <ButtonFill title="Create Appointment" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
