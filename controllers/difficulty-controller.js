var difficulty = async (ctx, next) => {
  var modules = ctx.request.body;

  ctx.response.type = 'application/json';
  ctx.response.body = {

  };
}

module.exports = {
  'POST /difficulty': difficulty
};
