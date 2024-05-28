# `@data` 변수

다음 `@data` 변수들은 Handlebars와 내장 헬퍼에 의해 구현됩니다.

## `@root`

템플릿이 실행된 초기 컨텍스트입니다.

```handlebars
{{#each array}} {{@root.foo}} {{/each}}
```

명시적으로 수정되지 않는 한, 이 값은 페이지 렌더링의 모든 부분에서 일관되게 유지되므로, 깊은 매개변수가 상위 템플릿을 참
조할 수 없는 부분 템플릿 내에서도 사용할 수 있습니다.

## `@first`

반복의 첫 번째 단계에서 `each` 헬퍼에 의해 true로 설정됩니다.

```handlebars
{{#each array}} {{#if @first}} First! {{/if}} {{/each}}
```

## `@index`

현재 반복 단계의 0부터 시작하는 인덱스입니다. `each` 헬퍼에 의해 설정됩니다.

```handlebars
{{#each array}} {{@index}} {{/each}}
```

## `@key`

현재 반복 단계의 키 이름입니다. 객체를 반복할 때 `each` 헬퍼에 의해 설정됩니다.

```handlebars
{{#each array}} {{@key}} {{/each}}
```

## `@last`

반복의 마지막 단계에서 `each` 헬퍼에 의해 true로 설정됩니다.

```handlebars
{{#each array}} {{#if @last}} Last :( {{/if}} {{/each}}
```

## `@level`

로그 레벨을 할당합니다.

```js
template({}, { data: { level: Handlebars.logger.WARN } });
```

`Handlebars.logger.DEBUG`，`Handlebars.logger.INFO`，`Handlebars.logger.WARN` 또는 `Handlebars.logger.ERROR` 중 하나로설
정할 수 있습니다.

설정하게 되면, 로거는 출력에 `Handlebars.logger.level` 이상의 로그 레벨을 가진 메시지만 포함합니다. 기본 값은
`Handlebars.logger.ERROR`입니다.
