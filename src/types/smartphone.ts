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

export type TSalesTableData = {
  key?: string | number;
  quantity?: number;
  buyerName?: string;
  saleDate?: string;
  smartphoneImage?: string;
  productName?: string;
  totalPrice?: number;
  price?: number;
  week?: string;
  totalSale?: number;
  sales?: [
    {
      productId: string;
      quantity: number;
      buyerName: string;
      saleDate: string;
      productName: string;
      smartphoneImage: string;
      productPrice: number;
    }
  ];
  _id?: {
    day: number;
    week: number;
    month: number;
    year: number;
  };
};
