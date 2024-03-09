import { useGetSaleHistoryQuery } from "@/redux/features/sale/saleApi";
import { useState } from "react";
import SaleHistoryTable from "./SaleHistoryTable";

const SalesHistory = () => {
  const [timeFrame, seTimeFrame] = useState("");
  const { data: saleHistory } = useGetSaleHistoryQuery({
    timeFrame: timeFrame,
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 text-center md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Smartphone Sales History
        </h4>
      </div>

      <div className="">
        <select
          onChange={(e) => seTimeFrame(e.target?.value)}
          name=""
          id=""
          className="border border-[#0874c4]  py-4 md:py-0.5 my-3 p-2 bg-slate-300 rounded-md focus:outline-none focus:border-blue-500  md:ml-3"
        >
          <option defaultChecked> Filter By Date</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly"> Yearly </option>
        </select>
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
                      Buyer Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sale Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {saleHistory?.data.map((item) => (
                    <SaleHistoryTable key={item._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHistory;
