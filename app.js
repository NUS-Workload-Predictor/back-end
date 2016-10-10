const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();
const controller = require('./controller-manager');
const config = require('./config/config');
const constant = require('./config/constant');

app.use(controller(router, config.controllers_dir));
app.use(router.allowedMethods());
app.listen(config.port);
console.log('app started at port 3000 ...');
