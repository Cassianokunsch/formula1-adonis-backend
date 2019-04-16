/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Servico extends Model {
  servicos() {
    return this.hasMany('App/Models/Servico');
  }
}

module.exports = Servico;
