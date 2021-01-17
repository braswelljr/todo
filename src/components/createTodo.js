import React from "react";

const createTodo = ({ create, showCreate }) => {
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
        method="post"
        className="px-4 bg-white shadow md:px-12 lg:px-20 top-14"
      >
        <div className="">
          <label htmlFor="title"></label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="">
          <label htmlFor="content"></label>
          <input type="text" name="content" id="content" />
        </div>
      </form>
    </div>
  );
};

export default createTodo;
