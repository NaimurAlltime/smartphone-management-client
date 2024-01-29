import { useGetAllSmartphoneQuery } from "../../redux/features/smartphone/smartphoneApi";
import DataTable from "./DataTable";

function GetAllSmartphone() {
  const { data: smartphones } = useGetAllSmartphoneQuery(undefined);
  console.log(smartphones?.data);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 text-center md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Smartphone
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Smartphone Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Brand
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Model
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Storage
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {smartphones?.data.map((item) => (
                    <DataTable key={item._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetAllSmartphone;
