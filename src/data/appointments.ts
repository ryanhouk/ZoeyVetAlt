export interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
  };
  type: string;
  status: "Regular" | "In Progress" | "Scheduled";
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
    status: "Scheduled",
  },
  {
    time: "10:30 AM",
    patient: {
      name: "Luna",
      breed: "Siamese Cat",
      owner: "Sarah Johnson",
    },
    type: "Dental Cleaning",
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
    status: "Scheduled",
  },
  {
    time: "2:45 PM",
    patient: {
      name: "Bella",
      breed: "Maine Coon",
      owner: "Emily Davis",
    },
    type: "Follow-up",
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
    status: "Scheduled",
  },
];
