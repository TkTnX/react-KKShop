import axios from "axios";
import { create } from "zustand";
import { loginFormType, registerFormType } from "../lib/zod/registerSchema";

interface UserStore {
  currentUser: any;
  loading: boolean;
  error: boolean;

  handleRegister: (data: registerFormType) => void;
  handleLogin: (data: loginFormType) => void;
  handleAuthMe: (token: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: {},
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
}));
