let template = "Handlebars <b>{{doesWhat}}</b> 사전 컴파일됨！";
let Handlebars = require("handlebars");
let compiled = Handlebars.precompile(template);
console.log(compiled);
