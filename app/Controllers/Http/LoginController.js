class LoginController {
  async create({ request, auth }) {
    const { username, password, refresh_token } = request.all();

    if (refresh_token) {
      const token = await auth.generateForRefreshToken(refresh_token);

      return token;
    }
    const token = auth.withRefreshToken().attempt(username, password);

    return token;
  }
}

module.exports = LoginController;
