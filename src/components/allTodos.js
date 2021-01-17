import { useState } from "react";
import { useSelector } from "react-redux";
import { Todos } from "../store/slices/allTodos";
import CreateTodo from "./createTodo";

const allTodos = () => {
  const selector = useSelector(Todos);
  const [create, showCreate] = useState(false);

  return (
    <div className="w-full h-full">
      {create ? <CreateTodo create={create} showCreate={showCreate} /> : ``}
      <div className="w-full h-full">
        {selector.length === 0 ? (
          <div className="relative center" style={{ zIndex: create ? -1 : 0 }}>
            <div className="relative z-0 space-y-3 text-center">
              <div className="relative z-0 inline-block w-auto">
                <span className="absolute z-10 w-3 h-3 border-0 rounded-full bg-trueGray-900 right-2 animate-ping"></span>
                <svg
                  className="relative w-auto h-12 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              <div className="text-lg font-medum">
                No available todos, create Todos
              </div>
              <button
                type="button"
                className="px-3 py-2 mt-2 space-x-1 text-base font-medium uppercase transition-colors duration-200 transform rounded shadow-sm group-hover:-translate-y-1 hover:bg-trueGray-600 sm:text-lg bg-trueGray-700 text-trueGray-100 focus:outline-none"
                onClick={() => showCreate(!create)}
              >
                <svg
                  className="inline w-auto h-5 fill-current sm:h-8"
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
                <span className="inline">Create Todo</span>
              </button>
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default allTodos;
