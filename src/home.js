const content = document.getElementById("content");

const home = () => {
  // banner container
  // banner contains url for image in css
  const bannerContent = document.createElement("div");
  bannerContent.setAttribute("id", "banner");

  // add content to h1 inside banner
  const bannerTextContainer = document.createElement("div");
  bannerTextContainer.setAttribute("id", "banner-text-container");
  const endPeriod = document.createElement("span");
  endPeriod.textContent = ".";
  endPeriod.classList.add("endPeriod");

  const bannerHeader1 = document.createElement("h1");
  bannerHeader1.textContent = `Eat${endPeriod.textContent}`;

  const bannerHeader2 = document.createElement("h1");
  bannerHeader2.classList.add("display-none");
  bannerHeader2.textContent = `Play${endPeriod.textContent}`;

  const bannerHeader3 = document.createElement("h1");
  bannerHeader3.classList.add("display-none");
  bannerHeader3.textContent = `Live${endPeriod.textContent}`;

  const bookNowButton = document.createElement("button");
  bookNowButton.textContent = "Book Now";
  bookNowButton.classList.add("display-none");
  bookNowButton.classList.add("form-button");

  // create time delay fucntion
  const updateBannerText = () => {
    bannerTextContainer.appendChild(bannerHeader1);
    bannerTextContainer.appendChild(bannerHeader2);
    bannerTextContainer.appendChild(bannerHeader3);
    bannerTextContainer.appendChild(bookNowButton);

    setInterval(() => {
      bannerHeader1.classList.add("display-none");
      bannerHeader2.classList.remove("display-none");
      setInterval(() => {
        bannerHeader2.classList.add("display-none");
        bannerHeader3.classList.remove("display-none");
        setInterval(() => {
          bannerHeader3.classList.add("display-none");
          bookNowButton.classList.remove("display-none");
        }, 3000);
      }, 3000);
    }, 3000);
  };
  // create booking form
  const bookForm = document.createElement("form");
  bookForm.classList.add('display-none')
  const createInput = (type, id) => {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    return input;
  };

  const dateInput = createInput("date");

  const guestNumber = createInput("number", "guestNumber");
  guestNumber.setAttribute("placeholder", "Guests Number");

  guestNumber.required;

  const emailInput = createInput("email", "emailInput");
  emailInput.setAttribute("placeholder", "Enter Email Address");
  emailInput.required;

  const submitInput = createInput('submit');
  submitInput.setAttribute('value', 'Book Now')
  submitInput.classList.add("form-button");

  bookForm.appendChild(dateInput);
  bookForm.appendChild(guestNumber);
  bookForm.appendChild(emailInput);
  bookForm.appendChild(submitInput);


  bookNowButton.addEventListener('click', (e) => {
    e.target.remove()
    bookForm.classList.remove('display-none');
  })

  updateBannerText();
  bannerContent.appendChild(bookForm);
  bannerContent.appendChild(bannerTextContainer);
  return bannerContent;
};

export default home;
