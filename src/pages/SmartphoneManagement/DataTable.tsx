import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface Item {
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  storageCapacity: string;
}

interface DataTableProps {
  item: Item;
}

function DataTable({ item }: DataTableProps) {
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
        <td className="whitespace-nowrap px-6 py-4"> {item.name} </td>
        <td className="whitespace-nowrap px-6 py-4"> {item.category} </td>
        <td className="whitespace-nowrap px-6 py-4"> {item.price} </td>
        <td className="whitespace-nowrap px-6 py-4"> {item.quantity} </td>
        <td className="whitespace-nowrap px-6 py-4"> {item.brand} </td>
        <td className="whitespace-nowrap px-6 py-4"> {item.model} </td>
        <td className="whitespace-nowrap px-6 py-4">
          {" "}
          {item.storageCapacity}{" "}
        </td>
        <td className="whitespace-nowrap px-6 py-4 felx justify-center items-center">
          <button>
            <MdOutlineAddShoppingCart className="text-2xl" />
          </button>
          <button className="mx-3">
            <FaRegEdit className="text-2xl" />
          </button>
          <button>
            <RiDeleteBinLine className="text-2xl" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default DataTable;
