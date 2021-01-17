import React from "react";
import AllTodos from "../components/allTodos";

const Home = () => {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full px-4 sm:px-8 md:px-20 lg:px-32">
        <AllTodos />
      </main>
    </div>
  );
};

export default Home;
