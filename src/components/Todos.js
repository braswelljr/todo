import { useState } from "react";
import { useSelector } from "react-redux";
import { todos } from "../store/slices/todos";

const Todos = () => {
  const selector = useSelector(todos);
  const [create, showCreate] = useState(false);
  const handleCreate = () => showCreate(!create);

  return (
    <div className="w-full h-screen bg-yellow-400">
      {selector.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen px-5 sm:px-8 md:px-24 lg:px-36">
          <div className="px-8 space-y-6">
            <div className="relative w-12 mx-auto">
              <span className="absolute right-0 inline-block w-5 h-5 bg-current rounded-full animate-ping"></span>
              <svg
                className="w-auto h-12 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div className="text-lg text-center">
              Oops {`\u{1F625}`} there are no available todos, please create new
              todos.
            </div>
            <button
              type="button"
              onClick={handleCreate}
              className="flex px-3 py-1 mx-auto text-base font-medium text-yellow-400 uppercase transition-transform duration-150 ease-in transform rounded bg-trueGray-800 focus:outline-none hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg
                className="w-auto h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="">create todo</span>
            </button>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
      <button
        type="button"
        tabIndex={-1}
        onClick={handleCreate}
        className={`fixed ${
          create ? `` : `hidden`
        } inset-0 w-full h-full opacity-25 bg-trueGray-800 focus:outline-none`}
      ></button>
      <div
        className={`fixed inset-y-0 left-0 w-10/12 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-trueGray-800 md:w-2/3 lg:w-1/2 ${
          create ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        hello
      </div>
    </div>
  );
};

export default Todos;
