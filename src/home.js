const home = () => {
  // banner container
  // banner contains url for image in css
  const bannerContent = document.createElement("div");
  bannerContent.setAttribute("id", "banner");

  // add content to h1 inside banner
  const bannerTextContainer = document.createElement("div");
  bannerTextContainer.setAttribute("id", "banner-text-container");
  let endPeriod = document.createElement("span");
  endPeriod.textContent = ".";

  const bannerHeader1 = document.createElement("h3");
  bannerHeader1.innerHTML = `Eat<span class="endPeriod">${endPeriod.textContent}</span>`;
  bannerTextContainer.appendChild(bannerHeader1);

  const bannerHeader2 = document.createElement("h3");
  bannerHeader2.classList.add("opacity-none");
  bannerTextContainer.appendChild(bannerHeader2);
  bannerHeader2.innerHTML = `Play<span class="endPeriod">${endPeriod.textContent}</span>`;

  const bannerHeader3 = document.createElement("h3");
  bannerTextContainer.appendChild(bannerHeader3);
  bannerHeader3.classList.add("opacity-none");
  bannerHeader3.innerHTML = `Live<span class="endPeriod">${endPeriod.textContent}</span>`;

  // create time delay fucntion
  const updateBannerText = () => {
    setTimeout(() => {
      bannerHeader1.classList.add("opacity-none");
      bannerHeader2.classList.remove("opacity-none");
    }, 2000);

    setTimeout(() => {
      bannerHeader2.classList.add("opacity-none");
      bannerHeader3.classList.remove("opacity-none");
    }, 4000);

    setTimeout(() => {
      bannerHeader3.classList.add("opacity-none");
    }, 6000);
  };

  const displayTextBanner = () => {
    const mainBannerText = document.createElement("h1");
    mainBannerText.setAttribute("id", "mainText");
    mainBannerText.innerHTML = `Welcome to Playa del Sol<span class="endPeriod">${endPeriod.textContent}</span>`;
    bannerContent.appendChild(mainBannerText);
  };

  const mainContent = document.getElementById("mainContent");

  updateBannerText();
  setTimeout(() => {
    displayTextBanner();
  }, 6000);
  bannerContent.appendChild(bannerTextContainer);
  return bannerContent;
};

export default home;
