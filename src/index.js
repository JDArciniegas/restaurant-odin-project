import home from "./home";
import menu from "./menu";
import contact from "./contact";

const navBar = () => {
  // create nav ul
  const navBarContainer = document.createElement("ul");
  // nav li home
  const homeNav = document.createElement("li");
  homeNav.textContent = "home";
  homeNav.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home());
  });
  // nav li menu
  const menuNav = document.createElement("li");
  menuNav.textContent = "menu";
  menuNav.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu());
  });
  // nav li contact
  const contactNav = document.createElement("li");
  contactNav.textContent = "contact";
  contactNav.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contact());
  });

  navBarContainer.appendChild(homeNav);
  navBarContainer.appendChild(menuNav);
  navBarContainer.appendChild(contactNav);
  return navBarContainer;
};

const loadPage = () => {
  const content = document.getElementById("content");
  content.append(navBar());
};

document.body.appendChild(loadPage());
