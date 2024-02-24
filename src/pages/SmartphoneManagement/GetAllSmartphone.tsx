import { useState } from "react";
import { useGetAllSmartphoneQuery } from "../../redux/features/smartphone/smartphoneApi";
import DataTable from "./DataTable";
// Initialization for ES Users
import { Modal, Ripple, initTE } from "tw-elements";

initTE({ Modal, Ripple });

function GetAllSmartphone() {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [screenSize, setScreenSize] = useState("");

  const { data: smartphones } = useGetAllSmartphoneQuery({
    brand: brand,
    category: category,
    operatingSystem: operatingSystem,
    storageCapacity: storageCapacity,
    releaseDate: releaseDate,
    screenSize: screenSize,
  });

  // console.log(smartphones?.data);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 text-center md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Smartphone
        </h4>
      </div>

      <div className="flex justify-center items-center">
        <div className="">
          <select
            onChange={(e) => setBrand(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By Brand</option>
            <option value="Google">Google</option>
            <option value="Apple">Apple</option>
            <option value="Realme">Realme</option>
            <option value="Samsung"> Samsung </option>
            <option value="OnePlus"> OnePlus </option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setCategory(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By Category</option>
            <option value="Simple">Simple</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setOperatingSystem(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter by Operating System</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
            <option value="OxygenOS">OxygenOS</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setStorageCapacity(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By Storage Capacity</option>
            <option value="32">32</option>
            <option value="63">64</option>
            <option value="128">128</option>
            <option value="256">256</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <select
            onChange={(e) => setReleaseDate(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By releaseDate</option>
            <option value="2023-09-14T00:00:00.000Z">
              2023-09-14T00:00:00.000Z
            </option>
            <option value="2022-10-19T00:00:00.000Z">
              2022-10-19T00:00:00.000Z
            </option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setScreenSize(e.target?.value)}
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By screenSize</option>
            <option value="5.2">5.2</option>
            <option value="5.6">5.6</option>
            <option value="6.1">6.1</option>
            <option value="6.2">6.2</option>
            <option value="6.4">6.4</option>
          </select>
        </div>
        <div>
          <select
            // onChange={(e) => setFilter(e.target?.value)}
            name=""
            id=""
            className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
          >
            <option defaultChecked> Filter By</option>
            <option value="minPrice">Min Price</option>
            <option value="maxPrice">Max Price</option>
          </select>
        </div>
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
