"use strict";

class LoginController {
  loginHandler({ request, response }) {
    const email = request.email;
    const password = request.password;
    response.json(await User.all())
  }
}

module.exports = LoginController;
