import { create } from "zustand";
import { ProductType } from "../types";
import axios from "axios";

interface UserStore {
  currentUser: any;
  loading: boolean;
  error: boolean;

  handleRegister: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: {},
  loading: false,
  error: false,

  handleRegister: () => {},
}));
