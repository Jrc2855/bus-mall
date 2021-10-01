'use strict'

// Global variables go here
Product.allImages = [];
var totalClicks = 0;
var gallery = document.getElementById('gallery')


//------------------Constructor Function----------------------// Shortcut for making Objects
function Product(name, url) {
  this.name = name,
  this.clicks = 0;
  this.timesShown = 0;
  this.url = `Assets/${url}`;
  Product.allImages.push(this);
};

//-----------Random Product Generator----------// Uses Fisher Yates Shuffle algorithm to swap image indexes.
// Learned this from https://bost.ocks.org/mike/shuffle/
function renderProduct() {
  var x = Product.allImages.length;
  var y = 0;
  var z;
  while (x--) {
    y = Math.floor(Math.random() * (x + 1));
    z = Product.allImages[x];
    Product.allImages[x] = Product.allImages[y];
    Product.allImages[y] = z;
  }

  let leftImage = Product.allImages[0];
  let centerImage = Product.allImages[1];
  let rightImage = Product.allImages[2];
  
  gallery.innerHTML = '';
  leftImage.imageDisplay();
  centerImage.imageDisplay();
  rightImage.imageDisplay();
}

//----------Product Image Display-------------// Creates HTML Elements and appends (connects) to Gallery
Product.prototype.imageDisplay = function() {
  let productList = document.createElement('li');
  let productImage = document.createElement('img');

  productImage.src = this.url;
  productImage.id = this.name;

  productList.appendChild(productImage);
  gallery.appendChild(productList);

  this.timesShown++;
};

//-------------Event Listener----------------// Prepares Gallery to listen for clicks
gallery.addEventListener('click', handleClick);


//-------------Event Handler-----------------// During Click Event increments total clicks & product clicks
function handleClick(event) {
  event.preventDefault();
  console.log(totalClicks++, event.target);

  for (let i = 0; i < Product.allImages.length; i++) {
    if (Product.allImages[i].url === event.target.getAttribute('src')) {
      Product.allImages[i].clicks++;
      console.log(Product.allImages[i]);
    }
  }
  renderProduct();

  if(totalClicks === 25){
    gallery.removeEventListener('click', handleClick);
    renderResults();
    returnChart();
  }
}

//---------------------Results-------------------//
function renderResults() {
  let resultsEl = document.getElementById("results");

  for(let i = 0; i < Product.allImages.length; i++) {
    let results = document.createElement('li');
    results.innerHTML = Product.allImages[i].name + ' had ' + Product.allImages[i].clicks + ' votes and was shown ' + Product.allImages[i].timesShown + ' times.'
    resultsEl.appendChild(results);
  }
}

//---------------------Chart--------------------// 
function returnChart() {
  let chartEl = document.getElementById("results-chart");
  chartEl.innerHTML = '';

// This variable productNames loops through the object names property to be able to supply it as a dataset.
  let productNames = [];
  for (let i = 0; i < Product.allImages.length; i++) {
    productNames.push(Product.allImages[i].name);
  }
// This variable productClicks loops through the object clicks property to be able to supply it as a dataset.
  let productClicks = [];
  for (let i = 0; i < Product.allImages.length; i++){
    productClicks.push(Product.allImages[i].clicks);
  }
// This variable productAppearances loops through the object clicks property to be able to supply it as a dataset. 
  let productAppearances = [];
  for (let i = 0; i < Product.allImages.length; i++) {
  productAppearances.push(Product.allImages[i].timesShown);
  }
  
  let ctx = chartEl.getContext('2d');
  for (let i = 0; i < Product.allImages.length; i++) {
  }

  let resultsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets:[{
        label: 'Tallies',
        data: productClicks,
        backgroundColor: 'red',
      }, {
        label: 'Appearances',
        data: productAppearances,
        backgroundColor: 'blue',
      }],
    },
    options: {
      scales:{
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


//----------------Products---------------------//
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

console.log(Product.allImages);

renderProduct();


