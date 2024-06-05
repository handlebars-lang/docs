# 훅(Hooks)

Handlebars 함수 호출에 훅을 걸 수 있는 여러 지점이 있습니다.

## helperMissing

이 훅은 머스태시 또는 블록 문이 아래와 같은 경우 호출됩니다.

- 단순 머스태시 표현식이 등록된 도우미가 **아닐 때**
- 현재 평가 컨텍스트의 속성이 아닐 때

이러한 상황에 대한 사용자 정의 처리를 추가하려면 `helperMissing` 도우미를 등록할 수 있습니다.

<ExamplePart examplePage="/ko/examples/hook-helper-missing.md" show="template" />
<ExamplePart examplePage="/ko/examples/hook-helper-missing.md" show="preparationScript" />
<ExamplePart examplePage="/ko/examples/hook-helper-missing.md" show="output" />

이 도우미는 모든 사용자 정의 도우미 또는 블록 도우미와 동일한 인수 및 옵션(`hash`, `name` 등)을 받습니다.
`options.name`은 호출된 도우미의 이름입니다.

### 기본 동작

머스태시에 매개 변수가 전달되지 않으면 기본 동작은 아무것도 하지 않고 전체 머스태시 표현식 또는 전체 블록을 무시하는 것
입니다:

<Flex>
<ExamplePart examplePage="/ko/examples/hook-helper-missing-default-no-param.md" show="template" />
<ExamplePart examplePage="/ko/examples/hook-helper-missing-default-no-param.md" show="output" />
</Flex>

머스태시에 매개 변수가 전달되면 Handlebars는 예외를 발생시킵니다:

<Flex>
<ExamplePart examplePage="/ko/examples/hook-helper-missing-default-param.md" show="template" />
<ExamplePart examplePage="/ko/examples/hook-helper-missing-default-param.md" show="error" />
</Flex>

## blockHelperMissing

이 훅은 다음과 같은 경우 호출됩니다:

- 블록 표현식이 등록되지 않은 도우미를 호출하지만
- 그 이름이 현재 평가 컨텍스트의 속성과 일치하는 경우

이 상황을 처리하려면 blockHelperMissing이라는 헬퍼를 등록할 수 있습니다.

<ExamplePart examplePage="/ko/examples/hook-block-helper-missing.md" show="template" />
<ExamplePart examplePage="/ko/examples/hook-block-helper-missing.md" show="preparationScript" />
<ExamplePart examplePage="/ko/examples/hook-block-helper-missing.md" show="output" />

### 기본 동작

훅은 현재 컨텍스트에서 해결된 속성 값과 `options.name` 필드가 속성 이름으로 설정된 상태로 호출됩니다.

훅이 재정의되지 않으면 기본 구현은 Mustache의 동작을 모방하여 블록을 호출합니다.

<ExamplePart examplePage="/ko/examples/hook-block-helper-missing-default.md" show="template" />
<ExamplePart examplePage="/ko/examples/hook-block-helper-missing-default.md" show="output" />
