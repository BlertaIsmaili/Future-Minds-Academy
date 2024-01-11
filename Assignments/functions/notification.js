

let intervalId = null;
let originalTitle = document.title;
let originalFavicon = document.querySelector("link[rel='']").href;

function startNotification(text) {
    clearInterval(intervalId);

    let isOriginal = true;
    intervalId = setInterval(function () {
        if (isOriginal) {
            document.title = text;
            changeFavicon('bell-icon.png');
        } else {
            document.title = originalTitle;
            changeFavicon(originalFavicon);
        }
        isOriginal = !isOriginal;
    }, 1000);
}

function endNotification() {
    clearInterval(intervalId);
    document.title = originalTitle;
    changeFavicon(originalFavicon);
}

function changeFavicon(newFaviconURL) {
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = newFaviconURL;
}