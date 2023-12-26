const os = require("node:os");

console.log("Información del sistema operativo");

console.log("--------------------");

console.log("Nombre del s.o", os.platform());
console.log("Versión del so", os.release());
console.log("Arquitectura del s.o", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria libre", os.freemem() /1024 /1024);
console.log("Total Memoria", os.totalmem() /1024 /1024 );
console.log("Uptime", os.uptime() /60 /60 );
// console.log('Nombre del s.o', os.platform());
// console.log('Nombre del s.o', os.platform());
