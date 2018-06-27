//receive message from background script
console.log('content script working');

chrome.runtime.onMessage.addListener(getState);

function getState(request, sender, sendResponse) {
	console.log(request.state);
}
