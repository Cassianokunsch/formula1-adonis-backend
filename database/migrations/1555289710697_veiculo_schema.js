/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VeiculoSchema extends Schema {
  up() {
    this.create('veiculos', (table) => {
      table.increments();
      table.timestamps();
      table
        .string('placa')
        .notNullable()
        .unique();
      table.string('cor').notNullable();
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes');
      table
        .integer('marca_id')
        .unsigned()
        .references('id')
        .inTable('marcas');
    });
  }

  down() {
    this.drop('veiculos');
  }
}

module.exports = VeiculoSchema;
