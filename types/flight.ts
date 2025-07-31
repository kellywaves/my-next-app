export type Flight = {
  id: string;
  airline: string;
  from: string;
  to: string;
  status: string;
  postedBy: string;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
};