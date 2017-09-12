var request = new XMLHttpRequest();
  request.onload = function() {
    // get the file contents
    var fileContent = this.responseText;
    // split into lines
    var fileContentLines = fileContent.split( '\n' );
    // get a random index (line number)
    var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );
    // extract the value
    var randomLine = fileContentLines[ randomLineIndex ];
  };

window.onload = function() {
    document.getElementById( 'verse' ).innerHTML = randomLine;
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

n = getRandomIntInclusive(0, 31101).toString();
request.open( 'GET', 'https://qtk.github.io/truly-random-bible-verse/verses/' + n + '.txt', true );
request.send();
