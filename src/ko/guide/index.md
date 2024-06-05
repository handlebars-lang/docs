# 소개

## Handlebars란 무엇인가요?

Handlebars는 간편한 **템플릿 언어**입니다.

템플릿과 입력 객체를 사용하여 HTML 또는 다른 텍스트 형식을 생성합니다. Handlebars 템플릿은 일반 텍스트와 유사하며,
Handlebars 표현식이 포함되어 있습니다.

<ExamplePart examplePage="/ko/examples/simple-expressions" show="template"/>

Handlebars 표현식은 `{{`와 일부 내용, 그리고 `}}`로 구성됩니다. 템플릿이 실행되면 이러한 표현식은 입력 객체의 값으로 대
체됩니다.

!button[더 알아보기: 표현식](expressions.html)

## 설치

Handlebars를 테스트하는 가장 빠른 방법은 _CDN_ 에서 로드하여 HTML 파일에 포함시키는 것입니다.

<<< @/src/usage-examples/compiler-and-runtime/simple-console-out.html

::: 경고

이 방법은 작은 페이지와 테스트용으로 사용할 수 있습니다. 실제 운영 시스템을 대상으로 할 때 사용할 수 있는 여러 다른 방법
이 있습니다.

!button[더 알아보기: 설치](../installation/index.md)

:::

# 언어 기능

## 간단한 표현식

앞서 설명한 것처럼, 다음 템플릿은 두 개의 Handlebars 표현식을 정의합니다.

<ExamplePart examplePage="/ko/examples/simple-expressions" show="template"/>

입력 객체에 적용하면:

<ExamplePart examplePage="/ko/examples/simple-expressions" show="input"/>

표현식은 해당 속성으로 대체됩니다. 결과는 다음과 같습니다:

<ExamplePart examplePage="/ko/examples/simple-expressions" show="output"/>

## 중첩된 입력 객체

때때로 입력 객체는 다른 객체나 배열을 포함합니다. 예를 들어:

<ExamplePart examplePage="/ko/examples/path-expressions-dot" show="input" />

이 경우, 점 표기법을 사용하여 중첩된 속성에 접근할 수 있습니다.

<ExamplePart examplePage="/ko/examples/path-expressions-dot" show="template"/>

!button[더 알아보기: 표현식](./expressions.md)

일부 내장 헬퍼는 현재 컨텍스트를 중첩된 객체로 변경할 수 있습니다. 그런 다음 이 객체를 루트 객체처럼 접근할 수 있습니다.

## 평가 컨텍스트

내장 블록 헬퍼 `each`와 `with`는 현재 평가 컨텍스트를 변경할 수 있게 합니다.

`with` 헬퍼는 객체 속성으로 들어가서 해당 속성에 접근할 수 있게 합니다.

<Flex>
<ExamplePart examplePage="/ko/examples/builtin-helper-with-block" show="template"/>
<ExamplePart examplePage="/ko/examples/builtin-helper-with-block" show="input"/>
</Flex>

`each` 헬퍼는 배열을 반복하며, 각 객체의 속성에 간단한 Handlebars 표현식을 통해 접근할 수 있게 합니다.

<Flex>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="template"/>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="input"/>
</Flex>

!button[더 알아보기: 내장 헬퍼](./builtin-helpers.md)

## 템플릿 주석

::: v-pre

코드에서 주석을 사용하는 것처럼 Handlebars 코드에서도 주석을 사용할 수 있습니다. 일반적으로 일부 논리가 있기 때문에 이는
좋은 습관입니다.

주석은 결과 출력에 포함되지 않습니다. 주석을 출력에 포함하고 싶다면 HTML 주석을 사용하면 됩니다.

`}}` 또는 다른 Handlebars 토큰을 포함해야 하는 주석은 `{{!-- --}}` 구문을 사용해야 합니다.

:::

<ExamplePart examplePage="/ko/examples/comments" show="template"/>

## 커스텀 헬퍼

Handlebars 헬퍼는 템플릿의 어느 컨텍스트에서도 접근할 수 있습니다. `Handlebars.registerHelper` 메서드를 사용하여 헬퍼를
등록할 수 있습니다.

<Flex>
<ExamplePart examplePage="/ko/examples/helper-simple" show="template" />
<ExamplePart examplePage="/ko/examples/helper-simple" show="preparationScript" />
</Flex>

헬퍼는 현재 컨텍스트를 함수의 `this` 컨텍스트로 받습니다.

