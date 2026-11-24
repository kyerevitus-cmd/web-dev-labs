// Vitus Kyeremateng - Lab 10

// Restore the saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Elements
const zipInput = document.getElementById("zip") as HTMLInputElement | null;
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const themeBtn = document.querySelector("#theme-btn");
const goalsList = document.querySelector("#goals-list");
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");
const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");

// ZIP validation
const zipPattern = /^\d{5}$/;
zipInput?.addEventListener("input", () => {
  console.log(zipPattern.test(zipInput.value)); // true or false
});

// Variables and template literal
const studentName = "Ada";
let labsCompleted = 6;
labsCompleted = labsCompleted + 1;
console.log(`${studentName} has completed ${labsCompleted} labs.`);

// Like counter (saved in localStorage)
const LikeCounter = {
  likes: Number(localStorage.getItem("likes")) || 0,
  increment() {
    this.likes = this.likes + 1;
    localStorage.setItem("likes", this.likes);
    this.render();
  },
  render() {
    if (likeCount) likeCount.textContent = `${this.likes} likes`;
  },
};
LikeCounter.render();
likeBtn?.addEventListener("click", () => LikeCounter.increment());

// Closure demo (not wired to the button, so likes aren't counted twice)
function createLikeCounter() {
  let likes = 0; // private, not reachable from outside
  return {
    increment() { likes++; },
    getLikes() { return likes; },
  };
}
const counter = createLikeCounter();
counter.increment();
console.log(counter.getLikes());

// Learning goals
const goals = ["HTML", "CSS", "JavaScript"];
goals.forEach(function (goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList?.appendChild(item);
});

// Promise and async/await
function getGreetingAfterDelay() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hello from the future!");
    }, 800);
  });
}
getGreetingAfterDelay().then(function (message) {
  console.log(message);
});
async function showGreeting() {
  const message = await getGreetingAfterDelay();
  console.log(message);
}
showGreeting();

// Fetch a cat fact
async function loadFact() {
  if (!factDisplay) return;
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
factBtn?.addEventListener("click", loadFact);

// Dark mode toggle
themeBtn?.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Geolocation
locationBtn?.addEventListener("click", function () {
  if (!locationDisplay) return;
  if (!("geolocation" in navigator)) {
    locationDisplay.textContent = "Geolocation isn't supported.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude.toFixed(2);
      const lon = position.coords.longitude.toFixed(2);
      locationDisplay.textContent = `You're near ${lat}, ${lon}`;
    },
    function (error) {
      locationDisplay.textContent = "Location access was denied.";
      console.warn(error);
    }
  );
});