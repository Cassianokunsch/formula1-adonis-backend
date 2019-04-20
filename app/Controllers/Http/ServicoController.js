const Servico = use('App/Models/Servico');

class ServicoController {
  async index() {
    return Servico.all();
  }

  async show({ params }) {
    const servico = await Servico.findOrFail(params.id);

    return servico;
  }

  async store({ request }) {
    const data = request.only(['descricao_servico', 'preco']);
    const servico = await Servico.create(data);

    return servico;
  }

  async update({ params, request }) {
    const servico = await Servico.findOrFail(params.id);
    const data = request.only(['descricao_servico', 'preco']);
    servico.merge(data);
    await servico.save();

    return servico;
  }

  async destroy({ params }) {
    const servico = await Servico.findOrFail(params.id);

    await servico.delete();
  }
}

module.exports = ServicoController;
