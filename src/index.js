import home from "./home";

const navBar = () => {
  // create nav ul
  const navBarContainer = document.createElement("ul");
  // nav li home
  const homeNav = document.createElement("li");
  homeNav.textContent = "home";
  homeNav.addEventListener('click', () => {
    content.appendChild(home());
  })
  // nav li menu
  const menuNav = document.createElement("li");
  menuNav.textContent = "menu";
  // nav li contact
  const contactNav = document.createElement("li");
  contactNav.textContent = "contact";

  navBarContainer.appendChild(homeNav);
  navBarContainer.appendChild(menuNav);
  navBarContainer.appendChild(contactNav);
  return navBarContainer
}

const loadPage = () => {
  content.append(navBar());
};

document.body.appendChild(loadPage());
