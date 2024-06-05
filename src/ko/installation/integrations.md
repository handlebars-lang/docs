# 통합

다음 패키지들은 다양한 환경에서 Handlebars를 통합합니다. 이 패키지들은 Handlebars 팀에 의해 **공식으로 지원되지 않습니
다**.

Webpack 환경에서 Handlebars를 사용할 수 있게 해주는 여러 Webpack 플러그인이 있습니다.

## Webpack: handlebars-loader

[handlebars-loader](https://github.com/pcardune/handlebars-loader) 는 [precompiled](./precompilation.html) 템플릿을
import 할 수 있게 해줍니다. handlebars 템플릿을 `template.handlebars` 파일에 작성하세요. 그리고

```js
const compiledTemplate = require("./template.handlebars");
```

또는

```js
import compiledTemplate from "./template.handlebars";
```

를 사용해 임포트하세요.

## Webpack: handlebars-webpack-plugin

[handlebars-webpack-plugin](https://github.com/sagold/handlebars-webpack-plugin)는 애플리케이션을 컴파일할 때 Handlebars
를 사용하여 HTML 페이지를 정적으로 빌드합니다.

## Webpack: html-bundler-webpack-plugin

[html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) 은
[Handlebars를 포함한](https://github.com/webdiscus/html-bundler-webpack-plugin#using-the-handlebars) 다양한 템플릿 엔진
을사용하여 템플릿을 렌더링하고 생성된 HTML에 스타일 및 스크립트를 번들링합니다.

## Babel: handlebars-inline-precompile

[babel-plugin-handlebars-inline-precompile](https://github.com/jamiebuilds/babel-plugin-handlebars-inline-precompile)
JavaScript 소스 코드에서 템플릿 리터럴로 제공되는 Handlebars 템플릿을 사전 컴파일합니다:

```js
import hbs from "handlebars-inline-precompile";
const compiledTemplate = hbs`{{name}}`;
```

설치 지침은 패키지의 문서를 참조하십시오.

## Browserify: hbsfy

[hbsfy](https://www.npmjs.com/package/hbsfy) 패키지를 사용하면 browserify 환경에서 사전 컴파일된 템플릿을 가져올 수 있습
니다：

```js
const compiledTemplate = require("./template.handlebars");
```

## Parcel：parcel-plugin-handlebars

Parcel용 옛 플러그인이 있습니다 : https://www.npmjs.com/package/parcel-plugin-handlebars

그러나 더 최신 상태인 여러 패키지 중 하나를 사용하는 것이 좋습니다：
https://www.npmjs.com/search?q=parcel-plugin-handlebars

가장 최신 버전： https://www.npmjs.com/package/@inventory/parcel-plugin-handlebars

## Parcel：parcel-plugin-handlebars-precompile

TODO: 여기에 텍스트를 작성하세요

https://www.npmjs.com/package/parcel-plugin-handlebars-precompile
