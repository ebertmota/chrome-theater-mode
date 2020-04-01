chrome.extension.onConnect.addListener(function(port) {
  console.log("Connected...");

  // zoom scale size 
  var zoomFactor = 0;

  port.onMessage.addListener(function(msg) {
    console.log('Changing to ' + msg)
    zoomFactor = msg;
  });

  chrome.tabs.query({ active: true }, function (tabs) {
    tabId = tabs[0].id;
    chrome.tabs.setZoom(tabId,zoomFactor);
  })
});



