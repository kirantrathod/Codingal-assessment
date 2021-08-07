import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/codingal-logo.png";
import LogoWithText from "../../assets/logo-with-text.svg";
import * as Routes from "../../constants/Routes";
import { EndClassModal } from "../EndClassModal/EndClassModal";
import { useCountDown } from "use-countdown-hook";

import "./Navbar.css";
function Navbar() {
  const [isCurrentPageTrailLesson, setIsCurrentPageTrailLesson] =
    useState(false);
  const [currentScrren, setCurrentScreen] = useState("");
  const [showModal, setShowModal] = useState(false);
  const SidebarLinks = [
    {
      title: "Trial Lesson [Grade 1-3]",
      path: Routes.TRIAL_LESSON,
      cName: "navlink-item",
    },
    {
      title: "Posts",
      path: Routes.POSTS,
      cName: "navlink-item",
    },
  ];
  let isMenuOpen = false;
  const toggleHamburger = () => {
    let menuBtn = document.querySelector(".menu-btn");
    let navLinks = document.querySelector(".navlinks");
    if (!isMenuOpen) {
      menuBtn.classList.add("open");
      isMenuOpen = true;
      navLinks.style.display = "block";
      navLinks.classList.add("active");
    } else {
      menuBtn.classList.remove("open");
      isMenuOpen = false;
      navLinks.style.display = "none";
      navLinks.classList.remove("active");
    }
  };
  const closeSideBar = (pathName) => {
    toggleHamburger();
    if (pathName === Routes.TRIAL_LESSON) {
      setCurrentScreen("Trail Lesson [Grade 1-3]");
      setIsCurrentPageTrailLesson(true);
      start();
    } else {
      setCurrentScreen("Posts");
      setIsCurrentPageTrailLesson(false);
    }
  };
  const wideLinkActivate = (pathName) => {
    if (pathName === Routes.TRIAL_LESSON) {
      start();
      setIsCurrentPageTrailLesson(true);
    } else {
      setIsCurrentPageTrailLesson(false);
    }
  };
  const openModal = () => {
    pause();
    setShowModal(true);
  };
  useEffect(() => {
    if (!showModal) {
      start();
    }
  });
  // const endClassBtn = () => {
  //   setTime(0);
  // };
  const [time, setTime] = useState(60 * 10000);
  const [{ mm, ss }, { start, pause }] = useCountDown(time, {
    startImmediately: false,
  });

  return (
    <nav className="Navbar">
      <div className="nav-wide">
        <div className="container">
          <img
            className="nav-codingal-logo"
            src={Logo}
            alt="Codingal Logo"
          ></img>
          <ul className="nav-subcontainer">
            {SidebarLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    activeClassName="navlink-item-active"
                    to={item.path}
                    className={item.cName}
                    onClick={() => wideLinkActivate(item.path)}
                  >
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {isCurrentPageTrailLesson ? (
            <div className="nav-left-container">
              <p className="p-countdown-timer nav-left-container-items">
                {mm}:{ss}
              </p>
              <button
                className="btn btn-end-class nav-left-container-items"
                onClick={openModal}
              >
                End Class
              </button>
            </div>
          ) : null}
          {showModal ? (
            <EndClassModal setShowModal={setShowModal}></EndClassModal>
          ) : null}
        </div>
      </div>

      {/* Navbar for Mobile View */}
      <div className="sm-nav">
        <div className="sm-nav-container">
          <div className="sm-nav-logo-div">
            <img
              className="sm-nav-logo"
              src={LogoWithText}
              alt="Codingal Logo with Text"
            ></img>
          </div>
          <div className="sm-nav-menu">
            <div className="menu-btn" onClick={toggleHamburger}>
              <div className="menu-btn-burger"></div>
            </div>
            <div className="navlinks">
              <ul className="navlink-list">
                {SidebarLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        activeClassName="navlink-item-active"
                        to={item.path}
                        className={item.cName}
                        onClick={() => closeSideBar(item.path)}
                      >
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="sm-headline-div">
          <h4 className="sm-current-screen-name">{currentScrren}</h4>
          {isCurrentPageTrailLesson ? (
            <div className="sm-nav-left-container">
              <p className="sm-p-countdown-timer sm-nav-left-container-items">
                {mm}:{ss}
              </p>
              <button
                className="sm-btn-end-class sm-nav-left-container-items"
                onClick={openModal}
              >
                End Class
              </button>
            </div>
          ) : null}
          {showModal ? (
            <EndClassModal setShowModal={setShowModal}></EndClassModal>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