<Flex>
<ExamplePart examplePage="/ko/examples/helper-this-context" show="template" />
<ExamplePart examplePage="/ko/examples/helper-this-context" show="preparationScript" />
</Flex>

## 블록 헬퍼

블록 표현식을 사용하면 현재 컨텍스트와 다른 컨텍스트로 템플릿의 섹션을 호출하는 헬퍼를 정의할 수 있습니다. 이러한 블록헬
퍼는 헬퍼 이름 앞에 `#`를 붙여 식별하며, 동일한 이름의 닫는 머스태시 `/`가 필요합니다. HTML 목록을 생성하는 헬퍼를 살펴
보겠습니다:

<ExamplePart examplePage="/ko/examples/helper-block" show="preparationScript" />

이 예제는 HTML 목록을 생성하기 위한 `list`라는 이름의 헬퍼를 만듭니다. 헬퍼는 첫 번째 매개변수로 `people`을 받고, 두 번
째 매개변수로 `options` 해시를 받습니다. `options` 해시는 `fn`이라는 속성을 포함하며, 이를 일반 Handlebars 템플릿을 호출
하듯이 호출할 수 있습니다.

템플릿이 실행되면 다음과 같이 렌더링됩니다:

<ExamplePart examplePage="/ko/examples/helper-block" show="output" />

블록 헬퍼는 더 많은 기능을 가지고 있으며, `if` 헬퍼가 사용하는 `else` 섹션을 생성할 수도 있습니다.

블록 헬퍼의 내용을 `options.fn(context)`로 호출할 때 이스케이프되므로 Handlebars는 블록 헬퍼의 결과를 이스케이프하지 않
습니다. 이스케이프할 경우 내부 콘텐츠가 이중으로 이스케이프되기 때문입니다.

!button[더 알아보기: 블록 헬퍼](block-helpers.html)

## HTML 이스케이프

::: v-pre

원래 HTML을 생성하기 위해 설계되었기 때문에 Handlebars는 `{{expression}}`이 반환하는 값을 이스케이프합니다. 값이 이스케
이프되지않도록 하려면 "트리플 스태시"인 `{{{`를 사용하세요.

:::

<ExamplePart examplePage="/ko/examples/html-escaping" show="template" />

두 번째 줄의 특수 문자는 이스케이프됩니다:

<ExamplePart examplePage="/ko/examples/html-escaping" show="output" />

Handlebars는 `Handlebars.SafeString`을 이스케이프하지 않습니다. 자체 HTML을 생성하는 헬퍼를 작성하는 경우, 일반적으로
`new Handlebars.SafeString(result)`를 반환하고 싶을 것입니다. 이러한 상황에서는 매개변수를 수동으로 이스케이프해야 합니
다.

<ExamplePart examplePage="/ko/examples/helper-safestring" show="preparationScript" />

이 코드는 전달된 매개변수를 이스케이프하지만, 응답을 안전한 것으로 표시하므로 Handlebars는 "트리플 스태시"를 사용하지 않
더라도이를 이스케이프하지 않습니다.

::: 경고

Handlebars는 JavaScript 문자열을 이스케이프하지 않습니다. 인라인 이벤트 핸들러와 같은 JavaScript를 생성하는 데
Handlebars를 사용하면 크로스 사이트 스크립팅 취약성이 발생할 수 있습니다.

:::

## 부분 템플릿

Handlebars 부분 템플릿은 공유 템플릿을 생성하여 코드 재사용을 허용합니다. `registerPartial` 메서드를 사용하여 부분 템플
릿을 등록할 수 있습니다:

<ExamplePart examplePage="/ko/examples/partials/register" show="preparationScript" />

다음의 템플릿과 입력은

<Flex>
<ExamplePart examplePage="/ko/examples/partials/register" show="template" />
<ExamplePart examplePage="/ko/examples/partials/register" show="input" />
</Flex>

다음과 같은 결과를 제공합니다:

<ExamplePart examplePage="/ko/examples/partials/register" show="output" />

!button[더 알아보기: 부분 템플릿](partials.html)

## 내장 헬퍼

Handlebars는 if 조건문과 each 반복자와 같은 다양한 내장 헬퍼를 제공합니다.

!button[더 알아보기: 내장 헬퍼](builtin-helpers.html)

## API 레퍼런스

Handlebars는 애플리케이션과 헬퍼를 위한 다양한 API와 유틸리티 메서드를 제공합니다.

!button[더 알아보기: API 레퍼런스](/ko/api-reference/)
