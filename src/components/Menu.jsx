import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { LaunchList } from "./LaunchList";
import { LaunchDetails } from "./LaunchDetails";
import { Profile } from "./Profile.jsx";
import { LogoutButton } from "./Logout.jsx";
import { Toogle } from "./Toogle.jsx";

export function Menu() {
  const [dark, setDark] = useState(false);

  const handleToogleSwitch = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    setDark(!dark);
  };

  const handleSearchBtn = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("close");
  };

  useEffect(() => {
    const modeText = document.querySelector(".mode-text");
    if (dark) {
      modeText.innerHTML = "Light Mode";
    } else {
      modeText.innerHTML = "Dark Mode";
    }
  }, [dark]);

  return (
    <>
      <nav className="sidebar">
        <header>
          <Profile />
          <Toogle />
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li onClick={handleSearchBtn} className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="search" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <Link className="link-menu" to={`/`}>
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <LogoutButton />
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark Mode</span>
              <div onClick={handleToogleSwitch} className="toogle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="text">DashBoard</div>
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path="launch/:launchId" element={<LaunchDetails />} />
        </Routes>
      </section>
    </>
  );
}
