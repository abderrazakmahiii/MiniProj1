import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

export const menu = [
  { name: "Home", link: "#home", icon: "ri-home-2-fill" },
  { name: "About", link: "#about", icon: "ri-code-box-fill" },
  { name: "Entrainment", link: "#entrainment", icon: "CgGym" },
];

export var navigateToggle = false;

export const toggleNavigate = (e) => {
  if (navigateToggle) {
    document.querySelector("#side-bar").style.marginLeft = "100vw";
    document.querySelector("#side-bar").style.transition = ".5s";
    navigateToggle = false;
  } else {
    document.querySelector("#side-bar").style.marginLeft = "0";
    document.querySelector("#side-bar").style.transition = ".5s";
    navigateToggle = true;
  }
};

export default function Navbar() {
  return (
    <div id="navbar">
      <a id="logo" href={menu[0].link}>
        Abderrazak Mahi
      </a>
      <ul id="nav-menu">
        {menu.map((list, index) => (
          <li key={index}>
            <a href={list.link}>{list.name}</a>
          </li>
        ))}
        <li></li>
      </ul>
      <RiMenu4Fill id="show-side-menu" onClick={toggleNavigate} />
      <button id="contactme">
        <a href="mailto:abderrazakmahiii@gmail.com">Let's chat</a>
      </button>
    </div>
  );
}
