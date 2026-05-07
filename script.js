document.getElementById("darkModeBtn").onclick = function () {
  document.body.classList.toggle("dark");
};

const startBtn = document.getElementById("startBtn");
const menu = document.getElementById("startMenu");

startBtn.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};


const bookCard = document.getElementById("bookProject");
const bookWindow = document.getElementById("bookWindow");
const closeBook = document.getElementById("closeBook");

// open window
bookCard.addEventListener("click", () => {
  bookWindow.style.display = "block";
});

// close window
closeBook.addEventListener("click", () => {
  bookWindow.style.display = "none";
});
