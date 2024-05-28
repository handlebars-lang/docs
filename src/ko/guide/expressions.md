# 표현식(Expressions)

::: v-pre

Handlebars 표현식은 Handlebars 템플릿의 기본 단위입니다. 이 표현식은 `{{mustache}}` 안에서 단독으로 사용할 수도 있고,
Handlebars 헬퍼에 전달할 수도 있으며, 해시 인수의 값으로 사용할 수도 있습니다.

:::

## 기본 사용법

Handlebars 표현식은 중괄호 `{{}}`로 둘러싸인 내용입니다. 아래 템플릿에서 `firstname`은 중괄호로 둘러싸인 변수로, 이는 표
현식이라고 합니다.

<ExamplePart examplePage="/ko/examples/simple-expressions.md" show="template" />

아래 입력 객체를 템플릿에 적용하면:

<ExamplePart examplePage="/ko/examples/simple-expressions.md" show="input" />

표현식이 컴파일되어 다음과 같은 출력을 생성합니다:

<ExamplePart examplePage="/ko/examples/simple-expressions.md" show="output" />

## 경로 표현식

Handlebars 표현식은 점으로 구분된 경로가 될 수 있습니다.

<ExamplePart examplePage="/ko/examples/path-expressions-dot.md" show="template" />

이 표현식은 입력 객체에서 `person` 속성을 찾아, 그 안의 `firstname` 및 `lastname` 속성을 차례로 찾습니다.

아래 입력 객체를 템플릿에 전달하면：

<ExamplePart examplePage="/ko/examples/path-expressions-dot.md" show="input" />

출력은 다음과 같이 생성됩니다：

<ExamplePart examplePage="/ko/examples/path-expressions-dot.md" show="output" />

Handlebars는 또한 사용이 중지된 `/` 구문을 지원하므로, 위의 템플릿을 다음과 같이 작성할 수도 있습니다:

<ExamplePart examplePage="/ko/examples/path-expressions-slash.md" show="template" />

## 컨텍스트 변경

`#with` 및 `#each`와 같은 일부 헬퍼는 중첩된 객체 내부로 접근할 수 있게 해줍니다. 경로에 `../` 세그먼트를 포함하면
Handlebars는 부모 컨텍스트로 돌아갑니다.

<ExamplePart examplePage="/ko/examples/path-expressions-dot-dot" show="template" />

이름이 코멘트의 컨텍스트에서 출력되더라도, 여전히 메인 컨텍스트(루트 객체)로 돌아가서 접두사를 가져올 수 있습니다.

::: v-pre

::: 경고

`../`가 처리되는 정확한 값은 블록을 호출하는 헬퍼에 따라 다릅니다. 컨텍스트가 변경될 때만 `../`가 필요합니다.
`{{#each}}`와 같은 헬퍼의 자식들은 `../`를 사용 가능하지만, `{{#if}}`와 같은 헬퍼의 자식들은 그렇지 않습니다.

```handlebars
{{permalink}}
{{#each comments}}
  {{../permalink}}

  {{#if title}}
    {{../permalink}}
  {{/if}}
{{/each}}
```

이 예제에서 모든 위의 참조는 다른 블록 내에 위치해 있음에도 불구하고 동일한 접두사 값을 참조합니다. 이 동작은
Handlebars4에서 새롭게 도입되었습니다.
[릴리즈 노트](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md) 에서 이전 동작과 마이그레이
션 계획에 대해 논의하고 있습니다. Handlebars는 또한 헬퍼와 데이터 필드 간의 이름 충돌을 `this` 참조를 통해 해결할 수 있
습니다:

:::

## 리터럴 세그먼트

식별자는 다음을 제외한 모든 유니코드 문자일 수 있습니다:

_Whitespace_ `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `` ` `` `{` `|` `}`
`~`

또한, `true`, `false`, `null` 및 `undefined` 단어는 경로 표현식의 첫 번째 부분에서만 허용됩니다.

유효한 식별자가 아닌 속성을 참조하려면 세그먼트 리터럴 표기법인 `[`를 사용할 수 있습니다. 경로 리터럴에서는 닫는 `]`를포
함할 수 없지만, 다른 모든 문자는 허용됩니다.

JavaScript 스타일 문자열인 `"` 및 `'`도 `[` 쌍 대신 사용할 수 있습니다.

<ExamplePart examplePage="/ko/examples/literal-segments.md" show="template" />

## HTML 이스케이프

::: v-pre

