import React from "react";

import Sidebar from "../components/sidebar";

import "./Home.css";

function Home() {
  return (
    <>
      <main className="horizontal--flex">
        <Sidebar />
        <div className="main--padding main--preview--container">Home</div>
      </main>
    </>
  );
}

export default Home;
