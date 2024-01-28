import { Table, Spin, Alert } from "antd";
import { useGetAllSmartphoneQuery } from "../../redux/features/smartphone/smartphoneApi";

const DataTable = () => {
  const {
    data: smartphones,
    isLoading,
    isError,
  } = useGetAllSmartphoneQuery(undefined);

  console.log(smartphones);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "ReleaseDate",
      dataIndex: "releaseDate",
      key: "releaseDate",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "OperatingSystem",
      dataIndex: "operatingSystem",
      key: "operatingSystem",
    },
    {
      title: "StorageCapacity",
      dataIndex: "storageCapacity",
      key: "storageCapacity",
    },
    {
      title: "ScreenSize",
      dataIndex: "screenSize",
      key: "screenSize",
    },
    {
      title: "CameraQuality",
      dataIndex: "cameraQuality",
      key: "cameraQuality",
    },
    {
      title: "BatteryLife",
      dataIndex: "batteryLife",
      key: "batteryLife",
    },
  ];

  if (isLoading) {
    return <Spin />;
  }

  if (isError) {
    return <Alert message={`Error: ${isError}`} type="error" />;
  }

  return <Table dataSource={smartphones?.data} columns={columns} />;
};

export default DataTable;
