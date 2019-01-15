exports.up = async function(knex, Promise) {
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("name");
    table.string("blurb");
    table.string("thumbnail");
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("projects");
};
