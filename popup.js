const on = document.getElementById('on');
const off = document.getElementById('off');

// Theater mode
on.addEventListener('click', () => {
  var port = chrome.extension.connect({
    name: "Connect comunication"
  });
  port.postMessage(1.7499999999999998);
})

// Of mode
off.addEventListener('click', () => {
  var por = chrome.extension.connect({
    name: "Disconnect comunication"
  });
  port.postMessage(1.0);
})