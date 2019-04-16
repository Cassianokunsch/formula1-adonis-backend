/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class OrdemServico extends Model {
  ordem_servico_itens() {
    return this.hasMany('App/Models/OrdemServicoIten');
  }
}

module.exports = OrdemServico;
