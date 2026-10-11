// Vitus Kyeremateng - Lab 7
const zipPattern = /^\d{5}$/;

// Assuming there is an input element in your HTML with id="zip-input"
const zipInput = document.querySelector('#zip-input');

// Check if zipInput exists before testing to prevent errors
const isValidZip = zipInput ? zipPattern.test(zipInput.value) : false;
console.log(isValidZip); // true or false

const name = "Ada";
let labsCompleted = 6;
let isEnrolled = true;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
let like = 0;

if (likeBtn && likeCount) {
  likeBtn.addEventListener("click", function() {
    like = like + 1;
    likeCount.textContent = `${like} likes`;
  });
}

const themeBtn = document.querySelector('#theme-btn');

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle('dark');
  });
}