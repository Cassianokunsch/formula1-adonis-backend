const OrdemServicoIten = use('App/Models/OrdemServicoIten');

class OrdemServicoItenController {
  async index() {
    return OrdemServicoIten.all();
  }

  async show({ params }) {
    const ordemServicoIten = await OrdemServicoIten.findOrFail(params.id);

    return ordemServicoIten;
  }

  async store({ request }) {
    const data = request.only(['preco_item', 'ordem_servico_id', 'servico_id']);
    const ordemServicoIten = await OrdemServicoIten.create(data);

    return ordemServicoIten;
  }

  async update({ params, request }) {
    const ordemServicoIten = await OrdemServicoIten.findOrFail(params.id);
    const data = request.only(['preco_item', 'ordem_servico_id', 'servico_id']);
    ordemServicoIten.merge(data);
    await ordemServicoIten.save();

    return ordemServicoIten;
  }

  async destroy({ params }) {
    const ordemServicoIten = await OrdemServicoIten.findOrFail(params.id);

    await ordemServicoIten.delete();
  }
}

module.exports = OrdemServicoItenController;
