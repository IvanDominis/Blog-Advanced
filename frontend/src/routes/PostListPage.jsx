import { useState } from "react";
import PostLists from "../components/PostLists";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="px-4 py-2 text-sm text-white bg-blue-800 md:hidden rounded-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div className="">
          <PostLists></PostLists>
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu></SideMenu>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
