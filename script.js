// Vitus Kyeremateng - Lab 9
const zipInput =document.getElementById('zip'); //match your input's id
const zipPattern = /^\d{5}$/;
zipInput.addEventListener("input", () => {
const isValidZip = zipPattern.test(zipInput.value);
console.log(isValidZip); // true or false
})
const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
let likes = 0;

function incrementLikes() {
  likes = likes + 1;
  updateLikeDisplay();
}

function updateLikeDisplay(co) {
  likeCount.textContent = `${likes} likes`;
}

likeBtn.addEventListener("click", incrementLikes);
const themeBtn = document.querySelector('#theme-btn');
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle('dark');
});
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList.appendChild(item);
});
const likeMessage = document.querySelector("#like-message");

function updateLikeDisplay() {
  likeCount.textContent = `${likes} likes`;
  function createLikeCounter() {
  let likes = 0;  // private, not reachable from outside

  return {
    increment() {
      likes++;
      updateLikeDisplay(likes);
    },
    getLikes() { return likes; }
  };
}

const counter = createLikeCounter();
  likeBtn.addEventListener("click", counter.increment);
}
const LikeCounter = {
  likes: 0,
  increment() {
    this.likes = this.likes + 1;
    this.render();
  },
  render() {
    likeCount.textContent = `${this.likes} likes`;
  }
};

likeBtn.addEventListener("click", function() {
  LikeCounter.increment();
  function getGreetingAfterDelay() {
return new Promise(function(resolve) {
setTimeout(function() {
resolve("Hello from the future!");
}, 800);
});
}
getGreetingAfterDelay().then(function(message) {
console.log(message);
async function showGreeting() {
const message = await getGreetingAfterDelay();
console.log(message);
}
showGreeting();
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");
async function loadFact() {
factDisplay.textContent = "Loading...";
try {
const response = await fetch("https://catfact.ninja/fact");
if (!response.ok) {
throw new Error("Server responded with an error");
}
const data = await response.json();
factDisplay.textContent = data.fact;
} catch (error) {
factDisplay.textContent = "Couldn't load a fact right now. Try again.";
console.error(error);
}
}
factBtn.addEventListener("click", loadFact);
});
});


