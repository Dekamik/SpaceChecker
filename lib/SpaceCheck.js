var bash = require("unix-cmd");

function parseDf(text) {

}

module.exports = function () {
  var rawDf = bash.commandLine("df");
  return parseDf(rawDf);
};
