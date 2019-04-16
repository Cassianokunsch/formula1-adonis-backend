const Cliente = use('App/Models/Cliente');

class ClienteController {
  async index() {
    return Cliente.all();
  }

  async show({ params }) {
    const cliente = await Cliente.findOrFail(params.id);

    return cliente;
  }

  async store({ request }) {
    const data = request.only(['nome_cliente', 'telefone']);

    const cliente = await Cliente.create(data);

    return cliente;
  }

  async update({ params, request }) {
    const cliente = await Cliente.findOrFail(params.id);

    const data = request.only(['nome_cliente', 'telefone']);

    cliente.merge(data);

    await cliente.save();

    return cliente;
  }

  async destroy({ params }) {
    const cliente = await Cliente.findOrFail(params.id);

    await cliente.delete();
  }
}

module.exports = ClienteController;
