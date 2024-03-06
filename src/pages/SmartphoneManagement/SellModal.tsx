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

export default function SellModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [addSaleApi] = useAddSaleApiMutation();

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    try {
      const addSale = {
        buyer_name: data.buyer_name,
        quantity: Number(data.quantity),
        sale_date: data.sale_date,
      };
      console.log(addSale);
      const result = await addSaleApi(addSale as any).unwrap();
      if (result?.success) {
        toast.success(result?.message, {
          duration: 2000,
        });
        toast.success("Sale Added Successfully!", {
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                id="buyer_name"
                {...register("buyer_name", { required: true })}
                placeholder="Example: Jhon Due"
                className="col-span-3"
              />
            </div>
            {errors.buyer_name && (
              <span className="text-red-600">Buyer_name is required</span>
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
                id="sale_date"
                {...register("sale_date", { required: true })}
                className="col-span-3"
              />
            </div>
            {errors.sale_date && (
              <span className="text-red-600">Sale_date is required</span>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">
              <CiShoppingBasket className="text-xl mr-1 font-medium text-white" />
              Sell
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
