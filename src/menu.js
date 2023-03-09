const menuItems = {
  dish1: {
    name: "steak",
    price: "$47.99",
    imageUrl: "dist/images/steak.jpg",
  },
  dish2: {
    name: "ramen",
    price: "18.99",
    imageUrl: "dist/images/ramen.jpg",
  },
  dish3: {
    name: "nachos",
    price: "21.99",
    imageUrl: "dist/images/nachos.jpg",
  },
  dish4: {
    name: "cheesecake",
    price: "14.99",
    imageUrl: "dist/images/cheesecake.jpg",
  },
  dish5: {
    name: "salmon salad",
    price: "18.99",
    imageUrl: "dist/images/salmon-salad.jpg",
  },
  dish6: {
    name: "burger",
    price: "28.99",
    imageUrl: "dist/images/burger.jpg",
  },
};

const createDish = (dishName, dishPrice, dishImage) => {
  let card = document.createElement("div");
  card.classList.add("card");
  // create card
  card.style.background = `url(${dishImage}) no-repeat center`;
  // card title
  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = dishName;
  // card price
  let cardPrice = document.createElement("h4");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = dishPrice;

  let cardText = document.createElement("div");
  cardText.classList.add("card-text");

  cardText.appendChild(cardTitle);
  cardText.appendChild(cardPrice);
  card.appendChild(cardText);

  return card;
};

const menu = () => {
  // create container
  const menuContainer = document.createElement("div");
  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Our Menu"

  const cardsContainer = document.createElement("div");
  menuContainer.appendChild(menuHeader);
  cardsContainer.setAttribute("id", "cards-container");

  menuContainer.setAttribute("id", "menu-container");

  Object.values(menuItems).forEach((dish) => {
    cardsContainer.appendChild(
      createDish(dish.name, dish.price, dish.imageUrl)
    );
  })
  menuContainer.appendChild(cardsContainer);
  return menuContainer;
};

export default menu;
