import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateSmartphoneMutation } from "../../redux/features/smartphone/smartphoneApi";

function UpdateSmartphone() {
  const navigate = useNavigate();
  const cureentData = useLocation();
  const { data } = cureentData?.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    name,
    category,
    releaseDate,
    price,
    quantity,
    brand,
    model,
    operatingSystem,
    storageCapacity,
    screenSize,
    cameraQuality,
    batteryLife,
    smartphoneImage,
    description,
  } = data;

  const [updateSmartphone, { isSuccess }] = useUpdateSmartphoneMutation(); //returns array

  const onSubmit = async (updateData: any) => {
    const {
      name,
      category,
      releaseDate,
      price,
      quantity,
      brand,
      model,
      operatingSystem,
      storageCapacity,
      screenSize,
      cameraQuality,
      batteryLife,
      smartphoneImage,
      description,
    } = updateData;

    const allData = {
      _id: data._id,
      name,
      category,
      releaseDate,
      price: Number(price),
      quantity: Number(quantity),
      brand,
      model,
      operatingSystem,
      storageCapacity: Number(storageCapacity),
      screenSize: Number(screenSize),
      cameraQuality,
      batteryLife,
      smartphoneImage,
      description,
    };

    // console.log(allData);

    try {
      const result = await updateSmartphone(allData).unwrap();

      if (result?.success) {
        toast.success(result?.message, {
          duration: 2000,
        });
        toast.success("Smartphone Updated Successfully!", {
          duration: 2000,
        });
        navigate(`/all-smartphone`);
      }
    } catch (err) {
      console.log(err, "error updated");
    }
  };

  return (
    <div className="w-100 h-100 mx-auto ">
      {/* <!-- Sign In Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-center text-black dark:text-white">
            Update Smartphone Form
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
                {...register("name")}
                id="name"
                placeholder="Enter your name"
                defaultValue={name}
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
                {...register("price")}
                id="price"
                defaultValue={price}
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
                {...register("quantity")}
                id="quantity"
                defaultValue={quantity}
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
                {...register("category")}
                id="category"
                defaultValue={category}
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
                {...register("releaseDate")}
                id="releaseDate"
                placeholder="Enter releaseDate"
                defaultValue={releaseDate}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.releaseDate && (
                <span className="text-red-600">Release Date is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                brand
              </label>
              <input
                type="text"
                {...register("brand")}
                id="brand"
                defaultValue={brand}
                placeholder="Enter brand"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.category && (
                <span className="text-red-600">brand is required</span>
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
                {...register("model")}
                id="model"
                defaultValue={model}
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
                {...register("operatingSystem")}
                id="operatingSystem"
                defaultValue={operatingSystem}
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
                {...register("storageCapacity")}
                id="storageCapacity"
                defaultValue={storageCapacity}
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
                {...register("screenSize")}
                id="screenSize"
                placeholder="Enter screenSize"
                defaultValue={screenSize}
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
                {...register("cameraQuality")}
                id="cameraQuality"
                defaultValue={cameraQuality}
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
                {...register("batteryLife")}
                id="screenSize"
                defaultValue={batteryLife}
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
              Smartphone Image
            </label>
            <input
              type="text"
              {...register("smartphoneImage", { required: true })}
              id="smartphoneImage"
              defaultValue={smartphoneImage}
              placeholder="Enter smartphoneImage URL"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.smartphoneImage && (
              <span className="text-red-600">smartphoneImage is required</span>
            )}
          </div>

          <div>
            <label className="mb-1 block text-black dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              // cols={6}
              rows={3}
              {...register("description")}
              placeholder="Enter description"
              defaultValue={description}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.description && (
              <span className="text-red-600">description is required</span>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full custom-sidebar-bg text-white mt-2 justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Update Smartphone
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateSmartphone;
