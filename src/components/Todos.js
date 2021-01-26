import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  create as createTodo,
  toggleComplete,
  deleteTodo
} from "../store/slices/todos";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [create, showCreate] = useState(false);
  const handleCreate = () => showCreate(!create);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    title === null || title === "" || title === "undefined"
      ? event.preventDefault()
      : dispatch(createTodo({ title, content }));
    setTitle("");
    setContent("");
  };

  const handleFocus = (node, keycode) => {
    window.addEventListener("keyup", key => {
      if (key.key === keycode) {
        document.querySelector(node).focus();
      }
    });
  };

  useEffect(() => {
    handleFocus("#title", "/");
    handleFocus("#content", "=");
  }, []);

  const handleToggle = id => () => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = id => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-full h-screen bg-yellow-400">
      {todos.length !== 0 ? (
        <div className="pt-20">
          <div className="px-5 sm:px-14 md:px-28 lg:px-40">
            {todos.map(todo => (
              <div
                className="flex items-center justify-between px-4 py-1 text-base font-normal border border-t-0 border-l-0 border-r-0 translate-x-44 last:border-b-0 border-trueGray-800 text-trueGray-800"
                key={todo.id}
              >
                <div className="text-lg font-medium capitalize">
                  {todo.title}
                </div>
                <div className="space-x-3">
                  <button
                    type="button"
                    onClick={handleToggle(todo.id)}
                    className="focus:outline-none"
                  >
                    {todo.isComplete ? (
                      <svg
                        className={`w-auto h-5 p-0 overflow-auto transition-all duration-300 ease-in-out transform ${
                          todo.isComplete ? `-translate-y-0` : `translate-y-0`
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`w-auto h-5 p-0 overflow-auto transition-all duration-300 ease-in-out transform ${
                          todo.isComplete ? `-translate-y-0.5` : `translate-y-0`
                        }`}
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
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete(todo.id)}
                    className="focus:outline-none"
                  >
                    <svg
                      className="w-auto h-5 p-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleCreate}
            className={`fixed inline-flex items-center right-5 bottom-5 rounded-full bg-trueGray-900 text-yellow-300 focus:outline-none transform transition-all duration-300 ease-in-out text-sm font-medium ${
              create ? `translate-x-44` : `translate-x-0`
            }`}
          >
            <span className="pl-4 uppercase">create todo</span>
            <svg
              className="w-auto h-10 fill-current"
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
          </button>
        </div>
      ) : (
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
        className={`fixed flex items-center inset-y-0 left-0 w-10/12 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-trueGray-800 md:w-2/3 lg:w-1/2 text-yellow-300 ${
          create ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <div className="w-full px-5 md:px-16">
          <h1 className="text-xl font-bold text-center uppercase">
            Create Todo
          </h1>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="w-full space-y-5"
          >
            <div className="w-full">
              <label htmlFor="title" className="block font-medium capitalize">
                Title :
              </label>
              <input
                type="text"
                name="title"
                className="w-full h-10 px-3 py-1 transition-colors duration-200 border border-yellow-300 rounded-md focus:text-trueGray-900 bg-trueGray-800 focus:outline-none focus:bg-yellow-300"
                autoComplete="off"
                onChange={e => setTitle(e.target.value)}
                value={title}
                id="title"
              />
            </div>
            <div className="">
              <label htmlFor="content" className="block font-medium capitalize">
                Content :
              </label>
              <textarea
                type="text"
                name="content"
                className="w-full h-24 px-3 py-3 transition-colors duration-200 border border-yellow-300 rounded-md focus:text-trueGray-900 bg-trueGray-800 focus:outline-none focus:bg-yellow-300"
                onChange={e => setContent(e.target.value)}
                value={content}
                autoComplete="off"
                id="content"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-1.5 ml-auto font-medium capitalize transition-colors duration-200 border border-yellow-300 rounded-md focus:outline-none hover:bg-yellow-300 hover:text-trueGray-800"
            >
              create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todos;
