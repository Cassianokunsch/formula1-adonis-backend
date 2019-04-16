const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));

Route.post('/sessions', 'SessionController.create');

Route.post('/users', 'UserController.create');

Route.resource('clientes', 'ClienteController').apiOnly();
