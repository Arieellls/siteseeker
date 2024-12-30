export type BreedingSite = {
  id: string;
  capturedImage: string;
  latitude: number;
  longitude: number;
  description: string;
  detectionTime: Date;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

// Add a default export to satisfy the framework requirement
const defaultExport = {};
export default defaultExport;
