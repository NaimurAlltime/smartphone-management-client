import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TTextAreaProps = {
  name: string;
  label?: string;
};

function SMTextarea({ name, label }: TTextAreaProps) {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <TextArea {...field} id={name} />}
      />
    </div>
  );
}

export default SMTextarea;
