# 헬퍼(Helpers)

## `options` 파라미터

헬퍼 호출에 사용되는 파라미터 외에도, options 객체가 추가 파라미터로 헬퍼에 전달됩니다.

- `lookupProperty(object, propertyName)`: 객체의 "자체 속성"을 반환하는 함수입니다. 이 함수는 `allowedProtoProperties`와
  `allowedProtoMethods`에 지정된 화이트리스트를 따릅니다. 예시:

  <Example examplePage="/ko/examples/helper-lookup-property.md" show="preparationScript" />

- TODO：헬퍼에 전달되는 모든 옵션을 설명하세요.
