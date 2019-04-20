/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Cliente extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  veiculos() {
    return this.hasMany('App/Models/Veiculo');
  }
}

module.exports = Cliente;
