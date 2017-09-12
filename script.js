function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var request = new XMLHttpRequest();
  request.onload = function() {
    randomLine = this.responseText;
    document.getElementById( 'verse' ).innerHTML = randomLine;
  };

n = getRandomIntInclusive(0, 31101).toString();
request.open( 'GET', 'https://qtk.github.io/truly-random-bible-verse/verses/' + n + '.txt', true );
request.send();
