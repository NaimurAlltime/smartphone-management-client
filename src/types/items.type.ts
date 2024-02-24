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
}

export interface ItemsProps {
  item: Item;
}
