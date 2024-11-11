import axios from "axios";

export const fetchCurrentUser = async () => {
    const currentUser = await axios.get(
      `${import.meta.env.VITE_MOKKY_URL}/auth_me`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return currentUser.data;
}