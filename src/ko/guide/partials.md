# 부분 템플릿(Partials)

Handlebars는 부분 템플릿을 통해 템플릿 재사용을 허용합니다. 부분 템플릿은 다른 템플릿에 의해 직접 호출될 수 있는 일반적
인 Handlebars 템플릿입니다.

## 기본 부분 템플릿

부분 템플릿을 사용하려면 `Handlebars.registerPartial`을 통해 등록해야 합니다.

<ExamplePart examplePage="/ko/examples/partials/basic.md" show="preparationScript"/>

이 호출은 `myPartial` 부분 템플릿을 등록합니다. 부분 템플릿은 사전 컴파일될 수 있으며 사전 컴파일된 템플릿을 두 번째 매
개변수로 전달할 수 있습니다.

부분 템플릿 호출 구문을 통해 부분 템플릿을 호출할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/basic.md" show="template"/>

이 구문은 `myPartial`이라는 이름의 부분 템플릿을 렌더링합니다. 부분 템플릿이 실행될 때 현재 실행 컨텍스트에서 실행됩니다
.

## 동적 부분 템플릿

하위 표현식 구문을 사용하여 실행할 부분 템플릿을 동적으로 선택할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/dynamic.md" show="template"/>

이는 `whichPartial`을 평가한 후, 이 함수가 반환하는 이름의 부분 템플릿을 렌더링합니다.

하위 표현식은 변수를 해결하지 않으므로 `whichPartial`은 함수여야 합니다. 단순 변수가 부분 템플릿 이름을 가지고 있다면
`lookup` 헬퍼를 통해 해결할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/variable.md" show="template"/>

## 부분 템플릿 컨텍스트

컨텍스트를 부분 템플릿 호출에 전달하여 부분 템플릿을 사용자 정의 컨텍스트에서 실행할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/other-context.md" show="template"/>

## 부분 템플릿 매개변수

해시 매개변수를 통해 부분 템플릿에 사용자 정의 데이터를 전달할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/parameters.md" show="template"/>

이는 부분 템플릿이 실행될 때 parameter를 `value`로 설정합니다.

이는 특히 상위 컨텍스트의 데이터를 부분 템플릿에 노출하는 데 유용합니다.

<ExamplePart examplePage="/ko/examples/partials/parent-context.md" show="template"/>

## 부분 템플릿 블록

부분 템플릿을 찾을 수 없을 때의 기본 동작은 구현에서 오류를 발생시키는 것입니다. 대신 대체 처리를 원할 경우 블록 구문을
사용하여 부분 템플릿을 호출할 수 있습니다.。

<ExamplePart examplePage="/ko/examples/partials/failover.md" show="template"/>

이는 `myPartial` 부분 템플릿이 등록되지 않은 경우 `Failover content`를 렌더링합니다.

이 블록 구문은 또한 템플릿을 부분 템플릿에 전달하여 특수 이름의 부분 템플릿 `@partial-block`에서 실행할 수 있도록 합니다
.

<ExamplePart examplePage="/ko/examples/partials/partial-block.md" show="template"/>

`layout` 부분 템플릿이 포함된 경우

<ExamplePart examplePage="/ko/examples/partials/partial-block.md" show="partial" name="layout"/>

다음과 같이 렌더링됩니다.

<ExamplePart examplePage="/ko/examples/partials/partial-block.md" show="output"/>

이와 같이 호출될 때 블록은 호출 시점의 부분 템플릿 컨텍스트에서 실행됩니다. 깊이 있는 경로와 블록 매개변수는 부분 템플릿
이 아닌 부분 블록을 기준으로 작동합니다.

<ExamplePart examplePage="/ko/examples/partials/partial-block-parameters.md" show="template"/>

이 템플릿에서 `person.firstname`을 렌더링합니다. 이는 부분 템플릿이 아닙니다.

## 인라인 부분 템플릿

템플릿은 `inline` 데코레이터를 통해 블록 범위의 부분 템플릿을 정의할 수 있습니다.

<ExamplePart examplePage="/ko/examples/partials/inline.md" show="template"/>

이는 각 자식에 대해 `myPartial` 부분 템플릿을 렌더링합니다.

각 인라인 부분 템플릿은 현재 블록과 모든 자식에게 사용 가능하며, 다른 부분 템플릿의 실행을 포함합니다. 이는 레이아웃 템
플릿과 유사한 기능을 제공합니다.

<ExamplePart examplePage="/ko/examples/partials/inline-blocks.md" show="template"/>

`layout` 부분 템플릿은 다음과 같습니다:

<ExamplePart examplePage="/ko/examples/partials/inline-blocks.md" show="partial" name="layout"/>
