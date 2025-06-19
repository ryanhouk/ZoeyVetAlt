import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/pro-regular-svg-icons";

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
            className="fixed inset-0 bg-black/25 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-50 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>

            {/* Modal header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                New Appointment
              </h2>
              <p className="mt-1 text-sm text-gray-500">
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
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Create Appointment
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
