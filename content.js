console.log('Chrome Extension go!');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);

  if (message.txt === "hello") {
    let paragrahps = document.getElementsByTagName('p');
    for (el of paragrahps) {
      el.style['background-color'] = getRandomColor();
    }
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