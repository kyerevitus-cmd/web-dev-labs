//Vitus Kyeremateng - Lab 7.
const zipPattern = /^\d{5}$/;
  const isValidZip = zipPattern.test(zipInput.value);
  console.log(isValidZip); // true or false
  const name = "Ada";
  let labsCompleted = 6;

  labsCompleted = labsCompleted + 1;
  console.log(`${name} has completed ${labsCompleted} labs.`);
  const likeBtn = document.querySelector('#like-btn');
  const likeCount = document.querySelector('#like-count');
  const themeBtn = document.querySelector('#theme-btn');
  let like = 0;

  likeBtn.addEventListener("click", function() {
    like = like + 1;
    likeCount.textContent = `${like} likes`;
  });

  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle('dark-theme');
  });
