export type StorageType = {
  RAM: string;
  ROM: string;
};

interface Item {
  _id?: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  screenSize?: string;
  storage: StorageType;
  camera: {
    front: string;
    back: string;
  };
  details?: string;
  smartphoneImage?: string;
}

export interface ItemsProps {
  item: Item;
}

export interface SaleItemsProps {
  buyer_name: string;
  quantity: number;
  sale_date: string;
}
