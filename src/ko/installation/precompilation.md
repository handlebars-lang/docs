# 템플릿 사전 컴파일

Handlebars 사전 컴파일러를 사용하여 Handlebars 템플릿을 사전 컴파일하여 클라이언트에서 시간을 절약하고 handlebars 라이브
러리의 필요한 런타임 크기를 줄일 수 있습니다.

## 시작하기

우선, _Node.js 와 npm_ 이 필요합니다. 귀하의 운영 체제에서 이를 어떻게 설치하는지 알아보려면
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)로 이동하세요.

다음으로, 사전 컴파일러를 포함하는 Handlebars npm 패키지를 설치하세요.

```bash
npm install -g handlebars
```

템플릿이 포함된 `example.handlebars` 파일을 만드세요.：

<<< @/src/usage-examples/precompilation/example.handlebars

사전 컴파일러를 실행하세요.

```bash
handlebars example.handlebars -f example.precompiled.js
```

Handlebars 런타임과 사전 컴파일된 JavaScript를 include 하세요.

<<< @/src/usage-examples/precompilation/index.html

런타임은 [installation page](index.md#downloading-handlebars)에서도 다운로드할 수 있습니다.

## 최적화

템플릿을 사전 컴파일하므로 컴파일러에 여러 최적화를 적용할 수 있습니다. 첫 번째는 컴파일러에 알려진 도우미 목록을 지정할
수 있도록합니다.

```bash
handlebars <input> -f <output> -k each -k if -k unless
```

Handlebars 컴파일러는 이러한 도우미들에 대한 접근을 최적화하여 성능을 향상시킵니다. 모든 도우미가 컴파일 시점에 known 상
태일경우, `--knownOnly` 옵션은 가장 작은 생성된 코드를 제공하면서도 가장 빠른 실행을 제공합니다.

## 사용법

!HANDLEBARS_HELP!

사전 컴파일러의 일반 모드를 사용하는 경우, 결과 템플릿은 확장자를 제외한 상대적인 템플릿 이름으로 Handlebars.templates
객체에 저장됩니다. 이러한 템플릿은 템플릿과 같은 방식으로 실행될 수 있습니다. 간편 모드를 사용하는 경우, 사전 컴파일러는
단일 JavaScript 메소드를 생성합니다. 이 메소드를 실행하려면 `Handlebars.template()` 메소드에 전달해야하며, 결과 객체는일
반적으로 사용할 수 있습니다.

## NodeJS 내에서의 사전 컴파일 템플릿

NodeJS 내부에서 템플릿을 사전 컴파일하려면 "handlebars"를 명령 줄에서 호출하지 않고도 Handlebars.precompile을 사용할 수
있습니다. 이 함수의 결과인 문자열을 클라이언트에 전송하고, 클라이언트에서 다시 Handlebars.template으로 구문 분석할 수 있
습니다.

<<< @/src/usage-examples/precompilation/precompile-in-nodejs.js

결과는 다음과 같습니다：

<<< @/src/usage-examples/precompilation/precompile-in-nodejs.output.js

클라이언트 측에서는 다음과 같은 형식의 JavaScript 코드를 사용합니다.

```js
Handlebars.partials["test1"] = Handlebars.template({
  /** 컴파일된 ouput을 여기에 삽입하세요. **/
});
```

마지막으로, 이러한 템플릿을 JavaScript에서 동적으로 참조할 수 있습니다.

```js
var result = Handlebars.partials["test1"]({ name: "yourname" });
// result를 활용해 원하는 작업을 수행하세요.
```

## 통합

일부 npm 패키지는 Handlebars 사전 컴파일러를 빌드 시스템(예: Webpack, Browserify 등)에 통합하는 데 사용될 수 있습니다.
통합 페이지를 확인하세요.：

!button[더 알아보기: 통합](integrations.md)
