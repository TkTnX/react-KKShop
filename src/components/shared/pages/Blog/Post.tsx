import { Link } from "react-router-dom";
import { PostType } from "../../../types";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="sm:max-w-[510px] justify-self-center">
      {/* post img */}
      <div className="relative ">
        <Link className="w-full" to={`/blog/${post.id}`}>
          <img className="w-full" src={post.img} alt={post.title} />
        </Link>

        <div className="absolute top-4 right-5 bg-black text-white text-center font-bold  tracking-[0.04em] leading-[1] px-3 xl:px-7 py-1 xl:py-2">
          <b className="font-second text-2xl xl:text-4xl">
            {post.createdAt.split(" ")[0]}
          </b>
          <p className="text-xs">{post.createdAt.split(" ")[1]}</p>
        </div>
      </div>

      {/* post text */}
      <div className="p-2 w-fit">
        <Link to={`/blog/${post.id}`}>
          <h6 className="text-lg xl:text-xl hover:text-pink">{post.title}</h6>
        </Link>
        <p className=" text-sm xl:text-base mt-1 text-[#636363] leading-[1.5] description-lg">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Post;
