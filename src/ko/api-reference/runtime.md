# Handlebars 런타임

## `Handlebars.registerPartial(name, partial)`

환경 내 모든 템플릿에서 접근할 수 있는 부분 템플릿을 등록합니다.

```js
Handlebars.registerPartial("foo", partial);
```

여러 부분 템플릿을 한 번에 등록하는 것도 지원합니다.

```js
Handlebars.registerPartial({ foo: partial, bar: partial });
```

전체 라이브러리를 로드하는 경우, 부분 템플릿은 필요할 때 컴파일되는 문자열 값일 수 있습니다. 런타임만 로드하는 경우, 부
분 템플릿은 `Handlebars.template` 메서드를 사용하여 적절히 설정된 사전 컴파일된 템플릿이어야 합니다.

## `Handlebars.unregisterPartial(name)`

이전에 등록된 부분 템플릿을 등록 해제합니다.

```js
Handlebars.unregisterPartial("foo");
```

## `Handlebars.registerHelper(name, helper)`

환경 내 모든 템플릿에서 접근할 수 있는 헬퍼를 등록합니다.

```js
Handlebars.registerHelper("foo", function () {});
```

여러 헬퍼를 한 번에 등록하는 것도 지원합니다.

```js
Handlebars.registerHelper({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterHelper(name)`

이전에 등록된 헬퍼를 등록 해제합니다.

```js
Handlebars.unregisterHelper("foo");
```

## `Handlebars.registerDecorator(name, helper)` (폐기 예정)

::: 주의 폐기 예정 안내

사용자 정의 데코레이터는 폐기 예정이며 Handlebars의 다음 주요 버전에서 사라질 수 있습니다. 이들은 다른 언어로 포팅하기어
려운 내부 API의 너무 많은 부분을 노출하며 코드 유지 관리가 어렵게 만듭니다.

:::

환경 내 모든 템플릿에서 접근할 수 있는 데코레이터를 등록합니다.

```js
Handlebars.registerDecorator("foo", function () {});
```

여러 데코레이터를 한 번에 등록하는 것도 지원합니다.

```js
Handlebars.registerDecorator({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterDecorator(name)`

이전에 등록된 데코레이터를 등록 해제합니다.

```js
Handlebars.unregisterDecorator("foo");
```

## `Handlebars.create()`

고립된 Handlebars 환경을 만듭니다.

```js
var OtherHandlebars = Handlebars.create();
```

각 환경은 자체 헬퍼와 부분 템플릿을 가집니다. 이는 별개의 헬퍼 또는 부분 템플릿이 필요한 사용 사례에서만 필요합니다. 대
부분의 사용 사례는 루트 `Handlebars` 환경을 직접 사용할 수 있습니다.

주어진 환경을 위해 생성된 템플릿은 해당 환경에 바인딩됩니다. 이는 여러 환경에서 실행되어야 하는 템플릿이 각 환경에 대해
다시 컴파일되거나 `Handlebars.template`을 통해 재구성되어야 함을 의미합니다. 이는 부분 템플릿에도 적용됩니다.

## `Handlebars.noConflict()`

이 Handlebars 인스턴스를 전역 네임스페이스에서 제거하고 전역 `Handlebars` 변수를 이전 값으로 복원합니다.

```js
var myHandlebars = Handlebars.noConflict();
```

이를 통해 라이브러리의 다양한 버전을 동시에 사용하면서 버전 충돌에 대한 걱정 없이 사용할 수 있습니다.
