import React from "react";

import { Icon } from "@iconify/react";

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
            <div className="account hover--effect--basic horizontal--flex">
              <p>im.vmanoj2002@gmail.com</p>
              <Icon
                icon="material-symbols-light:logout-sharp"
                width="20"
                height="20"
                style={{ color: "black" }}
                className="logout--icon"
              />
            </div>
          </div>
        </div>

        <div className="widgets--container">
          <p className="bold--text widgets--heading">Categories</p>
          <div className="widgets--display--container">
            <div className="widget hover--effect--basic">
              <p>im.vmanoj2002@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
