const Veiculo = use('App/models/Veiculo');

class VeiculoController {
  async index() {
    return Veiculo.all();
  }

  async show({ params }) {
    const veiculo = await Veiculo.findOrFail(params.id);

    return veiculo;
  }

  async store({ request }) {
    const data = request.only(['placa', 'cor', 'cliente_id', 'marca_id']);
    const veiculo = await Veiculo.create(data);

    return veiculo;
  }

  async update({ params, request }) {
    const veiculo = await Veiculo.findOrFail(params.id);
    const data = request.only(['placa', 'cor', 'cliente_id', 'marca_id']);
    veiculo.merge(data);
    await veiculo.save();

    return veiculo;
  }

  async destroy({ params }) {
    const veiculo = await Veiculo.findOrFail(params.id);

    await veiculo.delete();
  }
}

module.exports = VeiculoController;
