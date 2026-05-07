document.getElementById("darkModeBtn").onclick = function () {
  document.body.classList.toggle("dark");
};

const startBtn = document.getElementById("startBtn");
const menu = document.getElementById("startMenu");



document.addEventListener("DOMContentLoaded", () => {

  // BOOK POPUP
  const bookCard = document.getElementById("bookProject");
  const bookWindow = document.getElementById("bookWindow");
  const closeBook = document.getElementById("closeBook");

  bookCard.addEventListener("click", () => {
    bookWindow.style.display = "block";
  });

  closeBook.addEventListener("click", () => {
    bookWindow.style.display = "none";
  });

});


const overlay = document.getElementById("overlay");

bookCard.addEventListener("click", () => {
  bookWindow.style.display = "block";
  overlay.style.display = "block";
});

closeBook.addEventListener("click", () => {
  bookWindow.style.display = "none";
  overlay.style.display = "none";
});
