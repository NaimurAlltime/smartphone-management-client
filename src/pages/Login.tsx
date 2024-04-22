import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../styles/dashboard.css";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const defaultValues = {
  //   username: "naim123",
  //   password: "Naim1245@",
  // };

  const handleLogin = async (data: FieldValues) => {
    // console.log(data);
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
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.errorMessage || "something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="w-[500px] h-[100%] mx-auto mt-[10%]">
      {/* <!-- Sign In Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-xl text-center text-black dark:text-white">
            Login Form
          </h3>
        </div>
        <form className="p-6.5 ps-1" onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.username && (
              <span className="text-red-600">Username is required</span>
            )}
          </div>

          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
          </div>

          <div className="mt-5 mb-5.5 flex items-center justify-between">
            <p className="text-start">
              Don't have an account?{" "}
              <Link className="font-semibold" to="/register">
                Register
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="flex w-full custom-sidebar-bg text-white mt-2 justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
