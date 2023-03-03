const content = document.getElementById("content");

const home = () => {
  // banner container
  // banner contains url for image in css
  const bannerContent = document.createElement("div");
  bannerContent.setAttribute("id", "banner");

  const bannerHeader = document.createElement('h1');
  const bannerHeaderText = () => {
    let headerText = ['eat', 'play', 'live'];
    headerText.forEach((word, index) => {
      word.toUpperCase();
      console.log(word);
      bannerHeader.textContent = word;
    });
  }
  setInterval(bannerHeaderText(), 500000);

  bannerHeaderText
  bannerContent.appendChild(bannerHeader);

  return bannerContent
}

export default home;
