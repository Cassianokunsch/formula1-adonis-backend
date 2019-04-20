/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class OrdemServicoSchema extends Schema {
  up() {
    this.create('ordem_servicos', (table) => {
      table.increments();
      table.timestamps();
      table
        .float('desconto')
        .notNullable()
        .defaultTo(0);
      table.float('sub_total').notNullable();
      table.float('preco_total').notNullable();
      table
        .integer('forma_pagamento_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('forma_pagamentos');
      table
        .integer('veiculo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('veiculos');
    });
  }

  down() {
    this.drop('ordem_servicos');
  }
}

module.exports = OrdemServicoSchema;
