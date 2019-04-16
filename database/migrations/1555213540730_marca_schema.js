/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MarcaSchema extends Schema {
  up() {
    this.create('marcas', (table) => {
      table.increments();
      table.timestamps();
      table.string('nome_marca', 30).notNullable();
    });
  }

  down() {
    this.drop('marcas');
  }
}

module.exports = MarcaSchema;
