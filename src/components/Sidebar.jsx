import React from "react";

import "./Sidebar.css";
import "../index.css";

function Sidebar() {
  return (
    <>
      <nav className="vertical--flex main--padding">
        <div className="title--container horizontal--flex center">
          <p className="bold--text app--title">mOrgAI</p>
        </div>

        <div className="accounts--container">
          <p className="bold--text accounts--heading">Accounts</p>
          <div className="accounts--display--container">
            <div className="account hover--effect--basic">
              im.vmanoj2002@gmail.com
            </div>
          </div>
        </div>

        <div className="widgets--container">
          <p className="bold--text widgets--heading">Categories</p>
          <div className="widgets--display--container">
            <div className="widget hover--effect--basic">
              im.vmanoj2002@gmail.com
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
