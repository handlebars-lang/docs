# 설치

프로그래밍 언어와 환경에 따라 Handlebars를 설치하는 방법이 다양합니다.

## npm 또는 yarn (권장)

Handlebars의 참조 구현은 JavaScript로 작성되어 있습니다. 일반적으로 npm이나 yarn을 사용하여 설치됩니다.：

```bash
npm install handlebars
```

或者

```bash
yarn add handlebars
```

아래처럼 Handlebars를 import하여 사용할 수 있습니다.:

```js
import Handlebars from "handlebars";
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
```

CommonJS 환경에서 Handlebars를 사용하는 경우 require를 사용할 수 있습니다.：

```js
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
```

::: tip

npm이나 yarn을 이용해 Handlebars를 사용하는 것을 권장합니다. 웹 브라우저에서 Handlebars 템플릿을 사용하려면 Webpack,
Browserify 또는 Parcel과 같은 빌드 엔진을 사용하는 것이 좋습니다.

[integrations](integrations.md) 페이지에는 템플릿을 자동으로 사전 컴파일하거나 다른 방식으로 Handlebars를 사용할 수 있도
록하는 로더들의 플러그인 목록이 포함되어 있습니다.

!button[더 알아보기: 통합](integrations.md)

:::

### npm 패키지의 브라우저 빌드

브라우저 빌드는 `node_modules/handlebars/dist/` 디렉토리에 있습니다. 브라우저에서 이를 사용할 수 있도록 만들려면 사용 중
인빌드 시스템에 따라 다르지만, 파일을 접근 가능한 위치로 복사하는 것으로 간단히 처리할 수 있습니다.

사전 컴파일러를 사용할 때 이 방법을 사용하는 것이 권장됩니다. 이는 사전 컴파일된 템플릿이 항상 런타임의 동일한 버전에 대
해실행되도록 보장합니다.

## Handlebars 다운로드

다음 다운로드는 커뮤니티를 위한 편의로 제공됩니다. production 목적으로는 부합하지 않으나, 빌드 엔진을 설정하지 않고도 빠
르게시작할 수 있습니다.

### 최신 릴리즈 （version {{$handlebarsVersions.latest}}）

<DownloadHandlebars>

브라우저에서 빠르게 시작해보기 위해서, 이 버전을 quick start로 사용할 수 있습니다.

</DownloadHandlebars>

<DownloadHandlebars :runtimeOnly="true">

이 버전은 브라우저에서 [사전 컴파일된 템플릿](precompilation.md)을 사용할 때 사용하세요. 이 버전에는 컴파일러가 포함되어
있지 않습니다.

</DownloadHandlebars>

### 릴리즈되지 않은 빌드

Handlebars의 모든 릴리즈된 버전과 CI 빌드는 S3에서 다운로드할 수 있습니다.
[build page](https://s3.amazonaws.com/builds.handlebarsjs.com/index.html)。

가장 최근에 통과된 마스터 빌드는 `handlebars-latest.js`로 명명되며, 마스터 브랜치에서 통과한 SHA는 각각
`handlebars-gitSHA.js` 파일을 생성합니다. 이들은 모두 CI를 통과하지만, 태그된 릴리즈 중 하나를 사용하는 것이 좋습니다.

**주의**: 빌드 페이지는 커뮤니티를 위한 편의성을 제공하기 위해 제공되었지만, production에서 Handlebars를 호스팅하는 데사
용해서는 안 됩니다.

## CDNs

Handlebars는 여러 무료 CDN에 호스팅되어 있습니다.

- [cdnjs](https://cdnjs.com/libraries/handlebars.js)
- [jsDelivr](http://www.jsdelivr.com/#!handlebarsjs)。향상된 사용법, 예를 들어
    [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#usage), 이 가능합니다.

## RubyGems

공식 Handlebars 빌드는 <https://rubygems.org/gems/handlebars-source>에서 사용할 수 있습니다.

## Bower, Component, Composer, jspm

다른 패키지 관리자를 사용하여 Handlebars를 활성화할 수 있습니다. 예를 들어,

- Bower (사용 중지됨)
- Component
- Composer
- jspm

자세한 사항은 <https://github.com/components/handlebars.js>를 참고하세요.

## 사용법

템플릿을 브라우저로 전달하려면 `<script>` 태그에 포함시킬 수 있습니다.

```html
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>
      {{title}}
    </h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
```

::: 경고: 항상 템플릿에 스크립트 태그를 사용하세요.

이 방법을 사용하는 경우 템플릿을 `<script>` 태그로 감싸야 합니다. 그렇지 않으면 브라우저가 템플릿의 일부를 제거하거나 수
정할수 있습니다. 다음을 참조하세요.
[“Unexpected markup in tables”](https://html.spec.whatwg.org/multipage/parsing.html#unexpected-markup-in-tables).

:::

Handlebars.compile를 사용하여 JavaScript에서 템플릿을 컴파일하세요.

```js
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
```

Handlebars 템플릿을 컨텍스트와 함께 실행하여 HTML을 가져옵니다.

```js
var context = { title: "My New Post", body: "This is my first post!" };
var html = template(context);
```

결과：

```html
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">This is my first post!</div>
</div>
```

### 템플릿 사전 컴파일하기

이전 예제에서는 Handlebars의 컴파일러 및 런타임 버전을 로드했습니다. 템플릿을 미리 컴파일하고 웹 사이트에 사전 컴파일된
버전을 포함하는 것이 훨씬 효율적입니다. 더 작은 런타임을 포함할 수 있으며 브라우저는 템플릿을 실행하기 전에 컴파일할 필
요가 없습니다.

!button[더 알아보기: 사전 컴파일](precompilation.html)

## Bower （사용이 중지되었습니다.）

::: 경고

[Bower는 사용이 중지되었습니다](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)

현재 Bower 버전의 Handlebars는 여전히 역 호환성을 위해 배포됩니다. 그러나 새 프로젝트를 설정하는 경우 더 이상 사용하지않
아야 합니다.

:::

## 다른 프로그래밍 언어

다양한 프로그래밍 언어에 대한 Handlebars 구현이 있습니다.

- [.Net](https://github.com/Handlebars-Net/Handlebars.Net)
- [C](https://github.com/jbboehr/handlebars.c)
- [Go](https://github.com/aymerick/raymond)
- [Java](https://github.com/jknack/handlebars.java)
- [PHP (LightnCandy)](https://github.com/zordius/lightncandy)
- [Python](https://github.com/wbond/pybars3)
- [Ruby](https://github.com/cowboyd/handlebars.rb)
- [Rust](https://github.com/sunng87/handlebars-rust)
