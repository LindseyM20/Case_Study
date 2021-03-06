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
};
