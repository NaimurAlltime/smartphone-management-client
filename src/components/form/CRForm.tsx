import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

function CRForm({ onSubmit, children, defaultValues }: TFormProps) {
  const formconfig: TFormConfig = {};

  if (defaultValues) {
    formconfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formconfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default CRForm;
