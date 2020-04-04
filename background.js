
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({ active: true }, function (tabs) {
    tabId = tabs[0].id;
    
    chrome.tabs.getZoom(tabId, function (zoomFactor) {
      if (zoomFactor === 1) {
        chrome.tabs.executeScript(null, {file: "testScript.js"});
        chrome.tabs.setZoom(tabId,1.7499999999999998);
      } else if (zoomFactor === 1.7499999999999998 || zoomFactor > 1.7 ) {
        chrome.tabs.setZoom(tabId, 1.0);
      }
    }); 

  })
});
