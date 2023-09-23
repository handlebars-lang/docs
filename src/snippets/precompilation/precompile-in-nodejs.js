let template = "Handlebars <b>{{doesWhat}}</b> precompiled!";
let Handlebars = require("handlebars");
let compiled = Handlebars.precompile(template);
console.log(compiled);
