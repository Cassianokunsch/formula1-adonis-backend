/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Marca extends Model {
  modelos() {
    return this.hasMany('App/Models/Modelo');
  }
}

module.exports = Marca;
