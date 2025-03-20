import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 mb-12 xl:flex-row">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="object-cover rounded-2xl"
          w="735"
        ></Image>
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-3xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aliquid, non architecto sapiente in iste facilis? Laudantium qui odit
          necessitatibus!
        </p>
        <Link to="/test" className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
