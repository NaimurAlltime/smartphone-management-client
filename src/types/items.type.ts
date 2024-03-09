interface Item {
  _id?: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  storageCapacity: string;
  description?: string;
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
