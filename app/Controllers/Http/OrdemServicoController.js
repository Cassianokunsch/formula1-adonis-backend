const OrdemServico = use('App/Models/OrdemServico');
const Database = use('Database');
const OrdemServicoItem = use('App/Models/OrdemServicoIten');

class OrdemServicoController {
  async index() {
    return OrdemServico.all();
  }

  async show({ params }) {
    const dataOrdemServico = await OrdemServico.findOrFail(params.id);

    return dataOrdemServico;
  }

  async store({ request }) {
    const data_ordem_servico = request.only([
      'sub_total',
      'preco_total',
      'desconto',
      'veiculo_id',
      'forma_pagamento_id',
    ]);

    const { itens_servico } = request.only(['itens_servico']);
    const trx = await Database.beginTransaction();

    const itensToStore = [];

    try {
      const ordemServico = await OrdemServico.create(data_ordem_servico, trx);
      itens_servico.forEach((item) => {
        itensToStore.push({ ...item, ordem_servico_id: ordemServico.id });
      });
      await OrdemServicoItem.createMany(itensToStore, trx);
      await trx.commit();

      return ordemServico;
    } catch (e) {
      await trx.rollback();
      console.log(e);
      return e;
    }
  }

  async update({ params, request }) {
    const ordemServico = await OrdemServico.findOrFail(params.id);
    const data = request.only([
      'sub_total',
      'preco_total',
      'desconto',
      'veiculo_id',
      'forma_pagamento_id',
    ]);
    ordemServico.merge(data);
    await ordemServico.save();

    return ordemServico;
  }

  async destroy({ params }) {
    const ordemServico = await OrdemServico.findOrFail(params.id);

    await ordemServico.delete();
  }
}

module.exports = OrdemServicoController;
