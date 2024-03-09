import { ItemsProps } from "@/types/items.type";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import SellModal from "../SmartphoneManagement/SellModal";
import { useState } from "react";
import DetailsModal from "./DetailsModal";

export default function SmartphoneCard({ item }: ItemsProps) {
  const [smartphooneId, setSmartphooneId] = useState("");
  const {
    _id,
    name,
    category,
    price,
    quantity,
    brand,
    model,
    description,
    smartphoneImage,
  } = item;
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img className="rounded-t-lg w-full h-[220px]" src={smartphoneImage} />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          <span className="font-medium">Quantity:</span> {quantity}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description?.slice(0, 29)}...
        </p>
        <div className="flex justify-between">
          <DetailsModal item={item} />
          {/* <Link to="/all-smartphone"> */}
          <button
            type="button"
            className="flex justify-center items-center rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => setSmartphooneId(_id as string)}
          >
            {/* <CiShoppingBasket className="text-xl mr-1 font-medium text-white" /> */}
            <SellModal smartphooneId={smartphooneId} />
            Sell
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
