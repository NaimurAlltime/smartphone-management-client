import Search from "antd/es/input/Search";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Col, Divider, Drawer, Layout, Row } from "antd";
import FilterSidebar from "./FilterSidebar";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addProductFilterQuery } from "../../redux/features/filter/filterSlice";
import { CiFilter } from "react-icons/ci";

const ProductListFilter = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const handleSearch = (searchValue: string) => {
    dispatch(addProductFilterQuery(`name=${searchValue}`));
  };

  const onSubmit = (data: FieldValues) => {
    handleSearch(data.search);
  };

  const onSearch = (searchValue: string) => {
    handleSearch(searchValue);
  };

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <Row justify={"center"} align={"middle"}>
        <Col xs={20} sm={18} md={20} lg={20} xl={20}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="search"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Search
                  {...field}
                  placeholder="Search products"
                  allowClear
                  enterButton="Search"
                  size="large"
                  className="bg-blue-400 py-0.5 px-2 font-medium w-fit rounded-md text-white"
                  onSearch={onSearch}
                />
              )}
            />
          </form>
        </Col>

        <Col xs={6} sm={4} md={4} lg={4} xl={2}>
          <Layout>
            <Sider
              width={"120px"}
              style={{
                backgroundColor: "#f1f2f6",
                padding: "20px 10px",
              }}
            >
              <button
                className="flex justify-center items-center bg-blue-400 py-0.5 px-2 font-medium w-fit rounded-md text-white"
                onClick={showDrawer}
              >
                Open Filter
                <CiFilter className="text-3xl font-semibold" />
              </button>
            </Sider>

            <Drawer
              title="Filter Smartphones"
              placement="left"
              closable={true}
              onClose={onCloseDrawer}
              open={drawerVisible}
              width={300}
            >
              <FilterSidebar />
            </Drawer>
          </Layout>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default ProductListFilter;
