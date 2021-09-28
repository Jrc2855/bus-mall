'use strict'

// Global variables go here
let allImages = [];
let totalClick = 0;
let Gallery = document.getElementById('gallery')


// Constructor Function goes here

function Product(name, url) {
  this.name = name,
  this.clicks = 0;
  this.timesShown = 0;
  this.url = `Assets/images/${url}`;
  allImages.push(this);
}

let leftImageEl = document.getElementById('left-image');
let centerImageEl = document.getElementById('center-image');
let rightImageEl = document.getElementById('right-image');

// Learned this from https://bost.ocks.org/mike/shuffle/
// Randomizes Images
function randomizeProducts() {
  var x = allImages.length, y, z;
  while(x) {
    y = Math.floor(Math.random() * m--);
    z = allImages[x];
    allImages[x] = allImages[y];
    allImages[y] = z;
  }
  return randomizeProducts();
}

// Renders Images
Product.prototype.renderImage = function () {
  let productList = document.createElement('li');
  let productImage = document.createElement('img')
  productList.src = this.url;
  productList.appendChild(productImage);
  Gallery.appendChild(productList);

  this.clicks++;
}

// Click Handler
function handleClick(event) {
  event.preventDefault();
  let imageElement = event.target;
  console.log(imageElement.name);
  for (let i = 0; i < allImages.length; i++) {
    if (imageElement.name ===allImages[i].name) {
      allImages[i].click++;
      console.log(allImages[i]);
    }
  }
}

leftImageEl.addEventListener('click', handleClick);
centerImageEl.addEventListener('click', handleClick);
rightImageEl.addEventListener('click', handleClick);





















// Products
new Product('Luggage', 'bag.jpg');
new Product('Banana Slicer', 'banana.jpg');
new Product('Toilet Paper', 'bathroom.jpg');
new Product('Tropical Rainboots', 'boots.jpg');
new Product('Instant Breakfast', 'breakfast.jpg');
new Product('Italian Gum', 'bubblegum.jpg');
new Product('MIL Chair', 'chair.jpg');
new Product('Godzilla Rival', 'cthulhu.jpg');
new Product('Good Muzzle', 'dog-duck.jpg');
new Product('Viking Breakfast', 'dragon.jpg');
new Product('College Utensils', 'pen.jpg');
new Product('Dusty Boots', 'pet-sweep.jpg');
new Product('Italian Offense', 'scissors.jpg');
new Product('Jaws Napsack', 'shark.jpg');
new Product('Child Labor', 'sweep.png');
new Product('Stink Simulator', 'tauntaun.jpg');
new Product('Infinite Water', 'water-can.jpg');
new Product('Soberiety Enforcer', 'wine-glass.jpg');

console.log(allImages);

// function renderImage() {
//   let leftImageIndex = Math.floor(Math.random() * allImages.length);  
//   let centerImageIndex = Math.floor(Math.random() * allImages.length);
//   let rightImageIndex = Math.floor(Math.random() * allImages.length);

//   //while (leftImageIndex === rightImageIndex) {
//  //   rightImageIndex = Math.floor(Math.random() * allImages.length);  
//  // }

//   let left = allImages[leftImageIndex];
//   let center = allImages[centerImageIndex];
//   let right = allImages[rightImageIndex];

//   leftImageEl.src = left.url;
//   leftImageEl.name = left.name;
//   left.timesShown ++;
//   centerImageEl.src = center.url;
//   centerImageEl.name = center.name;
//   center.timesShown ++;
//   rightImageEl.src = right.url;
//   rightImageEl.name = right.name;
//   right.timesShown ++;
// }

// renderImage();

