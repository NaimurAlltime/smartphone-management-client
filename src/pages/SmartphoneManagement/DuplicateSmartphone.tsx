import { useForm, Controller, FieldValues } from "react-hook-form";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Space,
  DatePicker,
  Row,
  Col,
} from "antd";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import { StorageSizesArray } from "../../constant/storageSize.constant";
import dayjs from "dayjs";
import { useAddSmartphoneApiMutation } from "@/redux/features/smartphone/smartphoneApi";

const DuplicateSmartphone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addSmartphoneApi] = useAddSmartphoneApiMutation();
  // const { role } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const cureentData = useLocation();
  const { data } = cureentData?.state || {};

  const defaultValues = {
    battery: data.battery,
    brand: data.brand,
    camera: { ...data.camera },
    details: data.details,
    model: data.model,
    name: data.name,
    operatingSystem: data.operatingSystem,
    price: data.price,
    processor: { ...data.processor },
    smartphoneImage: data.smartphoneImage,
    quantity: data.quantity,
    releaseDate: dayjs(data.releaseDate, {
      format: "YYYY-MM-DD",
    }),
    screenSize: data.screenSize,
    storage: { ...data.storage },
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    const {
      battery,
      brand,
      camera,
      details,
      model,
      name,
      operatingSystem,
      price,
      processor,
      smartphoneImage,
      quantity,
      releaseDate,
      screenSize,
      storage,
    } = data;

    if (
      battery &&
      brand &&
      camera &&
      details &&
      model &&
      name &&
      operatingSystem &&
      price &&
      processor &&
      smartphoneImage &&
      quantity &&
      releaseDate &&
      screenSize &&
      storage
    ) {
      try {
        const addSmartphone = {
          battery,
          brand,
          camera,
          details,
          model,
          name,
          operatingSystem,
          price,
          processor,
          smartphoneImage,
          quantity,
          releaseDate: `${releaseDate.$y}-${releaseDate.$M + 1}-${
            releaseDate.$D
          }`,
          screenSize,
          storage,
        };

        const response = await addSmartphoneApi(addSmartphone as any).unwrap();

        setIsLoading(false);

        if (response?.success) {
          toast.success(response?.message, {
            duration: 2000,
          });
          toast.success("Smartphone Added Successfully!", {
            duration: 2000,
          });
          navigate(`/all-smartphone`);
        }
      } catch (err: any) {
        setIsLoading(false);
        console.error(err);
        toast.error("Something Went wrong! Try again", {
          duration: 1000,
        });
      }
    } else {
      setIsLoading(false);
      toast.error("Please provide every information!", {
        duration: 1500,
      });
    }
  };

  // custom date format
  const dateFormat = "YYYY-MM-DD";

  return (
    <div className="w-100 h-100 mx-auto ">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-center text-black dark:text-white">
            Duplicate Smartphone Form
          </h3>
        </div>
        <div style={{ padding: "20px" }}>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Name" name="name">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Price" name="price">
                  <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                      <InputNumber {...field} style={{ width: "100%" }} />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Quantity" name="quantity">
                  <Controller
                    name="quantity"
                    control={control}
                    render={({ field }) => (
                      <InputNumber
                        {...field}
                        style={{ width: "100%" }}
                        min={0}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Release Date" name="releaseDate">
                  <Controller
                    name="releaseDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        style={{ width: "100%" }}
                        format={dateFormat}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Brand" name="brand">
                  <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Model" name="model">
                  <Controller
                    name="model"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Operating System" name="operatingSystem">
                  <Controller
                    name="operatingSystem"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select Operating System"
                        options={[
                          { value: "Android", label: <span>Android</span> },
                          { value: "iOS", label: <span>iOS</span> },
                        ]}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Screen Size" name="screenSize">
                  <Controller
                    name="screenSize"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Battery" name="battery">
                  <Controller
                    name="battery"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Front Camera" name="camera.front">
                  <Controller
                    name="camera.front"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Back Camera" name="camera.back">
                  <Controller
                    name="camera.back"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Processor Type" name="processor.type">
                  <Controller
                    name="processor.type"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Processor Speed" name="processor.speed">
                  <Controller
                    name="processor.speed"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="RAM" name="storage.RAM">
                  <Controller
                    name="storage.RAM"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select RAM"
                        options={StorageSizesArray.map((size) => ({
                          value: size,
                          label: <span>{size}</span>,
                        }))}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="ROM" name="storage.ROM">
                  <Controller
                    name="storage.ROM"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select ROM"
                        options={StorageSizesArray.map((size) => ({
                          value: size,
                          label: <span>{size}</span>,
                        }))}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item label="Smartphone Image" name="smartphoneImage">
                  <Controller
                    name="smartphoneImage"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item label="Details" name="details">
                  <Controller
                    name="details"
                    control={control}
                    render={({ field }) => (
                      <Input.TextArea {...field} rows={4} />
                    )}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item>
                  <Space>
                    <Button
                      className="bg-blue-400"
                      type="primary"
                      htmlType="submit"
                      size="large"
                      disabled={isLoading}
                      loading={isLoading}
                    >
                      Add Smartphone
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DuplicateSmartphone;
