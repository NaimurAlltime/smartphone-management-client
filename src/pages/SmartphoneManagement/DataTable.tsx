import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDeleteSmartphoneMutation } from "../../redux/features/smartphone/smartphoneApi";
import Swal from "sweetalert2";

interface Item {
  _id?: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  storageCapacity: string;
}

export interface DataTableProps {
  item: Item;
}

function DataTable({ item }: DataTableProps) {
  const { _id, name, category, price, quantity, brand, model } = item;
  const [deleteSmartphone] = useDeleteSmartphoneMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSmartphone(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
        <td className="whitespace-nowrap px-6 py-4"> {name} </td>
        <td className="whitespace-nowrap px-6 py-4"> {category} </td>
        <td className="whitespace-nowrap px-6 py-4"> {price} </td>
        <td className="whitespace-nowrap px-6 py-4"> {quantity} </td>
        <td className="whitespace-nowrap px-6 py-4"> {brand} </td>
        <td className="whitespace-nowrap px-6 py-4"> {model} </td>
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
          <button onClick={() => handleDelete(_id as string)}>
            <RiDeleteBinLine className="text-2xl" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default DataTable;
