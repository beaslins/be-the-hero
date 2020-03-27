
// método UP: responsável pela criação da tabela quando eu executar essa migration
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary(); // chave primaria da tabela

    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // o segundo parametro seta a quantidade de caracteres
  });
};

// método DOWN
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
