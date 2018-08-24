module.exports.run = (event, context, callback) => {
  console.log("This is a debug statement");
  callback(null, "This is a test only");
}
