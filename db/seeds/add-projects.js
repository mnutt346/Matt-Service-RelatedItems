const faker = require("faker");

const createProject = () => ({
  name: faker.company.companyName(),
  creator: faker.name.findName(),
  creatorImg: faker.internet.avatar(),
  blurb: faker.lorem.sentence(),
  thumbnail: faker.image.avatar(),
  fullImg: faker.image.business(),
  location: faker.address.state(),
  category: faker.lorem.word(),
  created_at: faker.date.past(),
  description: faker.company.catchPhrase()
});

exports.seed = async function(knex, Promise) {
  let fakeProjects = [];
  for (let i = 0; i < 10000000; i++) {
    fakeProjects.push(createProject());
  }
  // await knex.batchInsert("projects", fakeProjects, 10).catch(err => {
  //   console.log("ERROR ON BATCH ISERT: THAT'S TOO MUCH SHIT");
  // });
  await knex("projects")
    .insert(fakeProjects)
    .catch(err => {
      console.log("ERROR IN INSERT: TOO MUCH SHIT: ", err);
    });
};
