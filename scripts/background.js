console.log('Background script is running');

// Example of handling an event or setting up a listener
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});
