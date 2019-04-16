/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClienteSchema extends Schema {
  up() {
    this.create('clientes', (table) => {
      table.increments();
      table.timestamps();
      table.string('nome_cliente', 30).notNullable();
      table.string('telefone', 9).notNullable();
    });
  }

  down() {
    this.drop('clientes');
  }
}

module.exports = ClienteSchema;
