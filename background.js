//list of urls to be tracked
const urls = [
  '*://*.facebook.com/',
  '*://*.twitter.com/',
  '*://*.youtube.com/',
  '*://*.instagram.com/',
  '*://*.tumblr.com/',
  '*://*.netflix.com/',
  '*://*.hulu.com/',
  '*://*.pinterest.com/',
  '*://*.reddit.com/',
  '*://*.buzzfeed.com/'
]

//storage in chrome
const STORAGE = chrome.storage.local;

let active = {};

const getActiveTab = () => {
  return new Promise(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true}, 
    activeTab => {resolve(activeTab[0]);
    });
  });
}
