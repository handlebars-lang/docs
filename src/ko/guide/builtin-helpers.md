# 내장 헬퍼(Built-in Helpers)

## #if

`if` 헬퍼를 사용하여 조건부로 블록을 렌더링할 수 있습니다. 인수가 `false`, `undefined`, `null`, `""`, `0`, 또는 `[]`를반
환하면 Handlebars는 블록을 렌더링하지 않습니다.

<Example examplePage="/ko/examples/builtin-helper-if-block.md" show="template" />

다음 입력을 위 템플릿에 전달하면

<Example examplePage="/ko/examples/builtin-helper-if-block.md" show="input" />

다음과 같은 결과를 생성합니다:

<Example examplePage="/ko/examples/builtin-helper-if-block.md" show="output" />

입력이 빈 JSON 객체 `{}`이면, `author`는 `undefined`가 되어 `if` 조건이 실패하고 다음과 같은 출력이 생성됩니다:

```html
<div class="entry"></div>
```

블록 표현식을 사용할 때, 표현식이 거짓 값을 반환하면 실행할 템플릿 섹션을 지정할 수 있습니다. `else`로 표시된 이 섹션은
"else 섹션"이라고 합니다.

<Example examplePage="/ko/examples/builtin-helper-ifelse-block.md" show="template" />

### includeZero

`includeZero=true` 옵션을 설정하면 조건을 비어 있지 않은 것으로 처리할 수 있습니다. 이는 0이 긍정 경로로 처리될지 부정경
로로 처리될지를 효과적으로 결정합니다.

```handlebars
{{#if 0 includeZero=true}}
  <h1>렌더링됩니다</h1>
{{/if}}
```

### 서브 표현식

헬퍼는 템플릿에 사용자 정의 로직을 추가하기 위해 제안된 방법입니다. 원하는 헬퍼를 작성하여 서브 표현식에서 사용할 수 있
습니다.

