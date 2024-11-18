import axios from "axios";
import { create } from "zustand";
import { loginFormType, registerFormType } from "../lib/zod/registerSchema";
import { UserType } from "../types";
import { changeProfileType } from "../lib/zod/changeProfileSchema";

interface UserStore {
  currentUser: UserType;
  loading: boolean;
  error: boolean;

  handleRegister: (data: registerFormType) => void;
  handleLogin: (data: loginFormType) => void;
  handleAuthMe: (token: string) => void;
  handleLogout: () => void;
  handleChangeProfile: (data: changeProfileType) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  currentUser: {
    name: null,
    email: null,
    password: null,
    avatarUrl: null,
    cartItems: null,
    id: null,
    birthdayDate: null,
    phoneNumber: null,
    city: null,
    favoritesItems: null,
    cartTotalPrice: 0,
  },
  loading: false,
  error: false,

  handleRegister: async (data) => {
    try {
      set({ loading: true, error: false });
      const res = await axios.post(
        `${import.meta.env.VITE_MOKKY_URL}/register`,
        {
          ...data,
          avatarUrl: "",
          cartItems: [],
          favoritesItems: [],
          birthdayDate: null,
          phoneNumber: null,
          city: null,
        }
      );

      if (res.status === 201) {
        const auth = await axios.post(
          `${import.meta.env.VITE_MOKKY_URL}/auth`,
          {
            email: data.email,
            password: data.password,
          }
        );
        set({ currentUser: auth.data });
        localStorage.setItem("token", auth.data.token);
      }
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  handleLogin: async (data) => {
    try {
      set({ loading: true, error: false });

      const auth = await axios.post(`${import.meta.env.VITE_MOKKY_URL}/auth`, {
        email: data.email,
        password: data.password,
      });
      if (auth.status === 201) {
        set({ currentUser: auth.data.data });
        localStorage.setItem("token", auth.data.token);
      }
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  handleAuthMe: async (token) => {
    try {
      set({ loading: true, error: false });

      const res = await axios.get(`${import.meta.env.VITE_MOKKY_URL}/auth_me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data) set({ currentUser: res.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  handleLogout: () => {
    localStorage.removeItem("token");
    set({
      currentUser: {
        name: null,
        email: null,
        password: null,
        avatarUrl: null,
        cartItems: null,
        id: null,
        birthdayDate: null,
        phoneNumber: null,
        city: null,
        favoritesItems: null,
        cartTotalPrice: 0,
      },
    });
  },

  handleChangeProfile: async (data) => {
    try {
      set({ loading: true, error: false });

      const currentUser = get().currentUser;
      if (!currentUser.id) {
        console.log("Error!");
        set({ error: true });
        return;
      }

      const updatedUser = await axios.patch(
        `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
        {
          name: data.name === "" ? currentUser.name : data.name,
          email: data.email === "" ? currentUser.email : data.email,
          password: data.password === "" ? currentUser.password : data.password,
          avatarUrl:
            data.avatarUrl === "" ? currentUser.avatarUrl : data.avatarUrl,
          birthdayDate:
            data.birthdayDate === ""
              ? currentUser.birthdayDate
              : data.birthdayDate,
          phoneNumber:
            data.phoneNumber === ""
              ? currentUser.phoneNumber
              : data.phoneNumber,
          city: data.city === "" ? currentUser.city : data.city,
        }
      );

      if (updatedUser.data.id) {
        set({ currentUser: updatedUser.data });
      }
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
