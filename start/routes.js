const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));

Route.post('/login', 'LoginController.create');
Route.post('/users', 'UserController.create');

Route.resource('clientes', 'ClienteController')
  .apiOnly()
  .middleware('auth');
Route.resource('formapagamentos', 'FormaPagamentoController')
  .apiOnly()
  .middleware('auth');
Route.resource('veiculos', 'VeiculoController')
  .apiOnly()
  .middleware('auth');
Route.resource('marcas', 'MarcaController')
  .apiOnly()
  .middleware('auth');
Route.resource('modelos', 'ModeloController')
  .apiOnly()
  .middleware('auth');
Route.resource('servicos', 'ServicoController')
  .apiOnly()
  .middleware('auth');
Route.resource('ordemservicos', 'OrdemServicoController')
  .apiOnly()
  .middleware('auth');
Route.resource('ordemservicoitens', 'OrdemServicoItenController')
  .apiOnly()
  .middleware('auth');
