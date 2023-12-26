const fs = require("node:fs");

const stats = fs.statSync('./1.os.js')
console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size,
);