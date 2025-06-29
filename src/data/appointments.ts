export interface Appointment {
  time: string;
  patient: {
    name: string;
    breed: string;
    owner: string;
    gender: "male" | "female";
  };
  type: string;
  provider: string;
  facility: string;
  reason?: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled" | "No Show";
}

export const appointments: Appointment[] = [
  {
    time: "9:00 AM",
    patient: {
      name: "Max",
      breed: "Golden Retriever",
      owner: "John Smith",
      gender: "male",
    },
    type: "Recheck",
    provider: "Dr. Edwards",
    facility: "Rocklin",
    reason: "Annual wellness exam and vaccinations",
    status: "Cancelled",
  },
  {
    time: "10:30 AM",
    patient: {
      name: "Luna",
      breed: "Siamese Cat",
      owner: "Sarah Johnson",
      gender: "female",
    },
    type: "Recheck",
    provider: "Dr. Gronkiewicz",
    facility: "Rocklin",
    reason: "Regular dental cleaning and checkup",
    status: "In Progress",
  },
  {
    time: "1:15 PM",
    patient: {
      name: "Rocky",
      breed: "German Shepherd",
      owner: "Michael Brown",
      gender: "male",
    },
    type: "Recheck",
    provider: "Dr. Gronkiewicz",
    facility: "Chico",
    reason: "Annual vaccinations and heartworm test",
    status: "Scheduled",
  },
  {
    time: "2:45 PM",
    patient: {
      name: "Bella",
      breed: "Maine Coon",
      owner: "Emily Davis",
      gender: "female",
    },
    type: "Surgery",
    provider: "Dr. Gronkiewicz",
    facility: "Rocklin",
    reason: "Post-surgery checkup",
    status: "Scheduled",
  },
  {
    time: "4:00 PM",
    patient: {
      name: "Charlie",
      breed: "Labrador Retriever",
      owner: "David Wilson",
      gender: "male",
    },
    type: "Post-op",
    provider: "Dr. Edwards",
    facility: "Rocklin",
    reason: "Suture removal and progress check",
    status: "Scheduled",
  },
];
