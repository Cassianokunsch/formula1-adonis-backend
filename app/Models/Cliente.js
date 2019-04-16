/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Cliente extends Model {
  veiculos() {
    return this.hasMany('App/Models/Veiculo');
  }
}

module.exports = Cliente;
