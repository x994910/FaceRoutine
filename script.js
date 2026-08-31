const images = {
  0: "Sunday.jpg",
  1: "Monday.png",
  2: "Tuesday.jpg",
  3: "Wednesday.jpg",
  4: "Thursday.jpg",
  5: "Friday.jpg",
  6: "Saturday.jpg"
};

const today = new Date().getDay();
const image = images[today];

document.getElementById("dailyImage").src = image;
