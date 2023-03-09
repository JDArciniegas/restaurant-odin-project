import home from "./home";
import menu from "./menu";
import contact from "./contact";

const mainContent = document.createElement("main");
mainContent.setAttribute("id", "mainContent");

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll(".nav-item");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
};

const navBar = () => {
  // create nav ul
  const navBarContainer = document.createElement("ul");
  const navItemContainer = document.createElement("div");
  navItemContainer.setAttribute("id", "nav-container");
  navBarContainer.appendChild(navItemContainer);

  // nav li home
  const homeNav = document.createElement("li");
  homeNav.classList.add("nav-item");
  homeNav.textContent = "home";
  homeNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeNav);
    mainContent.textContent = "";
    mainContent.appendChild(home());
  });
  // nav li menu
  const menuNav = document.createElement("li");
  menuNav.classList.add("nav-item");
  menuNav.textContent = "menu";
  menuNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuNav);
    mainContent.textContent = "";
    mainContent.appendChild(menu());
  });
  // nav li contact
  const contactNav = document.createElement("li");
  contactNav.classList.add("nav-item");
  contactNav.textContent = "contact";
  contactNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactNav);
    mainContent.textContent = "";
    mainContent.appendChild(contact());
  });

  navItemContainer.appendChild(homeNav);
  navItemContainer.appendChild(menuNav);
  navItemContainer.appendChild(contactNav);
  navBarContainer.appendChild(navItemContainer);
  mainContent.appendChild(home());

  return navBarContainer;
};

const loadPage = () => {
  home();
  const content = document.getElementById("content");
  content.appendChild(navBar());
  content.appendChild(mainContent);
};

document.body.appendChild(loadPage());
