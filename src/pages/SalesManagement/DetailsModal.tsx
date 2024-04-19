import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ItemsProps } from "@/types/items.type";

export default function DetailsModal({ item }: ItemsProps) {
  const {
    name,
    category,
    price,
    quantity,
    brand,
    storageCapacity,
    screenSize,
    details,
    smartphoneImage,
  } = item;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-block rounded bg-sky-400  px-3 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Details
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[485px]">
        <DialogHeader>
          <DialogTitle>Details Smartphone</DialogTitle>
          <DialogDescription>
            Experience unparalleled performance our latest smartphone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center gap-2">
          <img className="w-[250px]" src={smartphoneImage} alt="" />
          <DialogDescription>
            <div>
              <h2>
                <span className="font-semibold">Name:</span> {name}{" "}
              </h2>
              <p className="mt-1">
                <span className="font-semibold">Category:</span> {category}{" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">ScreenSize:</span> {screenSize}{" "}
                Inc{" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Price:</span> {price}${" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Quantity:</span> {quantity}{" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Brand:</span> {brand}{" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">StorageCapacity:</span>{" "}
                {storageCapacity}{" "}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Description:</span> {details}{" "}
              </p>
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
