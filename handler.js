//module.exports.run = (event, context, callback) => {
  //console.log("This is a debug statement");
  //callback(null, "This is a test only");
//}

//instead of using callback from the top, we can also return Promises as well
// module.exports.run = (event) => {
//   return Promise.resolve("This is a test only");
// }

//Since node 8 support async wait
module.exports.run = async (event) => {
  return "This is a test only";
}
