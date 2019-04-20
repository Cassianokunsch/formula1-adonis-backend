const Modelo = use('App/Models/Modelo');

class ModeloController {
  async index() {
    return Modelo.all();
  }

  async show({ params }) {
    const modelo = await Modelo.findOrFail(params.id);

    return modelo;
  }

  async store({ request }) {
    const data = request.only(['nome_modelo', 'marca_id']);
    const modelo = await Modelo.create(data);

    return modelo;
  }

  async update({ params, request }) {
    const modelo = await Modelo.findOrFail(params.id);
    const data = request.only(['nome_modelo', 'marca_id']);
    modelo.merge(data);
    await modelo.save();

    return modelo;
  }

  async destroy({ params }) {
    const modelo = await Modelo.findOrFail(params.id);
    await modelo.delete();
  }
}

module.exports = ModeloController;
