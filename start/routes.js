const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));

Route.post('/sessions', 'SessionController.create');

Route.post('/users', 'UserController.create');

Route.resource('clientes', 'ClienteController').apiOnly();
Route.resource('formapagamentos', 'FormaPagamentoController').apiOnly();
Route.resource('veiculos', 'VeiculoController').apiOnly();
Route.resource('marcas', 'MarcaController').apiOnly();
Route.resource('modelos', 'ModeloController').apiOnly();
Route.resource('servicos', 'ServicoSController').apiOnly();
