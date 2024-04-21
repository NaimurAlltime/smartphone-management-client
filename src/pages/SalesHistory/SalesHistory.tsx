import { Divider, Select, Table, TableColumnsType } from "antd";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { TSalesTableData } from "@/types/smartphone";
import { useGetSaleHistoryQuery } from "@/redux/features/sale/saleApi";
const { Content } = Layout;

const options = [
  { value: "daily", label: <span>Daily Sales</span> },
  { value: "weekly", label: <span>Weekly Sales</span> },
  { value: "monthly", label: <span>Monthly Sales</span> },
  { value: "yearly", label: <span>Yearly Sales</span> },
];

const SalesHistory = () => {
  const [slaesHistoryType, setSlaesHistoryType] = useState("daily");
  const { data, isLoading, isFetching } =
    useGetSaleHistoryQuery(slaesHistoryType);
  const [salesInfo, setSalesInfo] = useState<TSalesTableData[]>();

  useEffect(() => {
    if (data && !isLoading && !isFetching) {
      const salesinfoArr = data.data.map((sale: TSalesTableData) => {
        let formattedDate;

        if (slaesHistoryType === "daily" && sale._id) {
          formattedDate = dayjs(
            `${sale._id.year}-${sale._id.month}-${sale._id.day}`
          ).format("dddd, MMMM D, YYYY");
        } else if (slaesHistoryType === "weekly" && sale._id) {
          formattedDate = `Week number: ${sale._id.week}`;
        } else if (slaesHistoryType === "monthly" && sale._id) {
          formattedDate = dayjs(`${sale._id.year}-${sale._id.month}`).format(
            "MMMM YYYY"
          );
        } else if (slaesHistoryType === "yearly" && sale._id) {
          formattedDate = `Year: ${sale._id.year?.toString()}`;
        }

        return {
          key: uuidv4(),
          week: formattedDate,
          totalSale: sale.totalSale,
          sales: sale.sales,
        };
      });

      setSalesInfo(salesinfoArr as TSalesTableData[]);
    }
  }, [data, isLoading, slaesHistoryType, isFetching]);

  const expandedRowRender = (record: TSalesTableData) => {
    const nestedRowColumns: TableColumnsType<TSalesTableData> = [
      {
        title: "Product Name",
        dataIndex: "productName",
      },
      {
        title: "Buyer Name",
        dataIndex: "buyerName",
      },
      {
        title: "Date",
        dataIndex: "saleDate",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Total Price",
        dataIndex: "totalPrice",
      },
    ];

    const dataSource: TSalesTableData[] = [];

    if (record?.sales) {
      if (record?.sales?.length > 0) {
        record?.sales?.forEach((sale) => {
          dataSource.push({
            key: uuidv4(),
            quantity: sale.quantity,
            buyerName: sale.buyerName,
            saleDate: sale.saleDate,
            smartphoneImage: sale.smartphoneImage,
            productName: sale.productName,
            totalPrice: sale.productPrice * sale.quantity,
            price: sale.productPrice,
          });
        });
      }
    }

    return (
      <Table
        columns={nestedRowColumns}
        dataSource={dataSource}
        pagination={false}
      />
    );
  };

  // Define the table data
  const tableData: TSalesTableData[] = [];

  // Populate tableData based on salesInfo
  if (salesInfo && !isLoading) {
    salesInfo.forEach((sales) => {
      tableData.push({
        key: sales.key,
        week: sales.week,
        totalSale: sales.totalSale,
        sales: sales.sales,
      });
    });
  }

  const columns: TableColumnsType<TSalesTableData> = [
    {
      title: `${slaesHistoryType.toUpperCase()} SALES`,
      dataIndex: "week",
      key: "week",
    },
    { title: "TOTAL SALES", dataIndex: "totalSale", key: "totalSale" },
  ];

  const handleSalesHistoryType = (data: string) => {
    setSlaesHistoryType(data);
  };

  return (
    <>
      <Content style={{ padding: "10px" }}>
        <div>
          <Select
            popupMatchSelectWidth={false}
            options={options}
            placeholder="Select Sales History Type"
            onChange={handleSalesHistoryType}
          />
        </div>
        <Divider />
        <Table
          columns={columns}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
          dataSource={tableData}
          loading={isLoading && isFetching}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 12,
          }}
        />
      </Content>
    </>
  );
};

export default SalesHistory;
