let year = document.querySelector('#currentyear');
let lastModified = document.querySelector('#lastModified');

let today = new Date();
year.innerHTML = today.getFullYear()

lastModified.innerHTML = document.lastModified