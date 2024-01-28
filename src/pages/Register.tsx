import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../redux/features/auth/authApi";
import "../styles/dashboard.css";
import { toast } from "sonner";
import { setRegister } from "../redux/features/auth/authSlice";

function Register() {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data: FieldValues) => {
    console.log(data);

    try {
      const userInfo = {
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const res = await addUser(userInfo).unwrap();

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
    <div className="w-[500px] h-[100%] mx-auto mt-[10%]">
      {/* <!-- Sign In Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-center text-black dark:text-white">
            Register Form
          </h3>
        </div>
        <form className="p-6.5 ps-1" onSubmit={handleSubmit(handleRegister)}>
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

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one capital letter and one special character.
              </p>
            )}
          </div>

          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                validate: (match) => {
                  const password = getValues("password");
                  return match === password || "Passwords do not match!";
                },
              })}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter confirm password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">
                {(errors.confirmPassword.message as string) ||
                  "Passwords do not match!"}
              </p>
            )}
          </div>

          <div className="mt-5 mb-5.5 flex items-center justify-between">
            <p className="text-start">
              Already have an account?{" "}
              <Link className="font-semibold" to="/login">
                Login
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="flex w-full custom-sidebar-bg text-white mt-2 justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
