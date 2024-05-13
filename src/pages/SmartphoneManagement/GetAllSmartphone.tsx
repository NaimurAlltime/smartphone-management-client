import React, { useState } from "react";
import { Button, Empty, Space, Table, TableColumnsType } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";
import { FaRegEdit } from "react-icons/fa";
import {
  useDeleteMultipleSmartphoneMutation,
  useDeleteSmartphoneMutation,
  useGetProductsQuery,
} from "@/redux/features/smartphone/smartphoneApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SellModal from "./SellModal";
import ProductListFilter from "./ProductListFilter";
import { useAppSelector } from "@/redux/hooks";
import { useSelector } from "react-redux";

interface DataType {
  key: React.Key;
  image: string;
  name: string;
  quantity: number;
  price: number;
  releaseDate: string;
  brand: string;
}

const GetAllSmartphone = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [smartphoneId, setSmartphoneId] = useState<string | null>(null);
  const [deleteProductsFromDB] = useDeleteMultipleSmartphoneMutation();
  const [deleteSmartphone] = useDeleteSmartphoneMutation();
  const { productFilterQuery } = useAppSelector((state) => state.filter);
  const { data, isLoading } = useGetProductsQuery(productFilterQuery);

  const user = useSelector((state: any) => state.auth.user);

  let content: JSX.Element | null = null; // Declare content variable here

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSmartphone(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Image",
      dataIndex: "smartphoneImage",
      render: (text) => (
        <img
          src={text}
          alt={text}
          style={{
            width: 80,
            height: 80,
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (
        _,
        record // Changed `_` to `record` to access the current record
      ) => (
        <Space size="small">
          {(user?.role === "super-admin" || user?.role === "seller") && (
            <button
              className=""
              onClick={() => setSmartphoneId(record.key as string)}
            >
              <SellModal
                state={{ data: record }}
                smartphooneId={smartphoneId}
              />
            </button>
          )}

          {(user?.role === "super-admin" ||
            user?.role === "branch-manager") && (
            <Link
              to={`/update-smartphone/${record.key}`}
              state={{ data: record }}
            >
              <button className="mx-3 flex justify-center items-center gap-1 border border-gray-300 px-1.5 py-0.5 rounded-sm bg-sky-500 text-white">
                Edit
                <FaRegEdit className="text-lg" />
              </button>
            </Link>
          )}

          {(user?.role === "super-admin" ||
            user?.role === "branch-manager") && (
            <Link
              to={`/duplicate-smartphone/${record.key}`}
              state={{ data: record }}
            >
              <button className="mx-2 flex justify-center items-center gap-1 border border-gray-300 px-1.5 py-0.5 rounded-sm bg-purple-500 text-white">
                Duplicate
              </button>
            </Link>
          )}

          {user?.role === "super-admin" && (
            <button
              className="flex justify-center items-center gap-1 border border-gray-300 px-1 py-0.5 rounded-sm bg-red-500 text-white"
              onClick={() => handleDelete(record.key as string)}
            >
              Delete
              <RiDeleteBinLine className="text-lg" />
            </button>
          )}
        </Space>
      ),
    },
  ];

  let products: DataType[] = [];
  if (!isLoading && data) {
    products = data.data.map((product: any) => ({
      key: product._id,
      name: product.name,
      releaseDate: product.releaseDate,
      price: product.price,
      quantity: product.quantity,
      brand: product.brand,
      model: product.model,
      operatingSystem: product.operatingSystem,
      storage: product.storage,
      screenSize: product.screenSize,
      camera: product.camera,
      processor: product.processor,
      battery: product.battery,
      smartphoneImage: product.smartphoneImage,
      details: product.details,
    }));
  }

  const deleteProducts = async () => {
    try {
      setLoading(true);
      const response = await deleteProductsFromDB({
        idList: selectedRowKeys,
      }).unwrap();
      if (response?.success) {
        toast.success(response?.message, {
          duration: 2000,
        });
        toast.success("Smartphone Deleted Successfully!", {
          duration: 2000,
        });
      }
    } catch (err) {
      toast.error("Something Went Wrong!", {
        duration: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  if (!isLoading && data?.data?.length > 0) {
    content = (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={products}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 6,
        }}
        loading={isLoading}
      />
    );
  }

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 text-center md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            All Smartphone
          </h4>
        </div>

        <ProductListFilter />

        <div style={{ padding: "10px" }}>
          {user?.role === "super-admin" && (
            <div style={{ marginBottom: 16 }}>
              <Button
                type="primary"
                size="large"
                onClick={deleteProducts}
                disabled={!hasSelected}
                loading={loading}
                danger
              >
                Delete Products
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </span>
            </div>
          )}

          {!isLoading && data?.data?.length === 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span>No Smartphone Found!</span>}
            />
          ) : (
            ""
          )}
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};

export default GetAllSmartphone;
