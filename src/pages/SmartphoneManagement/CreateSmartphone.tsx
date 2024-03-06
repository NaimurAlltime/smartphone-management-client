import { FieldValues } from "react-hook-form";
import { useAddSmartphoneApiMutation } from "../../redux/features/smartphone/smartphoneApi";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function CreateSmartphone() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // add smartphone for server
  const [addSmartphoneApi, { data, isLoading, isSuccess, isError }] =
    useAddSmartphoneApiMutation();

  console.log({ data, isLoading, isSuccess, isError });

  const onSubmit = async (data: FieldValues) => {
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

      // console.log(addSmartphone);

      const result = await addSmartphoneApi(addSmartphone as any).unwrap();

      if (result?.success) {
        toast.success(result?.message, {
          duration: 2000,
        });
        toast.success("Smartphone Added Successfully!", {
          duration: 2000,
        });
        navigate(`/all-smartphone`);
      }
    } catch (error) {
      toast.error("something went wrong!", { duration: 2000 });
    }
  };
  // mt-[10%]
  return (
    <div className="w-100 h-100 mx-auto ">
      {/* <!-- Sign In Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-center text-black dark:text-white">
            Create Smartphone Form
          </h3>
        </div>
        <form className="p-6.5 px-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter your name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Price
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                id="price"
                placeholder="Enter price"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.price && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity", { required: true })}
                id="quantity"
                placeholder="Enter quantity"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.quantity && (
                <span className="text-red-600">Quantity is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Category
              </label>
              <input
                type="text"
                {...register("category", { required: true })}
                id="category"
                placeholder="Enter category"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.category && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Release Date
              </label>
              <input
                type="date"
                {...register("releaseDate", { required: true })}
                id="releaseDate"
                placeholder="Enter releaseDate"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.releaseDate && (
                <span className="text-red-600">brand is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                brand
              </label>
              <input
                type="text"
                {...register("brand", { required: true })}
                id="brand"
                placeholder="Enter brand"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.category && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Model
              </label>
              <input
                type="text"
                {...register("model", { required: true })}
                id="model"
                placeholder="Enter model"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.model && (
                <span className="text-red-600">model is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                OperatingSystem
              </label>
              <input
                type="text"
                {...register("operatingSystem", { required: true })}
                id="operatingSystem"
                placeholder="Enter operatingSystem"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.operatingSystem && (
                <span className="text-red-600">
                  operatingSystem is required
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                StorageCapacity
              </label>
              <input
                type="number"
                {...register("storageCapacity", { required: true })}
                id="storageCapacity"
                placeholder="Enter storageCapacity"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.storageCapacity && (
                <span className="text-red-600">
                  storageCapacity is required
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Screen Size
              </label>
              <input
                type="text"
                {...register("screenSize", { required: true })}
                id="screenSize"
                placeholder="Enter screenSize"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.screenSize && (
                <span className="text-red-600">screenSize is required</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mb-2">
            <div className="mb-4.5 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Camera Quality
              </label>
              <input
                type="text"
                {...register("cameraQuality", { required: true })}
                id="cameraQuality"
                placeholder="Enter cameraQuality"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.cameraQuality && (
                <span className="text-red-600">cameraQuality is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                BatteryLife
              </label>
              <input
                type="text"
                {...register("batteryLife", { required: true })}
                id="screenSize"
                placeholder="Enter batteryLife"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.batteryLife && (
                <span className="text-red-600">batteryLife is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-black dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              // cols={6}
              rows={3}
              {...register("description", { required: true })}
              placeholder="Enter description"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.description && (
              <span className="text-red-600">batteryLife is required</span>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full custom-sidebar-bg text-white mt-2 justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Add Smartphone
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateSmartphone;
