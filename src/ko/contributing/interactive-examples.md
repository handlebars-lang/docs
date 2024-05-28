# 인터랙티브 예제 만들기

[[toc]]

인터랙티브 예제를 정의할 수 있습니다. 예제 또는 예제의 일부는 **어느 페이지에나 포함**될 수 있습니다. 자동 생성된 링크를
통해 방문자는 **플레이그라운드**에서 예제를 열어 템플릿, 부분 템플릿, 입력 등을 변경하고 결과 출력을 확인할 수 있습니다.

## 예제 만들기

예제를 정의하려면 examples 디렉토리에 새 마크다운 파일을 만듭니다. 예제 데이터는 참조된 예제 페이지의 frontmatter에 정의
됩니다. 모든 기능을 시연하는 [all-features-example-raw](../examples/all-features.md) 를 참조하세요.

다음 frontmatter 속성이 지원됩니다:

-`layout`: 항상 `InteractivePlaygroundLayout`이어야 합니다. -`example`: 예제를 포함합니다. -`template`: 주요 Handlebars
템플릿   -`partials`: 각 등록된 부분 템플릿에 대한 속성을 포함하는 객체로, 키는 부분 템플릿 이름, 값은 부분 템플릿 내용
입니다.  -`preparationScript`: 템플릿을 컴파일하고 실행하기 전에 실행되는 스크립트입니다. 이 스크립트에서는
`Handlebars`가 전역 변수로 제공됩니다.  -`input`: 내장 YAML 객체로 된 템플릿 입력입니다.   -`errorExpected`: 이 예제가오
류를 발생시킬 것으로 예상되는지 여부를 지정하는 부울 값(기본값: `false`)입니다. 기본적으로, 실행 중에 오류를 발생시키는
예제는 사이트 전체 빌드를 실패하게 만듭니다. 오류를 설명하는 예제를 작성하는 경우 이 플래그를 `true`로 설정해야 합니다.

예제의 출력은 최신 릴리스 버전의 Handlebars를 사용하여 자동으로 계산됩니다.

## 예제 데이터

가능하다면, 예제는 공통 데이터 세트의 변형을 사용해야 합니다. 따라서 파일
[src/ko/examples/\_example-base-data.yaml](https://github.com/handlebars-lang/docs/blob/master/src/ko/examples/_example-base-data.yaml)
에는 각 예제에 재사용 및 적응할 수 있는 데이터가 포함되어 있습니다. 해당 파일의 데이터가 불충분하면 새 데이터를 추가할수
있지만, 관련이 있는지 확인해 주세요.

## 예제의 일부 포함

`<ExamplePart>` 컴포넌트를 사용하여 현재 부분에 예제의 일부를 표시할 수 있습니다.

```md
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="template"/>
```

이렇게 하면 다음과 같은 결과가 나옵니다:

<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="template"/>

이 컴포넌트의 속성(props)은 다음과 같습니다:

- `examplePage`: `src` 폴더 아래의 예제 페이지 경로
- `show`: 페이지에 삽입할 예제 부분입니다. 가능한 값은 `template`，`input`，   `output`, `error`, `preparationScript` 및
  `partial` 입니다.
- `name` （선택 사항）: `show="partial"`일 때만 필요한 속성으로, 예제에 삽입할 부분 템플릿의 이름을 정의합니다.

이 컴포넌트는 예제의 일부를 흐르는 텍스트에 포함시키고자 할 때 매우 유용합니다.
`<ExamplePart examplePage="/examples/all-features" show="input" />`를 사용하여 입력 JSON을 삽입하면 다음 코드 조각이 페
이지에 나타납니다:

<ExamplePart examplePage="/ko/examples/all-features" show="input" />

그런 다음, 독자에게 템플릿을 보여주기 위해 동일한 examplePage로 show="template"을 사용할 수 있습니다.

<ExamplePart examplePage="/ko/examples/all-features" show="template" />

부분 템플릿을 렌더링하려면 예를 들어 `show=partial` 및 `name=person`을 사용할 수 있습니다.

<ExamplePart examplePage="/ko/examples/all-features" show="partial" name="person"/>

헬퍼가 포함된 예제가 있는 경우 준비 스크립트를 포함시키고 싶을 수도 있습니다:

<ExamplePart examplePage="/ko/examples/all-features" show="preparationScript" />

## 가로 레이아웃

두 개의 예제 부분을 가로로 레이아웃하고 싶다면 `<Flex>` 컴포넌트를 사용할 수 있습니다.

```md
<Flex>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="template"/>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="input"/>
</Flex>
```

이렇게 렌더링됩니다.

<Flex>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="template"/>
<ExamplePart examplePage="/ko/examples/builtin-helper-each-block" show="input"/>
</Flex>
