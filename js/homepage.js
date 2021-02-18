// e.preventDefault
const parks = [
  {
    "name": "Acadia National Park",
    "photoLocal": "./images/acadia.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Bass-Harbor-Lighthouse-Acadia-national-park.jpg", 
    "photoCred": "Credit: Philippe Gratton/ iStock",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla imperdiet leo non eleifend. Aliquam sagittis leo odio, sed ultrices sem consectetur vitae. Maecenas sed tortor auctor, vulputate massa ac, pretium libero. Mauris imperdiet lacinia sodales. Ut vitae feugiat risus."
  },
  {
    "name": "Arches National Park",
    "photoLocal": "./images/arches.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Delicate-Arch--Arches-National-Park.jpg", 
    "photoCred": "Credit: mmac72/ iStock",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla imperdiet leo non eleifend. Aliquam sagittis leo odio, sed ultrices sem consectetur vitae. Maecenas sed tortor auctor, vulputate massa ac, pretium libero. Mauris imperdiet lacinia sodales. Ut vitae feugiat risus."
  },
  {
    "name": "Badlands National Park",
    "photoLocal": "./images/badlands.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Badlands-National-Park-at-Sunrise.jpg", 
    "photoCred": "Credit: LarryKnupp/ iStock",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla imperdiet leo non eleifend. Aliquam sagittis leo odio, sed ultrices sem consectetur vitae. Maecenas sed tortor auctor, vulputate massa ac, pretium libero. Mauris imperdiet lacinia sodales. Ut vitae feugiat risus."
  },
  {
    "name": "Big Bend National Park",
    "photoLocal": "./images/big_bend.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Sagebrush-in-Bloom-at-the-Chisos-Mountains.jpg", 
    "photoCred": "Credit: jamespharaon/ iStock",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla imperdiet leo non eleifend. Aliquam sagittis leo odio, sed ultrices sem consectetur vitae. Maecenas sed tortor auctor, vulputate massa ac, pretium libero. Mauris imperdiet lacinia sodales. Ut vitae feugiat risus."
  },
  {
    "name": "Biscayne National Park",
    "photoLocal": "./images/biscayne.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Beautiful-Biscayne-National-Park.jpg", 
    "photoCred": "Credit: Fotoluminate LLC/ Shutterstock",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla imperdiet leo non eleifend. Aliquam sagittis leo odio, sed ultrices sem consectetur vitae. Maecenas sed tortor auctor, vulputate massa ac, pretium libero. Mauris imperdiet lacinia sodales. Ut vitae feugiat risus."
  }
];

console.log(window.location);

// Adding Parks to user's Been list
var beenArray = [];
const addToBeen = (park) => {
  console.log("In the addToBeen")
  beenArray.push(park);
  beenArray.forEach((v, i, a)=> {

    // var beenList = document.getElementById('beenList');
    // console.log(beenList);
  
    // var beenPark = document.createElement('li');
    // beenPark.setAttribute('class', 'parkLi');
    // beenList.appendChild(beenPark);
  
    // var beenDiv = document.createElement('div');
    // beenDiv.setAttribute('class', 'thumbnail');
    // beenPark.appendChild(beenDiv);
  
    // var beenImg = document.createElement('img');
    // beenImg.setAttribute('src', parks[i].photoLocal);
    // beenImg.setAttribute('alt', parks[i].name);
    // beenDiv.appendChild(beenImg);
  
    // var h2 = document.createElement('h2');
    // h2.setAttribute('class', 'parkTitle');
    // h2.textContent = parks[i].name;
    // beenDiv.appendChild(h2);
  
    // var beenP = document.createElement('p');
    // beenP.setAttribute('class', 'parkSummary');
    // beenP.textContent = parks[i].summary;
    // beenDiv.appendChild(beenP);
  


    // var addBucket = document.createElement('a');
    // addBucket.textContent = "+ Bucket List";
    // addBucket.setAttribute('class', "button1 button2");
    // addBucket.setAttribute('onclick', addToBucket());
    // beenDiv.appendChild(addBucket);
    
    // var addBeen = document.createElement('a');
    // addBeen.textContent = "+ Been Here";
    // addBeen.setAttribute('class', "addBeen button1 button2");
    // addBeen.setAttribute('onclick', "addToBeen()");
    // beenDiv.appendChild(addBeen);
  })
  
}

// Populating the main page with photos and summaries of all the parks
for (i=0; i<parks.length; i++) {
  const ul = document.getElementById('parkList');

  var newPark = document.createElement('li');
  newPark.setAttribute('class', 'parkLi');
  ul.appendChild(newPark);

  var div = document.createElement('div');
  div.setAttribute('class', 'thumbnail');
  newPark.appendChild(div);

  var img = document.createElement('img');
  img.setAttribute('src', parks[i].photoLocal);
  img.setAttribute('alt', parks[i].name);
  div.appendChild(img);

  var h2 = document.createElement('h2');
  h2.setAttribute('class', 'parkTitle');
  h2.textContent = parks[i].name;
  div.appendChild(h2);

  var p = document.createElement('p');
  p.setAttribute('class', 'parkSummary');
  p.textContent = parks[i].summary;
  div.appendChild(p);

  // var addBucket = document.createElement('a');
  // addBucket.textContent = "+ Bucket List";
  // addBucket.setAttribute('class', 'button1 button2');
  // // addBucket.setAttribute('onclick', addToBucket());
  // div.appendChild(addBucket);

  // var addBeen = document.createElement('a');
  // addBeen.textContent = "+ Been Here";
  // addBeen.setAttribute('class', "addBeen button1 button2");
  // // addBeen.setAttribute('onclick', 'addToBeen()');
  // div.appendChild(addBeen);
}


var addBeenBtns = []
addBeenBtns = document.getElementsByClassName("addBeen");
for (i=0; i<addBeenBtns.length; i++) {
  addBeenBtns[i].addEventListener('click', () => {
    console.log(parks[i]);
    addToBeen(parks[i]);
  });
}
console.log(addBeenBtns)


// Adding Parks to user's Bucket list
// const addToBucket = () => {

// }
