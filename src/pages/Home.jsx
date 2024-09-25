import React from "react";

import Sidebar from "../components/Sidebar";
import MailPreview from "../components/MailPreview";

import "./Home.css";

function Home() {
  return (
    <>
      <main className="horizontal--flex">
        <Sidebar />
        <MailPreview />
      </main>
    </>
  );
}

export default Home;
