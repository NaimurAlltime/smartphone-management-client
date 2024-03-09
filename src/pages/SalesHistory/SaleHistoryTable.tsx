import { SaleItemsProps } from "@/types/items.type";

export default function SaleHistoryTable({ item }: SaleItemsProps) {
  const { buyer_name, quantity, sale_date } = item;
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
        <td className="whitespace-nowrap px-6 py-4">{buyer_name} </td>
        <td className="whitespace-nowrap px-6 py-4"> {quantity} </td>
        <td className="whitespace-nowrap px-6 py-4"> {sale_date} </td>
      </tr>
    </>
  );
}
