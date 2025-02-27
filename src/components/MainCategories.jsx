import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="items-center justify-center hidden gap-8 p-4 bg-white shadow-lg md:flex rounded-3xl xl:rounded-full">
      {/* LINKS */}
      <div className="flex flex-wrap items-center justify-between flex-1">
        <Link
          to="/posts"
          className="px-4 py-2 text-white bg-blue-800 rounded-full"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Web Design
        </Link>
        <Link
          to="/postscat=development"
          className="px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Development
        </Link>
        <Link
          to="/postscat=databases"
          className="px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Databases
        </Link>
        <Link
          to="/postscat=seo"
          className="px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Search Engines
        </Link>
        <Link
          to="/postscat=marketing"
          className="px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* SEARCH */}
      <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />{" "}
        </svg>
        <input type="text" placeholder="Search a post..."></input>
      </div>
    </div>
  );
};

export default MainCategories;
