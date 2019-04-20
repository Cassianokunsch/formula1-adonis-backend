/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Servico extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  servicos() {
    return this.hasMany('App/Models/Servico');
  }
}

module.exports = Servico;
