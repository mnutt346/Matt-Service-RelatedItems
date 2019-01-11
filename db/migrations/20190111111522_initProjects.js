exports.up = async function(knex, Promise) {
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("name");
    table.string("creator");
    table.string("creatorImg");
    table.string("blurb");
    table.string("thumbnail");
    table.string("fullImg");
    table.string("location");
    table.string("category");
    table.string("created_at");
    table.string("description");
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("projects");
};
