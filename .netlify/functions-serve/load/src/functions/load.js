// functions/load.js
exports.handler = async function(event, context) {
  let to_return = {"name":"akash"};
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(to_return)
  };
};
//# sourceMappingURL=load.js.map
