import LargeRoom from "./roomsArray.js";

// Create an array to store LargeRoom instances
const roomsArray = [];

// Create room instances and add them to the array
const room1 = new LargeRoom(
  "Living Room",
  20,
  15,
  10,
  3,
  8,
  "wooden",
  "carpet",
  true,
  "beige"
);

const room2 = new LargeRoom(
  "Bedroom",
  18,
  12,
  8,
  2,
  7,
  "wooden",
  "carpet",
  false,
  "light blue"
);

const room3 = new LargeRoom(
  "Kitchen",
  15,
  10,
  9,
  1,
  6,
  "wooden",
  "tile",
  true,
  "white"
);

roomsArray.push(room1, room2, room3);

const main = document.querySelector(".maincontent");

// Loop through the array to display room information
roomsArray.forEach((room, index) => {
  const content = `
    <h1 class="largeroom__name">${room.name}</h1>
    <ul class="largeroom__features">
      <li class="largeroom__length">Length:<span> ${room.length}m</span></li>
      <li class="largeroom__width">Width:<span> ${room.width}m</span></li>
      <li class="largeroom__height">Height:<span> ${room.height}m</span></li>
      <li class="largeroom__windows">Windows:<span> ${room.windows}</span></li>
      <li class="largeroom__door">Door size:<span> ${room.door.Size} inches</span></li>
      <li class="largeroom__type">Door Type:<span> ${room.door.Type}</span></li>
      <li class="largeroom__floor">Floor type:<span> ${room.floorType}</span></li>
      <li class="largeroom__door">Door status:<span> ${room.doorClosed}</span></li>
      <li class="largeroom__wall">Wall Color:<span> ${room.wallColor}</span></li>
    </ul>
  `;

  const newArticle = document.createElement("article");
  newArticle.classList.add("largeroom");
  newArticle.setAttribute("id", `room${index + 1}`);
  newArticle.innerHTML = content;

  main.append(newArticle);
});

/**
 * Add a navigation section to the DOM
 */
const navContent = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Backpacks</a></li>
  <li><a href="#">Other things</a></li>
  <li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);

// Modify properties of a room
room1.toggleDoor(false); // Open the door
room1.setNewFloorType("Hardwood"); // Change the floor type

// Accessing room information from the array
console.log(roomsArray[0]);
console.log(roomsArray[1]);
console.log(roomsArray[2]);
