// Vitus Kyeremateng - Lab 11
export {};

const LikeCounter = {
  likes: Number(localStorage.getItem("likes")) || 0,
  increment(): void {
    this.likes = this.likes + 1;
    localStorage.setItem("likes", this.likes.toString());
    this.render();
  },
  render(): void {
  if (likeCount) likeCount.textContent = `${this.likes} likes`;
    }
  };
const learningGoals: string[] = ["HTML", "CSS", "JavaScript"];

learningGoals.forEach(function(goal: string) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList?.appendChild(item);
});
interface CatFact {
  fact: string;
  length: number;
}
const data = (await response.json()) as CatFact;
factDisplay.textContent = data.fact;
