import { Link } from "react-router-dom";
import Search from "./Search";
const SideMenu = () => {
  return (
    <div className="sticky px-4 h-max top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search></Search>
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="sort"
            value="newest"
            className="w-4 h-4"
          ></input>
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="sort"
            value="popular"
            className="w-4 h-4"
          ></input>
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="sort"
            value="trending"
            className="w-4 h-4"
          ></input>
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="sort"
            value="oldest"
            className="w-4 h-4"
          ></input>
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Catergories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
