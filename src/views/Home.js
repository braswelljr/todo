import React from "react";

const Home = ({ appname }) => {
  return (
    <div className="bg-primary">
      <header className="container px-5 py-2">
        <h3 className="text-white text-uppercase">{appname}</h3>
      </header>
      <main className=""></main>
    </div>
  );
};

export default Home;
