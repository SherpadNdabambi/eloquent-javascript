// @ts-check
let https = require("https");

/** @type {string} */
const path = "/author",
  url = "eloquentjavascript.net";

/** @type {Array<string>} */
const mediaTypes = ["text/plain", "text/html", "application/json"];

mediaTypes.forEach((mediaType) => {
  requestAuthor(mediaType);
});

/**
 *
 * @param {string} mediaType
 */
function requestAuthor(mediaType) {
  let request = https.request(
    {
      headers: { Accept: mediaType },
      hostname: url,
      method: "GET",
      path: path,
    },
    (response) => {
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        console.log(body);
      });
    }
  );
  request.end();
}
