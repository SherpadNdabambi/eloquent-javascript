// @ts-check

/** @type {string} */
const url = "https://eloquentjavascript.net/author";

makeRequest("text/plain");
makeRequest("text/html");
makeRequest("application/json");
makeRequest("application/rainbow+unicorns");

function makeRequest(mediaType) {
  /** @type {XMLHttpRequest} */
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.setRequestHeader("Accept", mediaType);
  request.addEventListener("load", function () {
    console.log(
      `${mediaType}:
${request.responseText}`,
    );
  });
  request.send(null);
}
