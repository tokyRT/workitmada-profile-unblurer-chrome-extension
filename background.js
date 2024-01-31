// background.js
chrome.webNavigation.onCompleted.addListener(function (details) {
    // Check if the navigation is in the main frame
    if (details.frameId === 0) {
        // Send a message to the content script to execute your script
        chrome.tabs.sendMessage(details.tabId, { action: "executeScript" });
    }
});
