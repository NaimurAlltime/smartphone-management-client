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
import { useNavigate } from "react-router-dom";
import { StorageSizesArray } from "../../constant/storageSize.constant";
import { useAddSmartphoneApiMutation } from "@/redux/features/smartphone/smartphoneApi";

const defaultValues = {
  battery: "5000 mAh",
  brand: "Apple",
  camera: { front: "16 MP", back: "48 MP" },
  details:
    "Experience cutting-edge technology at your fingertips with the latest smartphone. Sleek design, powerful performance, and an intuitive user experience redefine mobile innovation. Stay connected, capture moments, and explore endless possibilities with this essential companion.",
  model: "iPhone 14 Pro",
  name: "Apple iPhone 14 Pro",
  operatingSystem: "iOS",
  price: 800,
  processor: { type: "Apple A16 Bionic (4 nm)", speed: "2x3.4 GHz" },
  smartphoneImage:
    "https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?t=st=1713621886~exp=1713625486~hmac=0363d5c1149890ccefb8c983c4f33e9c47299c17424e52297787a80f48f66ad3&w=740",
  quantity: 100,
  releaseDate: undefined,
  screenSize: "6.7 inches",
  storage: { RAM: "8GB", ROM: "128GB" },
};

const CreateSmartphone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addSmartphoneApi] = useAddSmartphoneApiMutation();
  // const { role } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
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

  return (
    <div className="w-100 h-100 mx-auto ">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-center text-black dark:text-white">
            Create Smartphone Form
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
                      <DatePicker {...field} style={{ width: "100%" }} />
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

export default CreateSmartphone;
