console.log('Colorizer extension is enabled');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);

  let paragrahps = document.getElementsByTagName('p');
  for (el of paragrahps) {
    el.style['background-color'] = getRandomColor();
    el.style.innerHTML = message.txt;
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}