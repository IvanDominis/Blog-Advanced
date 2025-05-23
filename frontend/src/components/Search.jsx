const Search = () => {
  return (
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
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        className="bg-transparent border-none focus:outline-none"
        placeholder="search a post ..."
      ></input>
    </div>
  );
};

export default Search;
