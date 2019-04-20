const FormaPagamento = use('App/Models/FormaPagamento');

class FormaPagamentoController {
  async index() {
    return FormaPagamento.all();
  }

  async show({ params }) {
    const formaPagamento = await FormaPagamento.findOrFail(params.id);

    return formaPagamento;
  }

  async store({ request }) {
    const data = request.only(['descricao_formapagamento']);
    const formaPagamento = await FormaPagamento.create(data);

    return formaPagamento;
  }

  async update({ params, request }) {
    const formaPagamento = await FormaPagamento.findOrFail(params.id);
    const data = request.only(['descricao_formapagamento']);
    formaPagamento.merge(data);
    await formaPagamento.save();

    return formaPagamento;
  }

  async destroy({ params }) {
    const formaPagamento = await FormaPagamento.findOrFail(params.id);
    await formaPagamento.delete();
  }
}

module.exports = FormaPagamentoController;
