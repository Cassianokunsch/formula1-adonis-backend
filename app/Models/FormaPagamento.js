/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class FormaPagamento extends Model {
  ordem_servicos() {
    return this.hasMany('App/Models/OrdemServico');
  }
}

module.exports = FormaPagamento;
