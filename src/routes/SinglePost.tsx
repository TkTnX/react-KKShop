import { useLocation } from "react-router-dom";
import { useBlogStore } from "../store/useBlogStore";
import { useEffect, useState } from "react";
import { PostType } from "../types";

const SinglePost = () => {
  const { fetchPost, error, loading } = useBlogStore();
  const [post, setPost] = useState<PostType | null>(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPostFunc = async () => {
      const post = await fetchPost(id);
      setPost(post);
    };

    fetchPostFunc();
  }, []);

  if (loading || !post)
    return <p className="text-pink text-center">Загрузка...</p>;
  if (!loading && error) return <p className="text-pink text-center">Ошибка</p>;
  return (
    <div className="container mt-10">
      <div className="max-w-[500px] mx-auto">
        <img
          className="w-full h-[300px] object-cover rounded-lg"
          src={post.img}
          alt={post.title}
        />
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold text-center mt-3">
        {post.title}
      </h2>
      <p className="text-xl mt-3 text-pink text-center">{post.desc}</p>
      <p className="text-lg text-right mt-3 text-grey">{post.createdAt}</p>
    </div>
  );
};

export default SinglePost;
