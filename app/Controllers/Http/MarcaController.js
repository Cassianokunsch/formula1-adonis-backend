const Marca = use('App/Models/Marca');

class MarcaController {
  async index() {
    return Marca.all();
  }

  async show({ params }) {
    const marca = await Marca.findOrFail(params.id);

    return marca;
  }

  async store({ request }) {
    const data = request.only(['nome_marca']);
    const marca = await Marca.create(data);

    return marca;
  }

  async update({ params, request }) {
    const marca = await Marca.findOrFail(params.id);
    const data = request.only(['nome_marca']);
    marca.merge(data);
    await marca.save();

    return marca;
  }

  async destroy({ params }) {
    const marca = await Marca.findOrFail(params.id);
    await marca.delete();
  }
}

module.exports = MarcaController;
