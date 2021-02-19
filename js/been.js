// Get stored cities from localStorage and parse the JSON string to an array
var storedBeen = JSON.parse(localStorage.getItem("beenList")) || [];
var beenParks = [];
console.log(storedBeen);

arrayify();

function arrayify() {
  // If parks were fetched from localStorage, assign them to beenList array
  if (storedBeen !== null) {
    beenParks = storedBeen;
  }
  populateBeenPage();
}

function populateBeenPage() {
  console.log("In the populateBeenPage function");
  console.log(beenParks);
  // beenParks.push(park);
  beenParks.forEach((park) => {

    var beenList = document.getElementById('beenList');
    // console.log(beenList);

    var beenPark = document.createElement('li');
    beenPark.setAttribute('class', 'parkLi');
    beenList.appendChild(beenPark);

    var beenDiv = document.createElement('div');
    beenDiv.setAttribute('class', 'thumbnail');
    beenPark.appendChild(beenDiv);

    var beenImg = document.createElement('img');
    beenImg.setAttribute('src', park.photoLocal);
    beenImg.setAttribute('alt', park.name);
    beenDiv.appendChild(beenImg);

    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'parkTitle');
    h2.textContent = park.name;
    beenDiv.appendChild(h2);

    var beenP = document.createElement('p');
    beenP.setAttribute('class', 'parkSummary');
    beenP.textContent = park.summary;
    beenDiv.appendChild(beenP);

    // var addBucket = document.createElement('a');
    // addBucket.textContent = "+ Bucket List";
    // addBucket.setAttribute('class', "button1 button2");
    // addBucket.setAttribute('onclick', populateBucket());
    // beenDiv.appendChild(addBucket);

  })
};
