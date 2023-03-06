const contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");

  const name = document.createElement("p");
  name.classList.add("contact-info");
  name.textContent = "Playa del Sol";

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("contact-info");
  phoneNumber.textContent = "123-456-7890";

  const address = document.createElement("p");
  address.classList.add("contact-info");
  address.innerHTML = `1234 Restaurant Avenue, <br>Edmonton, AB, T1T1T1`;

  contactContainer.appendChild(name);
  contactContainer.appendChild(phoneNumber);
  contactContainer.appendChild(address);

  return contactContainer;
};

export default contact;
