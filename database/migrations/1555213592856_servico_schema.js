/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ServicoSchema extends Schema {
  up() {
    this.create('servicos', (table) => {
      table.increments();
      table.timestamps();
      table.string('descricao_servico', 30).notNullable();
      table.float('preco').notNullable();
    });
  }

  down() {
    this.drop('servicos');
  }
}

module.exports = ServicoSchema;
