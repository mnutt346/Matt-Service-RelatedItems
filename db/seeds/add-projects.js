require("dotenv").config();
const faker = require("faker");
const fs = require("fs");
const csv = require("csv-parser");

exports.seed = async function(knex, Promise) {
  const headers =
    "name,creator,creatorImg,blurb,thumbnail,fullImg,location,category,created_at,description\n";

  fs.truncate("projects.csv", 0, err => {
    if (err) console.log("ERROR TRUNCATING FILE ", err);
  });

  fs.writeFile("projects.csv", headers, err => {
    if (err) console.log("ERROR WRITING FILE: ", err);
  });

  for (let i = 0; i < 100; i++) {
    let financialMistake = `${faker.company.companyName()},${faker.name.findName()},${faker.internet.avatar()},${faker.lorem.sentence()},${faker.image.avatar()},${faker.image.business()},${faker.address.state()},${faker.lorem.word()},${faker.date.past()},${faker.company.catchPhrase()}\n`;
    fs.appendFile("projects.csv", financialMistake, err => {
      if (err) console.log("ERROR APPENDING FILE: ", err);
    });
  }

  fs.createReadStream("projects.csv")
    .pipe(csv())
    .on("data", () => console.log("DATATATATTATA", data));
};
