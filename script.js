"use strict";
// Vitus Kyeremateng - Lab 11
const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,
    increment() {
        this.likes = this.likes + 1;
        localStorage.setItem("likes", this.likes.toString());
        this.render();
    },
    render() {
        if (likeCount)
            likeCount.textContent = `${this.likes} likes`;
    }
};
const learningGoals = ["HTML", "CSS", "JavaScript"];
learningGoals.forEach(function (goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList?.appendChild(item);
});
