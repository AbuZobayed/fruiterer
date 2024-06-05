import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://fruiterer-server2.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl text-green-600 font-bold">Profile Info</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn text-white  bg-green-600 "
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
