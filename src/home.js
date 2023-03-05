const content = document.getElementById("content");

const home = () => {
  // banner container
  // banner contains url for image in css
  const bannerContent = document.createElement("div");
  bannerContent.setAttribute("id", "banner");

  // add content to h1 inside banner
  const bannerTextContainer = document.createElement("div");

  const bannerHeader1 = document.createElement("h1");
  bannerHeader1.textContent = "Eat";

  const bannerHeader2 = document.createElement("h1");
  bannerHeader2.classList.add("delay-display");
  bannerHeader2.textContent = "Play";

  const bannerHeader3 = document.createElement("h1");
  bannerHeader3.classList.add("delay-display");
  bannerHeader3.textContent = "Live";

  const updateBannerText = () => {
    bannerTextContainer.appendChild(bannerHeader1);
    bannerTextContainer.appendChild(bannerHeader2);
    bannerTextContainer.appendChild(bannerHeader3);

    setInterval(() => {
      bannerHeader1.classList.add("delay-display");
      bannerHeader2.classList.remove("delay-display");
      setInterval(() => {
        bannerHeader2.classList.add("delay-display");
        bannerHeader3.classList.remove("delay-display");
        setInterval(() => {
          bannerHeader1.classList.remove("delay-display");
          bannerHeader2.classList.remove("delay-display");
        }, 3000);
      }, 3000);
    }, 3000);
  };

  updateBannerText();
  bannerContent.appendChild(bannerTextContainer);
  return bannerContent;
};

export default home;
