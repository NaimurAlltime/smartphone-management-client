export type TSmartPhone = {
  _id?: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  releaseDate: string;
  brand: string;
  model: string;
  operatingSystem: string;
  storageCapacity: number;
  screenSize: number;
  cameraQuality: string;
  batteryLife: string;
};

export type TItemProps = {
  _id?: string;
  name?: string;
  price?: number;
  quantity?: number;
  description?: string;
  category?: string;
  releaseDate?: string;
  brand?: string;
  model?: string;
  operatingSystem?: string;
  storageCapacity?: number;
  screenSize?: number;
  cameraQuality?: string;
  batteryLife?: string;
};
