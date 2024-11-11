import ChangeProfileForm from "../components/shared/Profile/ChangeProfileForm";
import { useUserStore } from "../store/useUserStore";

const ChangeProfile = () => {
    const { currentUser } = useUserStore();
  return (
    <>
      <h2 className="text-5xl xl:text-9xl font-bold">Личная информация</h2>
      <ChangeProfileForm profileInfo={currentUser} />
    </>
  );
}

export default ChangeProfile