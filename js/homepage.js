const parks = [
  {
    "name": "Acadia National Park",
    "photoLocal": "./images/acadia.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Bass-Harbor-Lighthouse-Acadia-national-park.jpg", 
    "photoCred": "Credit: Philippe Gratton/ iStock"
  },
  {
    "name": "Arches National Park",
    "photoLocal": "./images/arches.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Delicate-Arch--Arches-National-Park.jpg", 
    "photoCred": "Credit: mmac72/ iStock"
  },
  {
    "name": "Badlands National Park",
    "photoLocal": "./images/badlands.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Badlands-National-Park-at-Sunrise.jpg", 
    "photoCred": "Credit: LarryKnupp/ iStock"
  },
  {
    "name": "Big Bend National Park",
    "photoLocal": "./images/big_bend.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Sagebrush-in-Bloom-at-the-Chisos-Mountains.jpg", 
    "photoCred": "Credit: jamespharaon/ iStock"
  },
  {
    "name": "Biscayne National Park",
    "photoLocal": "./images/biscayne.jpg",
    "photoURL": "https://blog.assets.thediscoverer.com/2019/02/Beautiful-Biscayne-National-Park.jpg", 
    "photoCred": "Credit: Fotoluminate LLC/ Shutterstock"
  }
];

console.log(parks[0].name);

for (i=0; i<parks.length; i++) {
  const ul = document.getElementById('parkList');
  var newPark = document.createElement('li');
  // newPark.textContent = parks[i].name;
  
  // newPark.


  ul.appendChild(newPark);
  var img = document.createElement('img');
  img.setAttribute('src', parks[i].photoLocal);
  newPark.appendChild(img);
}
console.log(newPark);
