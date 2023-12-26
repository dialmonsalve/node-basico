const path = require('node:path')

console.log(path.sep);

const base = path.basename('/tmp/secret/password.txt', '.txt')

console.log(base)