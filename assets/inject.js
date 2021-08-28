
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
