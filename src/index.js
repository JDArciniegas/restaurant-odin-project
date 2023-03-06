import home from "./home";
import menu from "./menu";
import contact from "./contact";

const navBar = () => {
  // create nav ul
  const navBarContainer = document.createElement("ul");
  const navItemContainer = document.createElement("div");
  navItemContainer.setAttribute('id', 'nav-container');
  navBarContainer.appendChild(navItemContainer);

  // nav li home
  const homeNav = document.createElement("li");
  homeNav.classList.add('nav-item');
  homeNav.textContent = "home";
  homeNav.addEventListener("click", () => {
    content.appendChild(home());
  });
  // nav li menu
  const menuNav = document.createElement("li");
  menuNav.classList.add('nav-item');
  menuNav.textContent = "menu";
  menuNav.addEventListener("click", () => {
    content.appendChild(menu());
  });
  // nav li contact
  const contactNav = document.createElement("li");
  contactNav.classList.add('nav-item');
  contactNav.textContent = "contact";
  contactNav.addEventListener("click", () => {
    content.appendChild(contact());
  });

  navItemContainer.appendChild(homeNav);
  navItemContainer.appendChild(menuNav);
  navItemContainer.appendChild(contactNav);
  navBarContainer.appendChild(navItemContainer);
  return navBarContainer;
};

const loadPage = () => {
  const content = document.getElementById("content");
  content.append(navBar());
};

document.body.appendChild(loadPage());
