/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Veiculo extends Model {
  ordem_servicos() {
    return this.hasMany('App/Models/OrdemServico');
  }
}

module.exports = Veiculo;
