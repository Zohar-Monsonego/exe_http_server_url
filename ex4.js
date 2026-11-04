// Exercise 4: Parse and Log URL Parts
// Print the following parts of the URL:
//   Hostname: localhost
//   Pathname: /users/list
//   Protocol: http:
//   Query: ?role=admin&active=true
//   Hash: #top
//
// Run: node ex4.js

const { URL } = require("url");

const urlStr = "http://localhost:3000/users/list?role=admin&active=true#top";

const url_object = new URL(urlStr);

console.log(
  `Hostname: ${url_object.hostname}\nPathname: ${url_object.pathname}\nProtocol: ${url_object.protocol}\nQuery: ${url_object.search}\nHash: ${url_object.hash}`,
);

// write your code here
