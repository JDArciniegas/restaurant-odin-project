

const createDish = (dishName, dishPrice, dishImage) => {
  // create card
  let card = document.createElement("div");
  card.classList.add("card");
  // card title
  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = dishName;
  // card price
  let cardPrice = document.createElement("h4");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = dishPrice;

  let cardImage= document.createElement('img');
  cardImage.setAttribute("src", dishImage );
  cardImage.classList.add("card-image");

  let cardText = document.createElement('div');
  cardText.classList.add('card-text');;

  cardText.appendChild(cardTitle);
  cardText.appendChild(cardPrice);
  card.appendChild(cardImage);
  card.appendChild(cardText);

  return card;
}

const menu = () => {
  // create container
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);
menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);
menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);
menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);
menuContainer.appendChild(
  createDish("sheperd's pie", "$25", "../src/ShepherdsPie.jpeg")
);
  return menuContainer;
}

export default menu;
