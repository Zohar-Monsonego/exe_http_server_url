// Exercise 5: Extract Query Parameters
// Use https://site.com/products?id=15&type=book&lang=en
// Extract the values of id, type and lang with .searchParams.get() and print them:
//   ID: 15
//   Type: book
//   Language: en
//
// Run: node ex5.js

const { URL } = require("url");

const urlStr = "https://site.com/products?id=15&type=book&lang=en";

const url_object = new URL(urlStr);

console.log(
  `ID: ${url_object.searchParams.get("id")}\nType: ${url_object.searchParams.get("type")}\nLanguage: ${url_object.searchParams.get(
    "lang",
  )}`,
);

// write your code here
