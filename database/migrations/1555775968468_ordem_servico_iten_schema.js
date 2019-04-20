/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class OrdemServicoItenSchema extends Schema {
  up() {
    this.create('ordem_servico_itens', (table) => {
      table.increments();
      table.timestamps();
      table.float('preco_item').notNullable();
      table
        .integer('ordem_servico_id')
        .unsigned()
        .references('id')
        .inTable('ordem_servicos');
      table
        .integer('servico_id')
        .unsigned()
        .references('id')
        .inTable('servicos');
    });
  }

  down() {
    this.drop('ordem_servico_itens');
  }
}

module.exports = OrdemServicoItenSchema;
