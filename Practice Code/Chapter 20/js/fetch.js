// console.log(process.argv);
const url = process.argv[2];
const options = {
  method: process.argv[3] ? process.argv[3] : "GET",
};

if (options.method === "PUT") options.body = process.argv[4];

fetch(url, options)
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.log(error));
