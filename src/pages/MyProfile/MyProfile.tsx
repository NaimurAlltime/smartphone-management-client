import { useSelector } from "react-redux";

const MyProfile = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <div className="md:flex justify-center items-center gap-12 md:mt-20 mt-5">
      <div>
        <img
          src={user.profileImage}
          className="w-96 rounded-md shadow-2xl"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-2xl font-medium text-gray-600">
          {" "}
          <span className="text-2xl font-semibold text-gray-800">
            Name:
          </span>{" "}
          {user.fullName}{" "}
        </h2>
        <h2 className="text-2xl font-medium text-gray-600 pt-2">
          {" "}
          <span className="text-2xl font-semibold text-gray-800">
            {" "}
            Username:{" "}
          </span>
          {user.username}{" "}
        </h2>
        <h2 className="text-2xl font-medium text-gray-600 py-2">
          <span className="text-2xl font-semibold text-gray-800"> Email: </span>
          {user.email}{" "}
        </h2>
        <h2 className="text-2xl font-medium text-gray-600">
          <span className="text-2xl font-semibold text-gray-800"> Role: </span>
          {user.role}{" "}
        </h2>
      </div>
    </div>
  );
};

export default MyProfile;
