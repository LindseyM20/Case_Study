// Get stored parks from localStorage and parse the JSON string to an array
// Using localStorage for now, until I get a database set up.
var storedBucket = JSON.parse(localStorage.getItem("bucketList")) || [];
var bucketParks = [];
console.log(storedBucket);

arrayify();

function arrayify() {
  // If parks were fetched from localStorage, assign them to bucketList array
  if (storedBucket !== null) {
    bucketParks = storedBucket;
  }
  populateBucketPage();
}

function populateBucketPage() {
  console.log("In the populateBucketPage function");
  console.log(bucketParks);
  bucketParks.forEach((park) => {

    var bucketList = document.getElementById('bucketList');
    // console.log(bucketList);

    var bucketPark = document.createElement('li');
    bucketPark.setAttribute('class', 'parkLi');
    bucketList.appendChild(bucketPark);

    var bucketDiv = document.createElement('div');
    bucketDiv.setAttribute('class', 'thumbnail');
    bucketPark.appendChild(bucketDiv);

    var bucketImg = document.createElement('img');
    bucketImg.setAttribute('src', park.photoLocal);
    bucketImg.setAttribute('alt', park.name);
    bucketDiv.appendChild(bucketImg);

    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'parkTitle');
    h2.textContent = park.name;
    bucketDiv.appendChild(h2);

    var bucketP = document.createElement('p');
    bucketP.setAttribute('class', 'parkSummary');
    bucketP.textContent = park.summary;
    bucketDiv.appendChild(bucketP);

    // var addBucket = document.createElement('a');
    // addBucket.textContent = "+ Bucket List";
    // addBucket.setAttribute('class', "button1 button2");
    // addBucket.setAttribute('onclick', populateBucket());
    // bucketDiv.appendChild(addBucket);

  });
};
