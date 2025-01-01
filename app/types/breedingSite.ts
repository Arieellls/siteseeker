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
  accuracy: number;
  classification: string;
};

const defaultExport = {};
export default defaultExport;
