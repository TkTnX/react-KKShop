import { useEffect } from "react";
import { useBlogStore } from "../store/useBlogStore";
import Post from "../components/shared/pages/Blog/Post";

const Blog = () => {
  const { posts, loading, error, fetchPosts } = useBlogStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-12">
      <h2 className="text-5xl xl:text-9xl font-bold">Блог</h2>
      {/* POSTS LIST */}
      {loading && <p className="text-pink text-center text-lg">Загрузка...</p>}
      {error && !loading && (
        <p className="text-pink text-center text-lg">Ошибка</p>
      )}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-16">
        {/* posts */}
        {posts.length > 0 ? posts.map((post) => (
          <Post key={post.id} post={post} />
        )) : <p className="text-pink text-center text-lg">Нет постов</p>}
      </div>
    </div>
  );
};

export default Blog;
