/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Marca extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  modelos() {
    return this.hasMany('App/Models/Modelo');
  }
}

module.exports = Marca;
