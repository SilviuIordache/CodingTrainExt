function setup() {
  noCanvas();
  let userinput = select('#userinput');

  userinput.input(changeText);

  function changeText() {

    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log("got tabs");
      console.log(tabs);

      let msg = {
        txt: userinput.value()
      }
      chrome.tabs.sendMessage(tab[0].id, msg);
    }
  }
}
