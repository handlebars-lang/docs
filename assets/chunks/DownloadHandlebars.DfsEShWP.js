import{d as n}from"./theme.DM1WBIpv.js";import{_ as r,c as a,o as t,j as s,t as l,r as d}from"./framework.BFa_AUiY.js";const o={props:{runtimeOnly:{type:Boolean,required:!1,defaultValue:!1}},data(){return{}},computed:{uncompressedTitle(){return"Download "+this.label},minifiedTitle(){return"Download minified "+this.label},label(){return this.$props.runtimeOnly?`Handlebars ${this.version} (runtime only)`:`Handlebars ${this.version} (compiler + runtime)`},uncompressedFilename(){return this.$props.runtimeOnly?`handlebars.runtime-v${this.version}.js`:`handlebars-v${this.version}.js`},minifiedFilename(){return this.$props.runtimeOnly?`handlebars.runtime.min-v${this.version}.js`:`handlebars.min-v${this.version}.js`},linkPrefix(){return"https://s3.amazonaws.com/builds.handlebarsjs.com/"},version(){return n.versions.latest}}},m={class:"download-handlebars"},c={class:"download-links"},u=["title","href"],h=["title","href"],f={class:"description"};function p(i,_,v,b,w,e){return t(),a("div",m,[s("div",c,[s("a",{title:e.uncompressedTitle,class:"uncompressed-download",href:e.linkPrefix+e.uncompressedFilename},l(e.label),9,u),s("a",{title:e.minifiedTitle,class:"minified-download",href:e.linkPrefix+e.minifiedFilename},"minified ",8,h)]),s("div",f,[d(i.$slots,"default",{},void 0,!0)])])}const j=r(o,[["render",p],["__scopeId","data-v-aeaad43d"]]);export{j as D};
