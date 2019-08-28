console.log('Kittens of the world, unite as one!');

let filenames = [
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg"
];

let imgs = document.getElementsByTagName('img');

for (imgEl of imgs) {
  let r = Math.floor(Math.random() * filenames.length);

  let file = `images/${filenames[r]}`;
  let url = chrome.extension.getURL(file);

  imgEl.src = url;
  console.log(url);
}