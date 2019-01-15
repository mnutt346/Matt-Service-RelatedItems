const faker = require("faker");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const rows = 10000000;

const createCSV = async () => {
  console.time(`${rows} rows`);
  const wstream = fs.createWriteStream("projects.csv", { flags: "a" });
  const headers = "name, blurb, thumbnail\n";

  fs.truncate("projects.csv", 0, err => {
    if (err) console.log("ERROR TRUNCATING FILE ", err);
  });

  fs.writeFile("projects.csv", headers, err => {
    if (err) console.log("ERROR WRITING FILE: ", err);
  });

  for (let i = 0; i < rows; i++) {
    let financialMistake = `${faker.commerce.productName()}, ${faker.lorem.words()}, ${faker.image.avatar()}\n`;
    wstream.write(financialMistake);
  }
  await console.timeEnd(`${rows} rows`);
};

createCSV();
