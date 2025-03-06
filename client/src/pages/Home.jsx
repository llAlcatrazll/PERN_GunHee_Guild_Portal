import React, { useState } from "react";

import "../styles/Home.css";
import Hunter_Guides from "./Hunter_Guides";
import Guild_Catalog from "./Guild_Catalog";
import Add_Items from "./Add_Items";
import useToggle from "../functions/usetoggle";
function Home() {
  const [activePage, setActivePage] = useToggle("add_items");
  const [openNavBar, setNavBar] = useState(false);
  return (
    <>
      <div className="relative">
        <div
          className="bg-black absolute w-full flex flex-col z-9999 text-white opacity-80 align-center"
          onMouseEnter={() => setNavBar(true)}
          onMouseLeave={() => setNavBar(false)}
        >
          <div className="flex flex-row w-full bg-black opacity-80 justify-around">
            <div>Go Gun-Hee Guild</div>
            <div onClick={() => setActivePage("guild_catalog")}>Home</div>
            <div onClick={() => setActivePage("")}>Archive</div>
            <div onClick={() => setActivePage("")}>Guides</div>
            <div>News</div>
            <div>Support</div>
            <div>Admin</div>
          </div>
          {openNavBar ? (
            <div className="flex flex-row w-full bg-black opacity-80 justify-around">
              <div>Go Gun-Hee Guild</div>
              <div className="flex flex-col">
                <div>Guild List</div>
              </div>
              <div className="flex flex-col">
                <div>Guild Leaders</div>
                <div>History</div>
                <div>Artifacts</div>
              </div>

              <div className="flex flex-col">
                <div onClick={() => setActivePage("")}>Jinwoo</div>
                <div onClick={() => setActivePage("")}>Hunters</div>
                <div onClick={() => setActivePage("")}>Army of Shadows</div>
                <div onClick={() => setActivePage("")}>...</div>
              </div>
              <div>News</div>
              <div>Support</div>
              <div className="flex flex-col">
                <div onClick={() => setActivePage("add_items")}>
                  Add Artifacts
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="relative">
          {activePage === "guild_catalog" && <Guild_Catalog />}
          {activePage === "hunter_guides" && <Hunter_Guides />}
          {activePage === "add_items" && <Add_Items />}
        </div>
      </div>
    </>
  );
}

export default Home;
