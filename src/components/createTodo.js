import { useState } from "react";

const createTodo = ({ create, showCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="z-10 flex items-center justify-center w-full h-screen bg-trueGray-700 center">
      <button
        type="button"
        className="absolute p-2 border-0 border-white hover:bg-trueGray-600 focus:outline-none right-5 top-16"
        onClick={() => showCreate(!create)}
      >
        <svg
          className="w-auto h-5 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <form
        action="#"
        onSubmit={handleSubmit}
        method="post"
        className="flex items-center justify-center w-full px-4 mx-4 text-white shadow h-1/2 sm:mx-24 md:px-12 lg:px-20"
      >
        <div className="">
          <div className="">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
              id="title"
            />
          </div>
          <div className="">
            <label htmlFor="content">content</label>
            <input
              type="text"
              name="content"
              onChange={e => setContent(e.target.value)}
              value={content}
              id="content"
            />
          </div>
          <button
            type="submit"
            className="px-2 py-1 font-medium lowercase border border-current"
          >
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default createTodo;
