let images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
"11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg"];

function loadImages() {     //rendering the gallery
  for (i = 0; i<images.length; i++) {   
    document.getElementById('maincontent').innerHTML += `
    <img class="fotogalerie" src="./img/${images[i]}" alt="bild${i}" onclick="openImage(${i})")>
    `;
  }
}

function openImage(j) {             // open an image on screen
  document.getElementById('head').style.display = "none";
  document.body.style.overflow = "hidden";        // hiding scroll bar
  let blocker = document.getElementById('blockcontainer');
  blocker.style.display = "flex";     // making blockcontainer visible
  renderBigfotoItems(j);    // displaying all items
}

function renderBigfotoItems(j) {
  document.getElementById('blockcontainer').innerHTML = `
  <div id="iconcontainer">
  <img src="./img/icons/x.png" alt="logo" class="bright icon x" onclick="closeImage()">
  <img src="./img/icons/arrowleft.png" alt="logo" class="bright icon" onclick="leftArrow(${j})">
  </div>
  <img src="./img/${images[j]}" alt="logo" class="bigfoto" onclick="closeImage()">
  <div id="hiddentoolbar">
  <img src="./img/icons/arrowleft.png" alt="logo" class="bright icon" onclick="leftArrow(${j})">
  <img src="./img/icons/x.png" alt="logo" class="bright icon x" onclick="closeImage()">
  <img src="./img/icons/arrowright.png" alt="logo" class="bright icon" onclick="rightArrow(${j})">
  </div>
  <img src="./img/icons/arrowright.png" alt="logo" class="bright icon arrow" onclick="rightArrow(${j})">
  `;
}

function closeImage() {
  document.getElementById('head').style.display = "flex";
  let blocker = document.getElementById('blockcontainer');  
  blocker.style.display = "none";   // closing blocker container (blur effect)
  document.body.style.overflow = "unset"; // reactivating scrollbar
}

function rightArrow(j) {
  if (j == 19) {  // check if last image ---> then first image
    j = 0;
    openImage(j);
  } else {
    j++;        // going to next image
    openImage(j);
  }
}

function leftArrow(j) {
  if (j == 0) {  // check if first image ---> then last image
    j = 19;
    openImage(j);
  } else {
    j--;       // going to previous image
    openImage(j);
  }
}