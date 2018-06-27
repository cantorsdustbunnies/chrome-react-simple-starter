// For testing purposes only
chrome.storage.sync.clear();
//

const default_state = {};

// populates state if it doesn't exist, otherwise calls for it.
chrome.storage.sync.get({ state: default_state }, data => {
	chrome.storage.sync.set({ state: data.state }, () => {});
});

//passes state to content script for futher processing.

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	chrome.storage.sync.get('state', data => {
		chrome.tabs.sendMessage(tab.id, data);
	});
}
