chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const number = request.profilePituresLength;
    console.log(number);
    document.querySelector(".profileNumber").innerHTML = number;
}
);  