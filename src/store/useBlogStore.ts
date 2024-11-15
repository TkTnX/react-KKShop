import { create } from "zustand";
import { PostType } from "../types";
import axios from "axios";

interface BlogStore {
  posts: PostType[];
  loading: boolean;
  error: boolean;

  fetchPosts: () => void;
  fetchPost: (id: string) => Promise<PostType>;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  loading: false,
  error: false,

  fetchPosts: async () => {
    try {
      set({ loading: true });
      const posts = await axios.get(`${import.meta.env.VITE_MOKKY_URL}/blog`);
      if (!posts.data) {
        throw new Error("Posts not found");
      }

      set({ posts: posts.data, error: false });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchPost: async (id) => {
    try {
      set({ loading: true });

      const post = await axios.get(
        `${import.meta.env.VITE_MOKKY_URL}/blog/${id}`
      );

      if (!post.data) {
        throw new Error("Post not found");
      }

      return post.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
