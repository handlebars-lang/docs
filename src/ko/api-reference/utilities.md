---
sidebarDepth: 2
---

# 유틸리티 함수

## 헬퍼 유틸리티

이 메서드는 사용자 정의 헬퍼를 구현할 때 유용합니다.

### `Handlebars.SafeString(string)`

템플릿이 렌더링될 때 string이 이스케이프되지 않도록 합니다.

```js
new Handlebars.SafeString("<div>HTML Content!</div>");
```

안전한 문자열로 표시될 문자열을 구성할 때, 외부 콘텐츠는 `Handlebars.escapeExpression` 메서드를 사용하여 적절히 이스케이
프되어야 보안 문제를 방지할 수 있습니다.

### `Handlebars.escapeExpression(string)`

전달된 문자열을 HTML 이스케이프하여 HTML 콘텐츠 내에서 텍스트로 렌더링할 때 안전하게 만듭니다.

```js
Handlebars.Utils.escapeExpression(string);
```

문자열 값에 대해 `&`, `<`, `>`, `"`, `'`, `` ` ``, `=` 를 HTML 엔티티 값으로 대체합니다. `SafeString` 값은 변경되지 않습
니다.

`{{{` 표현을 제외한 모든 표현의 출력은 이 메서드를 통해 전달됩니다. 헬퍼가 `SafeString` 인스턴스를 통해 HTML 콘텐츠를 반
환할 때도 가능한 코드 삽입을 방지하기 위해 이 메서드를 사용해야 합니다.

이 메서드는 `Handlebars.Utils.escapeExpression`에 별칭으로 정의되어 있습니다.

### `Handlebars.createFrame(data)`

블록 헬퍼가 자식 데이터 객체를 생성할 때 사용됩니다.

```js
if (options.data) {
  var data = Handlebars.createFrame(options.data);
  data.foo = "bar";
  options.data = data;
}
```

데이터 상태를 수정하는 헬퍼는 새 프레임을 생성하여 자신을 격리하고 부모의 상태를 손상시키지 않아야 합니다. 일반적으로,
헬퍼 실행당 하나의 프레임만 생성하면 됩니다. 예를 들어, `each` 반복자는 모든 자식 실행에 대해 재사용되는 단일 프레임을
생성합니다.

## 일반 유틸리티

Handlebars는 `Handlebars.Utils` 객체를 통해 다양한 유틸리티 메서드를 제공합니다.

### `Handlebars.Utils.isEmpty(value)`

주어진 값이 비어 있는지 여부를 판단합니다.

Handlebars.Utils.isEmpty(value)

이 메서드는 내장된 `if` 및 `with` 헬퍼가 실행 흐름을 제어하는 데 사용됩니다. Handlebars의 빈 값 정의는 다음과 같습니다:

- 길이가 0인 배열
- 0을 제외한 거짓 값

이는 [Mustache behavior](http://mustache.github.io/mustache.5.html#Sections)을 따르기 위한 것입니다.

### `Handlebars.Utils.extend(obj, value)`

`obj`를 `value`에 정의된 모든 키로 확장하는 간단한 유틸리티 메서드입니다.

Handlebars.Utils.extend(foo, {bar: true})

이는 객체 `foo`에 키 `bar`를 값 `true`로 설정합니다.

### `Handlebars.Utils.toString(obj)`

일반적인 `toString` 메서드입니다.

### `Handlebars.Utils.isArray(obj)`

객체가 배열인지 여부를 판단합니다.

### `Handlebars.Utils.isFunction(obj)`

객체가 함수인지 여부를 판단합니다.

### `Handlebars.log(level, message)`

`log` 헬퍼에서 사용하는 로거입니다.

원하는 경우 재정의할 수 있습니다.
