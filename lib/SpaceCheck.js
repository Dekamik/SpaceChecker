var bash = require("unix-cmd");

function parseDf(text) {
  var df = [];
  var lines = text.split("\n");

  for (var i = 0; i < lines.length; i++) {
    lines.replace(/\t+/, "\t");
    var columns = lines.split("\t");

    for (var j = 0; j < columns.length; j++) {
      df[i][j] = columns[j];
    }
  }
  return df;
}

module.exports = function () {
  var rawDf = bash.commandLine("df");
  return parseDf(rawDf);
};
