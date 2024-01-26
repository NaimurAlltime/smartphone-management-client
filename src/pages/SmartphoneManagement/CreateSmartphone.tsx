import { Button, Row } from "antd";
import SMInput from "../../components/form/SMInput";
import SMForm from "../../components/form/SMForm";
import { FieldValues } from "react-hook-form";
import SMTextarea from "../../components/form/SMTextarea";

function CreateSmartphone() {
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <SMForm onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput type="text" name="name" label="Smartphone Name:" />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput type="text" name="price" label="Price:" />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput type="text" name="quantity" label="Quantity:" />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput type="text" name="category" label="Category:" />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput type="text" name="batteryLife" label="Battery Life:" />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput type="text" name="releaseDate" label="releaseDate:" />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput type="text" name="brand" label="Brand:" />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput type="text" name="model" label="Model:" />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput
              type="text"
              name="operatingSystem"
              label="Operating System:"
            />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput
              type="text"
              name="storageCapacity"
              label="Storage Capacity:"
            />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "7px", width: "50%" }}>
            <SMInput type="text" name="screenSize" label="Screen Size:" />
          </div>
          <div style={{ width: "50%" }}>
            <SMInput type="text" name="cameraQuality" label="Camera Quality:" />
          </div>
        </div>
        <SMTextarea name="description" label="Description:" />
        <Button htmlType="submit">Submit</Button>
      </SMForm>
    </Row>
  );
}

export default CreateSmartphone;
