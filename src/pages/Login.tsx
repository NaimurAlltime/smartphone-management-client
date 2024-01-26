import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SMForm from "../components/form/SMForm";
import SMInput from "../components/form/SMInput";

function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const defaultValues = {
    username: "naim123",
    password: "Naim1245@",
  };

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Log in loading");
    try {
      const userInfo = {
        username: data.username,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user: TUser = verifyToken(res.data.token);

      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Login Successfully done!", {
        id: toastId,
        duration: 2000,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <SMForm onSubmit={handleLogin} defaultValues={defaultValues}>
        <SMInput type="text" name="username" label="Username:" />
        <SMInput type="text" name="password" label="Password:" />
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <Button htmlType="submit">Login</Button>
      </SMForm>
    </Row>
  );
}

export default Login;
