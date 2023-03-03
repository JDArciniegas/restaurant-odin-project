import Restaurant from './restaurant.jpg'

const loadPage = () => {
const content = document.getElementById('content')

const bannerContent = document.createElement('div');

const myRestaurant = new Image();
myRestaurant.src = Restaurant
myRestaurant.setAttribute('id','banner');

bannerContent.appendChild(myRestaurant)

  content.appendChild(bannerContent);
  return content
}

document.body.appendChild(loadPage());
