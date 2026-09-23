<input type="text" id="zip" name="zip" pattern="^\d{5}$" required>
script.js — the JavaScript-side check
const zipPattern = /^\d{5}$/;
const isValidZip = zipPattern.test(zipInput.value);
console.log(isValidZip); // true or false