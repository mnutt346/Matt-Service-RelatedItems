const faker = require("faker");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const rows = 10000000;

const createCSV = async () => {
  console.time(`${rows} rows`);
  const wstream = fs.createWriteStream("projects.csv", { flags: "a" });
  const headers =
    "name, creator, creatorImg, blurb, thumbnail, fullImg, location, category, created_at, description\n";

  fs.truncate("projects.csv", 0, err => {
    if (err) console.log("ERROR TRUNCATING FILE ", err);
  });

  fs.writeFile("projects.csv", headers, err => {
    if (err) console.log("ERROR WRITING FILE: ", err);
  });

  for (let i = 0; i < rows; i++) {
    let financialMistake = `${faker.commerce.productName()}, ${faker.name.findName()}, ${faker.internet.avatar()} , ${faker.lorem.sentence()}, ${faker.image.avatar()} , ${faker.image.business()} , ${faker.address.state()}, ${faker.lorem.word()}, ${faker.date.past()}, ${faker.company.catchPhrase()}\n`;
    wstream.write(financialMistake);
  }
  await console.timeEnd(`${rows} rows`);
};

createCSV();
