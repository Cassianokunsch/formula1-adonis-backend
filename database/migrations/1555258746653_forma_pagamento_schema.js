/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class FormaPagamentoSchema extends Schema {
  up() {
    this.create('forma_pagamentos', (table) => {
      table.increments();
      table.timestamps();
      table.string('descricao_formapagamento').notNullable();
    });
  }

  down() {
    this.drop('forma_pagamentos');
  }
}

module.exports = FormaPagamentoSchema;