예를 들어, 변수가 초기화되었는지 확인할 때 내장 #if 검사는 빈 컬렉션에 대해 false를 반환하므로 적절하지 않을 수 있습니다
(참조: [Utils.isEmpty](/ko/api-reference/utilities.html#handlebars-utils-isempty-value)).

"undefined"를 확인하는 헬퍼는 다음과 같이 작성할 수 있습니다:

<Example examplePage="/ko/examples/builtin-helper-if-subexpression.md" show="preparationScript" />

그런 다음 서브 표현식에서 헬퍼를 사용하세요:

<Example examplePage="/ko/examples/builtin-helper-if-subexpression.md" show="template" />

## #unless

`unless` 헬퍼는 `if` 헬퍼의 반대로 사용할 수 있습니다. 표현식이 거짓 값을 반환하면 해당 블록이 렌더링됩니다.

<Example examplePage="/ko/examples/builtin-helper-unless-block.md" show="template" />

현재 컨텍스트에서 `license`를 조회한 결과가 거짓 값이면 Handlebars는 경고를 렌더링합니다. 그렇지 않으면 아무것도 렌더링
하지 않습니다.

## #each

내장 `each` 헬퍼를 사용하여 리스트를 반복할 수 있습니다. 블록 내부에서는 `this`를 사용하여 반복 중인 요소를 참조할 수 있
습니다.

<Example examplePage="/ko/examples/builtin-helper-each-block.md" show="template" />

이 컨텍스트가 사용될 때:

<Example examplePage="/ko/examples/builtin-helper-each-block.md" show="input" />

다음과 같은 결과를 생성합니다:

<Example examplePage="/ko/examples/builtin-helper-each-block.md" show="output" />

`this` 표현식을 사용하여 현재 컨텍스트를 참조할 수 있습니다.

리스트가 비어 있을 때만 표시될 `else` 섹션을 선택적으로 제공할 수 있습니다.

<Example examplePage="/ko/examples/builtin-helper-eachelse-block.md" show="template" />

::: v-pre

`each`에서 항목을 반복할 때, {{@index}}를 통해 현재 반복 인덱스를 참조할 수 있습니다.

```handlebars
{{#each array}} {{@index}}: {{this}} {{/each}}
```

또한 객체를 반복할 때 `{{@key}}`는 현재 키 이름을 참조합니다:

```handlebars
{{#each object}} {{@key}}: {{this}} {{/each}}
```

:::

배열을 반복할 때 첫 번째와 마지막 단계는 [`@first`](../api-reference/data-variables.md#first) 와
[`@last`](../api-reference/data-variables.md#last) 변수를 통해 표시됩니다.

::: v-pre

중첩된 `each` 블록은 깊이 기반 경로를 통해 반복 변수를 액세스할 수 있습니다. 예를 들어, 부모 인덱스에 접근하려면
`{{@../index}}`를 사용할 수 있습니다.

:::

## #with

`with` 헬퍼는 템플릿 부분의 평가 컨텍스트를 변경할 수 있게 해줍니다.

<Example examplePage="/ko/examples/builtin-helper-with-block.md" show="template" />

이 컨텍스트가 사용될 때:

<Example examplePage="/ko/examples/builtin-helper-with-block.md" show="input" />

다음과 같은 결과를 생성합니다:

<Example examplePage="/ko/examples/builtin-helper-with-block.md" show="output" />

`with`는 블록 매개변수와 함께 사용하여 현재 블록에서 알려진 참조를 정의할 수도 있습니다. 위 예제는 다음과 같이 변환될 수
있습니다:

<Example examplePage="/ko/examples/builtin-helper-with-block-param.md" show="template" />

이렇게 하면 복잡한 템플릿이 `../` 깊이 참조보다 더 명확한 코드를 제공할 수 있습니다.

::: v-pre

전달된 값이 비어 있을 때만 표시되는 `{{else}}` 섹션을 선택적으로 제공할 수 있습니다.

:::

<Flex>
<Example examplePage="/ko/examples/builtin-helper-with-else.md" show="template" />
<Example examplePage="/ko/examples/builtin-helper-with-else.md" show="input" />
</Flex>

## lookup

`lookup` 헬퍼는 Handlebars 변수를 사용하여 동적 매개변수 해석을 가능하게 합니다.

이것은 배열 인덱스의 값을 해석하는 데 유용합니다.

<Example examplePage="/ko/examples/builtin-helper-lookup.md" show="template" />

입력 데이터에 기반한 객체의 속성을 조회하는 데에도 사용할 수 있습니다. 다음은 `lookup`을 서브 표현식에서 사용하여 속성값
을 기반으로 평가 컨텍스트를 다른 객체로 변경하는 보다 복잡한 예제입니다.

<Example examplePage="/ko/examples/builtin-helper-lookup-dynamic-property.md" show="template" />

## log

`log` 헬퍼는 템플릿을 실행하는 동안 컨텍스트 상태를 로그로 기록할 수 있게 해줍니다.

<Example examplePage="/ko/examples/builtin-helper-log.md" show="template" />

이 헬퍼는 `Handlebars.logger.log`에 위임되며, 이를 재정의하여 맞춤 로깅을 수행할 수 있습니다.

이 메서드에는 여러 개의 인수를 전달할 수 있으며, 모두 로거에 전달됩니다.

<Example examplePage="/ko/examples/builtin-helper-log-multiple-params.md" show="template" />

로그 레벨은 level 해시 매개변수를 사용하여 설정할 수 있습니다. 지원되는 값은 debug, info, warn, error입니다. 생략되면 기
본값은 info입니다.

로깅은 레벨 및 `Handlebars.logger.level`에 설정된 값에 따라 조건부로 수행됩니다. 기본값은 `info`입니다. 현재 레벨 이상에
서의 모든 로그 문은 출력됩니다.

<Example examplePage="/ko/examples/builtin-helper-log-loglevel.md" show="template" />
