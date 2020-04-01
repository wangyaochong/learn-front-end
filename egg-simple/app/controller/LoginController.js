'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = { ...ctx.request.body };

    // ctx.body = 'hi, egg';
  }
}
module.exports = LoginController;
