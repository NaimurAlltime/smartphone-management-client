import { useGetAllSmartphoneQuery } from "@/redux/features/smartphone/smartphoneApi";
import SmartphoneCard from "./SmartphoneCard";

function SalesManagement() {
  const { data: smartphones } = useGetAllSmartphoneQuery({});
  // console.log(smartphones);
  return (
    <div className="my-10 max-w-screen-xl mx-auto p-2 md:p-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {smartphones?.data.map((item: any) => (
          <SmartphoneCard key={item._id} item={item}></SmartphoneCard>
        ))}
      </div>
    </div>
  );
}

export default SalesManagement;
