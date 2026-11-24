"use strict";
// Vitus Kyeremateng - Lab 11

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const goalsList = document.querySelector("#goals-list");

const LikeCounter = {
  likes: Number(localStorage.getItem("likes")) || 0,
  increment() {
    this.likes = this.likes + 1;
    localStorage.setItem("likes", this.likes.toString());
    this.render();
  },
  render() {
    if (likeCount) likeCount.textContent = `${this.likes} likes`;
  },
};
LikeCounter.render();
likeBtn?.addEventListener("click", () => LikeCounter.increment());

const learningGoals = ["HTML", "CSS", "JavaScript"];
learningGoals.forEach(function (goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList?.appendChild(item);
});
const themeBtn = document.querySelector("#theme-btn");
// Restore the saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Toggle dark mode and remember the choice
themeBtn?.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
