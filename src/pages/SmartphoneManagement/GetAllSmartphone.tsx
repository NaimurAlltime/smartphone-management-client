import { useGetAllSmartphoneQuery } from "../../redux/features/smartphone/smartphoneApi";

function GetAllSmartphone() {
  const { data: smartphones } = useGetAllSmartphoneQuery(undefined);
  console.log(smartphones?.data);
  return (
    <>
      <h2>all smartphone</h2>
    </>
  );
}

export default GetAllSmartphone;
