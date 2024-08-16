import { useGetAllSmartphoneQuery } from "@/redux/features/smartphone/smartphoneApi";

export type SmartPhone = {
  _id: string;
  smartphoneImage: string;
  name: string;
  releaseDate: string;
  brand: string;
  quantity: number;
  price: string;
};

const TableOne = () => {
  const { data: smartphones } = useGetAllSmartphoneQuery({});

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Smartphone
      </h4>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Smartphone Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Release Date
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Brand
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Quantity
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Price
              </h5>
            </div>
          </div>

          {smartphones?.data.map((smartPhone: SmartPhone) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark`}
              key={smartPhone._id}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    width={60}
                    height={15}
                    src={smartPhone.smartphoneImage}
                    alt={smartPhone.name}
                    className="object-contain"
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {smartPhone.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{smartPhone.releaseDate}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{smartPhone.brand}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{smartPhone.quantity}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">${smartPhone.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOne;