Handlebars에서 `{{expression}}`이 반환하는 값은 HTML 이스케이프됩니다. 예를 들어, 표현식에 `&`가 포함되어 있으면, 반환된
HTML 이스케이프된 출력은 `&amp;`로 생성됩니다. Handlebars가 값을 이스케이프하지 않도록 하려면 "트리플 스태시"인 `{{{`를
사용하세요.

:::

아래 템플릿에서 HTML 이스케이프된 출력과 원본 출력을 생성하는 방법을 배울 수 있습니다.

<ExamplePart examplePage="/ko/examples/html-escaping.md" show="template" />

특수 문자를 템플릿에 전달하는 경우

<ExamplePart examplePage="/ko/examples/html-escaping.md" show="input" />

::: v-pre

"트리플 스태시"(`{{{`)로 둘러싸인 표현식은 원본 출력을 생성합니다. 그렇지 않으면 HTML 이스케이프된 출력이 아래와 같이 생
성됩니다.

:::

<ExamplePart examplePage="/ko/examples/html-escaping.md" show="output" />

## 헬퍼

헬퍼는 Handlebars 언어 자체의 일부가 아닌 기능을 구현하는 데 사용할 수 있습니다.

헬퍼는 `Handlebars.registerHelper`를 통해 런타임에 등록할 수 있습니다. 예를 들어 문자열의 모든 문자를 대문자로 변환하려
면 다음과 같이 할 수 있습니다.

<ExamplePart examplePage="/ko/examples/helper-simple.md" show="preparationScript" />

Handlebars 헬퍼 호출은 단순한 식별자 뒤에 공백으로 구분된 0개 이상의 매개변수가 따라오는 형태입니다. 각 매개변수는 "기본
사용법"에서 설명한 대로 평가되는 Handlebars 표현식입니다.

<ExamplePart examplePage="/ko/examples/helper-simple.md" show="template" />

이 경우 `loud`는 헬퍼의 이름이고, `lastname`은 헬퍼에 대한 매개변수입니다. 템플릿은 입력의 `lastname` 속성을 대문자로 변
환합니다.

<Flex>
<ExamplePart examplePage="/ko/examples/helper-simple.md" show="input" />
<ExamplePart examplePage="/ko/examples/helper-simple.md" show="output" />
</Flex>

### 헬퍼 반환 값의 HTML 이스케이프 방지

헬퍼가 `Handlebars.SafeString`의 인스턴스를 반환하면 헬퍼가 `{{` 대신 `{{{`로 호출되더라도 반환 값은 이스케이프되지 않습
니다. 모든 매개변수가 `Handlebars.escapeExpression`을 사용하여 올바르게 이스케이프되도록 해야 합니다.

<ExamplePart examplePage="/ko/examples/helper-safestring.md" show="preparationScript" />

### 다중 매개변수를 가진 헬퍼

두 개의 매개변수를 가진 헬퍼의 또 다른 예를 보겠습니다:

<ExamplePart examplePage="/ko/examples/helper-multiple-parameters.md" show="template" />

이 경우 Handlebars는 link 헬퍼에 두 개의 매개변수를 전달합니다: 문자열 `See Website`와 아래 제공된 입력 `people` 객체의
`people.url` 값입니다.

<ExamplePart examplePage="/ko/examples/helper-multiple-parameters.md" show="input" />

헬퍼 함수 `link`는 스크립트에서 설명된 대로 하이퍼링크를 생성하는 데 사용됩니다.

<ExamplePart examplePage="/ko/examples/helper-multiple-parameters.md" show="preparationScript" />

입력 매개변수를 사용하여 출력을 얻을 수 있습니다:

<ExamplePart examplePage="/ko/examples/helper-multiple-parameters.md" show="output" />

위 예제에서, `people.text` 값에 따라 동적인 텍스트를 사용하는 동일한 헬퍼를 사용할 수 있습니다:

<Flex>
<ExamplePart examplePage="/ko/examples/helper-dynamic-parameters.md" show="template" />
<ExamplePart examplePage="/ko/examples/helper-dynamic-parameters.md" show="input" />
</Flex>

### 리터럴 인수

헬퍼 호출에는 매개변수 인수 또는 해시 인수로 리터럴 값을 전달할 수도 있습니다. 지원되는 리터럴에는 숫자, 문자열, `true`,
`false`, `null` 및 `undefined`가 포함됩니다:

<Flex>
<ExamplePart examplePage="/ko/examples/helper-literals" show="template" />
</Flex>

### 해시 인수를 가진 헬퍼

Handlebars는 최종 매개변수로 헬퍼에 해시 인수와 같은 추가 메타데이터를 제공합니다.

<ExamplePart examplePage="/ko/examples/helper-hash-arguments.md" show="template" />

