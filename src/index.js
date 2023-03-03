import home from './home'

const loadPage = () => {
  content.appendChild(home())
  return content;
};

document.body.appendChild(loadPage());
