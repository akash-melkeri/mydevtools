exports.handler = async function (event, context) {
  let to_return = {
    name:"akash"
  }
  console.log(to_return);
  return {
    statusCode: 200,
    body: JSON.stringify(to_return ),
  };
};