이 템플릿에서 마지막 매개변수 `href=people.url class="people"`는 헬퍼에 전달된 해시 인수입니다.

해당 해시 인수의 키는 각 단순 식별자여야 하며, 값은 핸들바 표현식이어야 합니다. 이는 값이 단순 식별자, 경로 또는 문자열
이 될 수 있음을 의미합니다.

아래 입력을 템플릿에 전달하면 `person.url`의 값을 `person` 객체에서 가져올 수 있습니다.

<ExamplePart examplePage="/ko/examples/helper-hash-arguments.md" show="input" />

예시 스크립트에 설명된 것처럼, 해시 인수는 도우미 내에서 추가 처리할 수 있도록 마지막 매개변수인 `options`에서 얻을 수있
습니다.

<ExamplePart examplePage="/ko/examples/helper-hash-arguments.md" show="preparationScript" />

위 예시의 출력은 아래와 같이 생성됩니다.

<ExamplePart examplePage="/ko/examples/helper-hash-arguments.md" show="output" />

Handlebars는 블록의 템플릿으로 헬퍼를 호출하는 메커니즘도 제공합니다. 블록 헬퍼는 선택한 컨텍스트로 해당 블록을 0번 이상
호출할 수 있습니다.

!button[더 알아보기: 블록 헬퍼](block-helpers.html)

### 헬퍼 호출과 속성 조회의 구분

입력 객체의 속성과 동일한 이름으로 헬퍼가 등록된 경우, 헬퍼가 입력 속성보다 우선합니다. 입력 속성을 해결하려면 이름 앞에
`./` 또는 `this.` (또는 이제는 사용되지 않는 `this/`)를 접두어로 붙일 수 있습니다.

<Flex>
<ExamplePart examplePage="/ko/examples/helper-data-name-conflict" show="template" />
<ExamplePart examplePage="/ko/examples/helper-data-name-conflict" show="input" />
<ExamplePart examplePage="/ko/examples/helper-data-name-conflict" show="preparationScript" />
</Flex>

## 하위 표현식

Handlebars는 하위 표현식을 지원하여 단일 머스태시 내에서 여러 헬퍼를 호출하고 내부 헬퍼 호출의 결과를 외부 헬퍼에 인수로
전달할 수 있습니다. 하위 표현식은 괄호로 구분됩니다.

```handlebars
{{outer-helper (inner-helper 'abc') 'def'}}
```

이 경우, `inner-helper`는 문자열 인수 `'abc'`로 호출되며 `inner-helper` 함수가 반환하는 값이 `outer-helper`의 첫 번째인
수로 전달됩니다(그리고 `'def'`는 `outer-helper`의 두 번째 인수로 전달됩니다).

## 공백 제어

템플릿 공백은 중괄호 옆에 `~` 문자를 추가하여 어느 쪽에서든 생략할 수 있습니다. 적용되면 해당 측의 모든 공백이 첫 번째핸
들바 표현식 또는 비공백 문자까지 제거됩니다.

```handlebars
{{#each nav ~}}
  <a href="{{url}}">
    {{~#if test}}
      {{~title}}
    {{~^~}}
      Empty
    {{~/if~}}
  </a>
{{~/each}}
```

이 컨텍스트는:

```js
{
  nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }];
}
```

개행과 포맷팅 공백 없이 출력됩니다:

```html
<a href="foo">bar</a><a href="bar">Empty</a>
```

이는 기본적으로 "독립형" 헬퍼 (블록 헬퍼, 주석 또는 partial 및 공백만 있는) 줄을 제거하는 동작을 확장합니다.

```handlebars
{{#each nav}}
  <a href="{{url}}">
    {{#if test}}
      {{title}}
    {{^}}
      Empty
    {{/if}}
  </a>
{{~/each}}
```

다음과 같이 렌더링됩니다:

```html
<a href="foo"> bar </a> <a href="bar"> Empty </a>
```

## 핸들바 표현식 이스케이프

::: v-pre

핸들바 콘텐츠는 인라인 이스케이프 또는 원시 블록 도우미 중 하나로 이스케이프할 수 있습니다. 인라인 이스케이프는 머스태시
블록 앞에 `\`를 접두어로 붙여 생성합니다. 원시 블록은 `{{{{` 머스태시 괄호를 사용하여 생성합니다.

:::

```handlebars
\{{escaped}}
{{{{raw}}}}
  {{escaped}}
{{{{/raw}}}}
```

원시 블록은 다른 [블록 헬퍼](block-helpers.html) 와 동일한 방식으로 작동하지만 자식 콘텐츠는 리터럴 문자열로 처리됩니다.
