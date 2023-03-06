const content = document.getElementById("content");

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

  const bannerHeader2 = document.createElement("h3");
  bannerHeader2.classList.add("display-none");
  bannerHeader2.innerHTML = `Play<span class="endPeriod">${endPeriod.textContent}</span>`;

  const bannerHeader3 = document.createElement("h3");
  bannerHeader3.classList.add("display-none");
  bannerHeader3.innerHTML = `Live<span class="endPeriod">${endPeriod.textContent}</span>`;

  // create time delay fucntion
  const updateBannerText = () => {
    bannerTextContainer.appendChild(bannerHeader1);
    bannerTextContainer.appendChild(bannerHeader2);
    bannerTextContainer.appendChild(bannerHeader3);
    setTimeout(() => {
      bannerHeader1.classList.add("display-none");
      bannerHeader2.classList.remove("display-none");
    }, 2000);

    setTimeout(() => {
      bannerHeader2.classList.add("display-none");
      bannerHeader3.classList.remove("display-none");
    }, 4000);

    setTimeout(() => {
      bannerHeader3.classList.add("display-none");
    }, 6000);
  };

  const displayTextBanner = () => {
    const mainBannerText = document.createElement("h1");
    mainBannerText.setAttribute("id", "mainText");
    mainBannerText.innerHTML = `Welcome to Playa del Sol<span class="endPeriod">${endPeriod.textContent}</span>`;
      bannerContent.appendChild(mainBannerText);
  };

  updateBannerText();
  setTimeout(() => {
    displayTextBanner();
  }, 6000);
  bannerContent.appendChild(bannerTextContainer);
  return bannerContent;
};

export default home;
