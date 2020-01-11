let template = "Handlebars <b>{{doesWhat}}</b> 预编译！";
let Handlebars = require("handlebars");
let compiled = Handlebars.precompile(template);
console.log(compiled);
