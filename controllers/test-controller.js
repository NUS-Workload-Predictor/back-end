var test = async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello world!</h1>'
};

var testNon = async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>In progress!</h1>'
}

module.exports = {
  'GET /': test,
  'GET /*': testNon
};
