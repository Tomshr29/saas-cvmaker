export type ResumeInfo = {
  id: number;
  userId: number;
  title: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  drivingLicense: string;
  gender?: "male" | "female" | null;
  about: string;
  model: "blue-white" | "red-orange";
  createdAt: string;
  updatedAt: string;
};
