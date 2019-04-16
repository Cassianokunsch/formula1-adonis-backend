/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ModeloSchema extends Schema {
  up() {
    this.create('modelos', (table) => {
      table.increments();
      table.timestamps();
      table.string('nome_modelo', 30).notNullable();
      table
        .integer('marca_id')
        .unsigned()
        .references('id')
        .inTable('marcas');
    });
  }

  down() {
    this.drop('modelos');
  }
}

module.exports = ModeloSchema;
