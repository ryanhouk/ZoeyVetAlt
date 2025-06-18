export interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
  };
  type: string;
  provider: string;
  facility: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled" | "No Show";
}

export const appointments: Appointment[] = [
  {
    time: "9:00 AM",
    patient: {
      name: "Max",
      breed: "Golden Retriever",
      owner: "John Smith",
    },
    type: "Annual Checkup",
    provider: "Dr. Gronk",
    facility: "Rocklin",
    status: "In Progress",
  },
  {
    time: "10:30 AM",
    patient: {
      name: "Luna",
      breed: "Siamese Cat",
      owner: "Sarah Johnson",
    },
    type: "Dental Cleaning",
    provider: "Dr. Edwards",
    facility: "Chico",
    status: "Scheduled",
  },
  {
    time: "1:15 PM",
    patient: {
      name: "Rocky",
      breed: "German Shepherd",
      owner: "Michael Brown",
    },
    type: "Vaccination",
    provider: "Dr. Gronk",
    facility: "Rocklin",
    status: "Cancelled",
  },
  {
    time: "2:45 PM",
    patient: {
      name: "Bella",
      breed: "Maine Coon",
      owner: "Emily Davis",
    },
    type: "Follow-up",
    provider: "Dr. Edwards",
    facility: "Rocklin",
    status: "Scheduled",
  },
  {
    time: "4:00 PM",
    patient: {
      name: "Charlie",
      breed: "Labrador Retriever",
      owner: "David Wilson",
    },
    type: "Post-op",
    provider: "Dr. Edwards",
    facility: "Rocklin",
    status: "Scheduled",
  },
];
