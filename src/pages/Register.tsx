import { Button, Row } from "antd";
import SMForm from "../components/form/SMForm";
import SMInput from "../components/form/SMInput";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { setRegister } from "../redux/features/auth/authSlice";

function Register() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const handleRegister = async (data: FieldValues) => {
    console.log(data);

    try {
      const userInfo = {
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const res = await register(userInfo).unwrap();

      dispatch(setRegister({ user: res }));
      toast.success("Register Successfully done!", {
        duration: 2000,
      });
      navigate("/login");
    } catch (error) {
      toast.error("something went wrong!", { duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <SMForm onSubmit={handleRegister}>
        <SMInput type="text" name="username" label="Username:" />
        <SMInput type="email" name="email" label="Email:" />
        <SMInput type="text" name="password" label="Password:" />

        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Button htmlType="submit">Register</Button>
      </SMForm>
    </Row>
  );
}

export default Register;
