import { BundledLanguageInfo, DynamicImportLanguageRegistration } from '@shikijs/types';

declare const bundledLanguagesInfo: BundledLanguageInfo[];
declare const bundledLanguagesBase: {
    [k: string]: DynamicImportLanguageRegistration;
};
declare const bundledLanguagesAlias: {
    [k: string]: DynamicImportLanguageRegistration;
};
type BundledLanguage = '1c' | '1c-query' | 'abap' | 'actionscript-3' | 'ada' | 'adoc' | 'angular-html' | 'angular-ts' | 'apache' | 'apex' | 'apl' | 'applescript' | 'ara' | 'asciidoc' | 'asm' | 'astro' | 'awk' | 'ballerina' | 'bash' | 'bat' | 'batch' | 'be' | 'beancount' | 'berry' | 'bibtex' | 'bicep' | 'blade' | 'bsl' | 'c' | 'c#' | 'c++' | 'cadence' | 'cairo' | 'cdc' | 'clarity' | 'clj' | 'clojure' | 'closure-templates' | 'cmake' | 'cmd' | 'cobol' | 'codeowners' | 'codeql' | 'coffee' | 'coffeescript' | 'common-lisp' | 'console' | 'coq' | 'cpp' | 'cql' | 'crystal' | 'cs' | 'csharp' | 'css' | 'csv' | 'cue' | 'cypher' | 'd' | 'dart' | 'dax' | 'desktop' | 'diff' | 'docker' | 'dockerfile' | 'dotenv' | 'dream-maker' | 'edge' | 'elisp' | 'elixir' | 'elm' | 'emacs-lisp' | 'erb' | 'erl' | 'erlang' | 'f' | 'f#' | 'f03' | 'f08' | 'f18' | 'f77' | 'f90' | 'f95' | 'fennel' | 'fish' | 'fluent' | 'for' | 'fortran-fixed-form' | 'fortran-free-form' | 'fs' | 'fsharp' | 'fsl' | 'ftl' | 'gdresource' | 'gdscript' | 'gdshader' | 'genie' | 'gherkin' | 'git-commit' | 'git-rebase' | 'gjs' | 'gleam' | 'glimmer-js' | 'glimmer-ts' | 'glsl' | 'gnuplot' | 'go' | 'gql' | 'graphql' | 'groovy' | 'gts' | 'hack' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hbs' | 'hcl' | 'hjson' | 'hlsl' | 'hs' | 'html' | 'html-derivative' | 'http' | 'hxml' | 'hy' | 'imba' | 'ini' | 'jade' | 'java' | 'javascript' | 'jinja' | 'jison' | 'jl' | 'js' | 'json' | 'json5' | 'jsonc' | 'jsonl' | 'jsonnet' | 'jssm' | 'jsx' | 'julia' | 'kotlin' | 'kql' | 'kt' | 'kts' | 'kusto' | 'latex' | 'lean' | 'lean4' | 'less' | 'liquid' | 'lisp' | 'lit' | 'llvm' | 'log' | 'logo' | 'lua' | 'luau' | 'make' | 'makefile' | 'markdown' | 'marko' | 'matlab' | 'md' | 'mdc' | 'mdx' | 'mediawiki' | 'mermaid' | 'mips' | 'mipsasm' | 'mmd' | 'mojo' | 'move' | 'nar' | 'narrat' | 'nextflow' | 'nf' | 'nginx' | 'nim' | 'nix' | 'nu' | 'nushell' | 'objc' | 'objective-c' | 'objective-cpp' | 'ocaml' | 'pascal' | 'perl' | 'perl6' | 'php' | 'plsql' | 'po' | 'polar' | 'postcss' | 'pot' | 'potx' | 'powerquery' | 'powershell' | 'prisma' | 'prolog' | 'properties' | 'proto' | 'protobuf' | 'ps' | 'ps1' | 'pug' | 'puppet' | 'purescript' | 'py' | 'python' | 'ql' | 'qml' | 'qmldir' | 'qss' | 'r' | 'racket' | 'raku' | 'razor' | 'rb' | 'reg' | 'regex' | 'regexp' | 'rel' | 'riscv' | 'rs' | 'rst' | 'ruby' | 'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'sdbl' | 'sh' | 'shader' | 'shaderlab' | 'shell' | 'shellscript' | 'shellsession' | 'smalltalk' | 'solidity' | 'soy' | 'sparql' | 'spl' | 'splunk' | 'sql' | 'ssh-config' | 'stata' | 'styl' | 'stylus' | 'svelte' | 'swift' | 'system-verilog' | 'systemd' | 'talon' | 'talonscript' | 'tasl' | 'tcl' | 'templ' | 'terraform' | 'tex' | 'tf' | 'tfvars' | 'toml' | 'ts' | 'ts-tags' | 'tsp' | 'tsv' | 'tsx' | 'turtle' | 'twig' | 'typ' | 'typescript' | 'typespec' | 'typst' | 'v' | 'vala' | 'vb' | 'verilog' | 'vhdl' | 'vim' | 'viml' | 'vimscript' | 'vue' | 'vue-html' | 'vy' | 'vyper' | 'wasm' | 'wenyan' | 'wgsl' | 'wiki' | 'wikitext' | 'wit' | 'wl' | 'wolfram' | 'xml' | 'xsl' | 'yaml' | 'yml' | 'zenscript' | 'zig' | 'zsh' | '文言';
declare const bundledLanguages: Record<BundledLanguage, DynamicImportLanguageRegistration>;

export { type BundledLanguage, bundledLanguages, bundledLanguagesAlias, bundledLanguagesBase, bundledLanguagesInfo };
