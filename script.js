

const signUpButton = document.querySelector('#signUpButton');
const logInButton = document.querySelector('#logInButton');


signUpButton.addEventListener('click', function () {
    location.href("https://justinhadinatacs.github.io/HCIsarenityFarewell/login.html");
});

logInButton.addEventListener('click', function () {
    location("https://justinhadinatacs.github.io/HCIsarenityFarewell/login.html");
});

document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.querySelector('.switch10 input');

    toggleButton.addEventListener('click', function () {
      let body = document.body;

      if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
      } else {
        body.classList.remove('light');
        body.classList.add('dark');
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  // Check if there's a hash in the URL
  if (window.location.hash) {
    // Get the target element by id
    var pricing = document.querySelector(window.location.hash);

    // Scroll to the target element
    if (pricing) {
      pricing.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});
