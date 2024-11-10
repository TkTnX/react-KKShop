import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserStore();

  if (!currentUser) return navigate("/sign-in");
  return <div className="">Profile</div>;
};

export default Profile;
