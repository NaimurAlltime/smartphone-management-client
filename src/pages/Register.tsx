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
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
        profileImage: data.profileImage,
      };

      const res = await addUser(userInfo).unwrap();

      dispatch(setRegister({ user: res }));
      toast.success("Register Successfully done!", {
        duration: 2000,
      });
      navigate("/login");
    } catch (err: any) {
      // console.log(err);
      toast.error("something went wrong!", { duration: 2000 });
    }
  };

  return (
    <div className="w-[500px] h-[100%] mx-auto mt-[2%]">
      {/* <!-- Sign In Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-xl text-center text-black dark:text-white">
            Register Form
          </h3>
        </div>
        <form className="p-4" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4.5">
            <label className="mb-1.5 block text-black dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              name="fullName"
              id="fullName"
              placeholder="Enter your Full Name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.fullName && (
              <span className="text-red-600">Full Name is required</span>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-1.5 block text-black dark:text-white">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.username && (
              <span className="text-red-600">Username is required</span>
            )}
          </div>

          <div className="mb-4.5">
            <label className="mb-1.5 block text-black dark:text-white">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-black dark:text-white">
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
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
            <label className="mb-1.5 block text-black dark:text-white">
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
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">
                {(errors.confirmPassword.message as string) ||
                  "Passwords do not match!"}
              </p>
            )}
          </div>

          <div className="mb-4.5">
            <label className="mb-1.5 block text-black dark:text-white">
              Role
            </label>
            <select
              {...register("role", { required: true })}
              name="role"
              id="role"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="seller">Seller</option>
              <option value="branch-manager">Branch Manager</option>
            </select>
            {errors.role && (
              <span className="text-red-600">Role is required</span>
            )}
          </div>

          <div className="mb-4.5 mt-1">
            <label className="mb-1.5 block text-black dark:text-white">
              Profile Picture URL
            </label>
            <input
              type="text"
              {...register("profileImage")}
              name="profileImage"
              id="profileImage"
              placeholder="Enter your profile Image URL"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
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
