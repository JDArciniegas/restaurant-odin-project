import Restaurant from './restaurant.jpg'

const loadPage = () => {
const content = document.getElementById('content')

const myRestaurant = new Image();
myRestaurant.src = Restaurant
myRestaurant.setAttribute('id','banner');


  content.appendChild(myRestaurant);
  return content
}

document.body.appendChild(loadPage());
