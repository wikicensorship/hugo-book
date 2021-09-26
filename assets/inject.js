
// get data
var callbackName = 'ghButtonCallback' + Math.floor( Math.random() * 10000 );
var button = document.querySelector('.btn-with-count');

window[ callbackName ] = function( response ) {
  var starText = addCommas( response.data.stargazers_count );
  button.querySelector('.social-count').textContent = starText;
}

function addCommas( num ) {
  return new String( num ).replace( /(\d)(?=(\d{3})+$)/g, '$1,' );
}

var script = document.createElement('script');
script.src = 'https://api.github.com/repos/' + BookGitHubUser + '/' + BookGitHubRepo + '?callback=' + callbackName;
document.head.appendChild( script );

const themeColor = document.querySelector('meta[name="theme-color"]');
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const body = document.body;
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  if (!prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("dark");
  }
  themeColor.content = getComputedStyle(body).color;
  colorScheme.content= "dark";
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("light");
  }
  themeColor.content = getComputedStyle(body).color;
  colorScheme.content= "light";
}
function toggletheme() {
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.documentElement.classList.toggle("light");
    themeColor.content = getComputedStyle(body).color;
    colorScheme.content= colorScheme.content == "dark" ? "light" : "dark";
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.documentElement.classList.contains("light") ? "light" : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.documentElement.classList.toggle("dark");
    themeColor.content = getComputedStyle(body).color;
    colorScheme.content= colorScheme.content == "dark" ? "light" : "dark";
    var theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
}
