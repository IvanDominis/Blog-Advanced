import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login first!</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="font-semibold text-cl">
        Start to share your story with our community!
      </h1>
      <form className="flex flex-col flex-1 gap-6 mb-6">
        <button className="p-2 text-sm text-gray-500 bg-white shadow-md w-max rounded-xl">
          Add an image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Write your awesome story"
        ></input>
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 bg-white shadow-md rounded-xl"
          >
            <option value="general">General</option>
            <option value="Web Design">Web Design</option>
            <option value="Development">Development</option>
            <option value="Databases">Databases</option>
            <option value="Search Engines">Search Engines</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          className="p-4 bg-white shadow-md rounded-xl"
          placeholder="A Short Description"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 bg-white shadow-md rounded-xl"
          value={value}
          onChange={setValue}
        />
        <button className="p-2 mt-4 font-medium text-white bg-blue-800 rounded-xl w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
