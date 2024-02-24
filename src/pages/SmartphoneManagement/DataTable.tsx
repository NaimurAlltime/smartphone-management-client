import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDeleteSmartphoneMutation } from "../../redux/features/smartphone/smartphoneApi";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <TiShoppingCart className="text-2xl" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sell Smartphone</DialogTitle>
                <DialogDescription>
                  Experience unparalleled performance and cutting-edge features
                  with our latest smartphone.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Buyer Name
                  </Label>
                  <Input
                    id="buyer_name"
                    placeholder="Example: Jhon Due"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Quantity
                  </Label>
                  <Input
                    type="number"
                    id="quantity"
                    placeholder="Example: 1"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Date
                  </Label>
                  <Input type="date" id="quantity" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  <CiShoppingBasket className="text-xl mr-1 font-medium text-white" />
                  Sell
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Link to={`/update-smartphone/${_id}`} state={{ data: item }}>
            <button className="mx-3">
              <FaRegEdit className="text-2xl" />
            </button>
          </Link>

          <button onClick={() => handleDelete(_id as string)}>
            <RiDeleteBinLine className="text-2xl" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default DataTable;
