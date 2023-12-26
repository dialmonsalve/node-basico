const fs = require("node:fs/promises");

fs.readFile("./1.os.js", "utf-8").then((text) => console.log(text));
