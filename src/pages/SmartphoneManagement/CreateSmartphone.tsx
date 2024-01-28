import { FieldValues } from "react-hook-form";
import { useAddSmartphoneApiMutation } from "../../redux/features/smartphone/smartphoneApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import { setSmartphones } from "../../redux/features/smartphone/smartphoneSlice";

function CreateSmartphone() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // add smartphone for server
  const [addSmartphoneApi, { data, isLoading, isSuccess, isError }] =
    useAddSmartphoneApiMutation();

  console.log({ data, isLoading, isSuccess, isError });

  const handleSubmit = async (data: FieldValues) => {
    // console.log(data);
    try {
      const addSmartphone = {
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        description: data.description,
        category: data.category,
        releaseDate: data.releaseDate,
        brand: data.brand,
        model: data.model,
        operatingSystem: data.operatingSystem,
        storageCapacity: Number(data.storageCapacity),
        screenSize: Number(data.screenSize),
        cameraQuality: data.cameraQuality,
        batteryLife: data.batteryLife,
      };

      console.log(addSmartphone);

      // const response = await addSmartphoneApi(addSmartphone);
      // dispatch(addSmartphone(response));

      const result = await addSmartphoneApi(addSmartphone).unwrap();

      // dispatch(addSmartphone({ user: res }));

      dispatch(setSmartphones({ smartphones: result }));

      if (result?.success) {
        toast.success(result?.message, {
          duration: 2000,
        });
        toast.success("Login Successfully done!", {
          duration: 2000,
        });
        navigate(`/get-all-smartphone`);
      }
    } catch (error) {
      toast.error("something went wrong!", { duration: 2000 });
    }
  };

  return <h2>create smartphone</h2>;
}

export default CreateSmartphone;
