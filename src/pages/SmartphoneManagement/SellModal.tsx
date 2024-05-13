import { TiShoppingCart } from "react-icons/ti";
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
import { FieldValues, useForm } from "react-hook-form";
import { useAddSaleApiMutation } from "@/redux/features/sale/saleApi";
import { toast } from "sonner";
import { useState } from "react";
import { generateInvoicePDF } from "@/utils/generateInvoicePDF";
import { FaDownload } from "react-icons/fa";

export default function SellModal({ smartphooneId }: string | any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addSaleApi] = useAddSaleApiMutation();

  const [isSaleComplete, setIsSaleComplete] = useState(false);
  const [saleProductInfo, setSaleProductInfo] = useState<any | null>(null);

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    try {
      const addSale = {
        buyerName: data.buyerName,
        quantity: Number(data.quantity),
        saleDate: data.saleDate,
        productId: smartphooneId,
      };
      // console.log(addSale);
      const result = await addSaleApi(addSale as any).unwrap();

      setSaleProductInfo({
        buyerName: data.buyerName,
        quantity: Number(data.quantity),
        saleDate: data.saleDate,
        productName: result.data?.productName,
        price: result.data?.productPrice,
      });

      if (result?.success) {
        toast.success("Sale Added Successfully!", {
          duration: 2000,
        });
        // reset();
        setIsSaleComplete(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle download invoice pdf
  const handleDownloadInvoice = () => {
    if (saleProductInfo) {
      const { buyerName, saleDate, productName, price, quantity } =
        saleProductInfo;

      // generate invoice PDF based on sale info
      generateInvoicePDF(buyerName, saleDate, productName, quantity, price);
    }
  };

  // console.log(saleProductInfo);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex justify-center items-center gap-1 border border-gray-300 px-1.5 py-0.5 rounded-sm bg-blue-500 text-white">
          Sell
          <TiShoppingCart className="text-2xl" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>
          {" "}
          {/* Wrap the content inside a single parent element */}
          <DialogHeader>
            <DialogTitle>Sell Smartphone</DialogTitle>
            <DialogDescription>
              Experience unparalleled performance and cutting-edge features with
              our latest smartphone.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Buyer Name
                </Label>
                <Input
                  id="buyerName"
                  {...register("buyerName", { required: true })}
                  placeholder="Example: Jhon Due"
                  className="col-span-3"
                />
              </div>
              {errors.buyerName && (
                <span className="text-red-600">buyerName is required</span>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Quantity
                </Label>
                <Input
                  type="number"
                  id="quantity"
                  {...register("quantity", { required: true })}
                  placeholder="Example: 1"
                  className="col-span-3"
                />
              </div>
              {errors.quantity && (
                <span className="text-red-600">Quantity is required</span>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Sell Date
                </Label>
                <Input
                  type="date"
                  id="saleDate"
                  {...register("saleDate", { required: true })}
                  className="col-span-3"
                />
              </div>
              {errors.saleDate && (
                <span className="text-red-600">saleDate is required</span>
              )}
            </div>

            <DialogFooter className="flex justify-center items-center gap-1">
              <div>
                {isSaleComplete && (
                  <button
                    type="reset"
                    className="flex justify-center items-center gap-1 border border-gray-300 px-2 py-1.5 rounded-md bg-blue-500 text-white"
                    onClick={handleDownloadInvoice}
                  >
                    <FaDownload />
                    Download Invoice
                  </button>
                )}
              </div>
              <Button type="submit">
                <CiShoppingBasket className="text-lg mr-1 font-medium text-white" />
                Sell
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
