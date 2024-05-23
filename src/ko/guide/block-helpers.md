# 블록 헬퍼(Block Helpers)

블록 헬퍼를 사용하면 사용자 지정 반복자 및 다른 기능을 정의하여 새 컨텍스트로 전달된 블록을 호출할 수 있습니다.

## 기본 블록

데모 목적으로, 헬퍼가 존재하지 않는 것처럼 블록을 호출하는 블록 헬퍼를 정의해 봅시다.

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#noop}}{{body}}{{/noop}}
  </div>
</div>
```

`noop` 헬퍼("no operation"의 줄임말)는 옵션 해시를 받습니다. 이 옵션 해시는 일반적으로 컴파일된 Handlebars 템플릿처럼 동
작하는 함수(options.fn)를 포함합니다. 구체적으로, 이 함수는 컨텍스트를 받아서 문자열을 반환합니다.

```js
Handlebars.registerHelper("noop", function (options) {
  return options.fn(this);
});
```

Handlebars는 항상 현재 컨텍스트를 `this`로 사용하여 헬퍼를 호출하므로, 현재 컨텍스트에서 블록을 평가하려면 this로 블록을
호출할 수 있습니다.

이러한 방식으로 정의된 헬퍼는 컨텍스트에 정의된 필드보다 우선권을 가집니다. 헬퍼에 의해 가려진 필드에 접근하려면 경로 참
조를 사용할 수 있습니다. 위 예제에서 컨텍스트 객체에 noop이라는 필드가 있다면 다음과 같이 참조할 수 있습니다:

```handlebars
{{./noop}}
```

## 기본 블록 변형

이 구문을 더 잘 설명하기 위해 래핑된 텍스트에 마크업을 추가하는 또 다른 블록 헬퍼를 정의해 봅시다.

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#bold}}{{body}}{{/bold}}
  </div>
</div>
```

`bold` 헬퍼는 텍스트를 굵게 만드는 마크업을 추가합니다. 이전과 마찬가지로, 이 함수는 컨텍스트를 입력으로 받아 문자열을
반환합니다.

```js
Handlebars.registerHelper("bold", function (options) {
  return new Handlebars.SafeString('<div class="mybold">' + options.fn(this) + "</div>");
});
```

## `with` 헬퍼

`with` 헬퍼는 헬퍼에 매개변수를 전달하는 방법을 보여줍니다. 헬퍼가 매개변수와 함께 호출될 때, 템플릿에서 전달된 컨텍스트
로 호출됩니다.

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  {{#with story}}
    <div class="intro">{{{intro}}}</div>
    <div class="body">{{{body}}}</div>
  {{/with}}
</div>
```

이러한 헬퍼는 JSON 객체의 일부 섹션에 깊게 중첩된 속성이 포함되어 있고, 부모 이름을 반복하는 것을 피하고자 할 때 유용할
수 있습니다. 위 템플릿은 다음과 같은 JSON과 함께 사용할 때 유용할 수 있습니다:

```js
{
  title: "First Post",
  story: {
    intro: "Before the jump",
    body: "After the jump"
  }
}

```

::: v-pre

이와 같은 헬퍼를 구현하는 것은 noop 헬퍼를 구현하는 것과 매우 유사합니다. 헬퍼는 매개변수를 받을 수 있으며, 매개변수는
`{{mustache}}` 블록 안에서 직접 사용되는 표현식처럼 평가됩니다.

:::

```js
Handlebars.registerHelper("with", function (context, options) {
  return options.fn(context);
});
```

매개변수는 전달된 순서대로 헬퍼에 전달되며, 그 뒤에 옵션 해시가 전달됩니다.

## 간단한 반복자

블록 헬퍼의 일반적인 사용 사례는 사용자 지정 반복자를 정의하는 것입니다. 실제로 모든 Handlebars 내장 헬퍼는 일반적인
Handlebars 블록 헬퍼로 정의됩니다. 내장된 each 헬퍼가 어떻게 작동하는지 살펴보겠습니다.

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  {{#with story}}
    <div class="intro">{{{intro}}}</div>
    <div class="body">{{{body}}}</div>
  {{/with}}
</div>
<div class="comments">
  {{#each comments}}
    <div class="comment">
      <h2>{{subject}}</h2>
      {{{body}}}
    </div>
  {{/each}}
</div>
```

이 경우, comments 배열의 각 요소에 대해 한 번씩 `each`에 전달된 블록을 호출하고자 합니다.

```js
Handlebars.registerHelper("each", function (context, options) {
  var ret = "";

  for (var i = 0, j = context.length; i < j; i++) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});
```

이 경우 전달된 매개변수의 항목을 반복하면서 각 항목으로 블록을 한 번씩 호출합니다. 반복하면서 문자열 결과를 만들어 반환
합니다.

이 패턴을 사용하여 더 고급 반복자를 구현할 수 있습니다. 예를 들어, `<ul>` 래퍼를 만들고 각 결과 항목을 `<li>`로 래핑하는
반복자를 만들어 봅시다.

```handlebars
{{#list nav}}
  <a href="{{url}}">{{title}}</a>
{{/list}}
```

이 템플릿을 평가할 때는 다음과 같은 컨텍스트를 사용합니다:

```js
{
  nav: [
    { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
    { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" },
  ];
}
```

이 헬퍼는 기존의 `each` 헬퍼와 유사합니다.

```js
Handlebars.registerHelper("list", function (context, options) {
  var ret = "<ul>";

  for (var i = 0, j = context.length; i < j; i++) {
    ret = ret + "<li>" + options.fn(context[i]) + "</li>";
  }

  return ret + "</ul>";
});
```

underscore.js나 SproutCore의 런타임 라이브러리 같은 라이브러리를 사용하면 이 작업을 좀 더 간편하게 만들 수 있습니다. 예
를 들어, SproutCore의 런타임 라이브러리를 사용하면 다음과 작성할 수 있습니다:

```js
Handlebars.registerHelper("list", function (context, options) {
  return (
    "<ul>" +
    context
      .map(function (item) {
        return "<li>" + options.fn(item) + "</li>";
      })
      .join("\n") +
    "</ul>"
  );
});
```

## 조건문

블록 헬퍼의 또 다른 일반적인 사용 사례는 조건문을 평가하는 것입니다. 반복자와 마찬가지로 Handlebars의 내장 `if` 및
`unless` 제어 구조도 일반적인 Handlebars 헬퍼로 구현됩니다.

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active">
{{/if}}
```

제어 구조는 일반적으로 현재 컨텍스트를 변경하지 않으며, 대신 일부 변수를 기반으로 블록을 호출할지 여부를 결정합니다.

```js
Handlebars.registerHelper("if", function (conditional, options) {
  if (conditional) {
    return options.fn(this);
  }
});
```

조건문을 작성할 때, 조건이 거짓으로 평가될 경우 헬퍼가 삽입해야 할 HTML 블록을 템플릿에서 제공할 수 있도록 하는 경우가
많습니다. Handlebars는 블록 헬퍼에 일반적인 `else` 기능을 제공하여 이 문제를 처리합니다.

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active">
{{else}}
  <img src="cry.gif" alt="Inactive">
{{/if}}
```

Handlebars는 `else` 조각에 대한 블록을 `options.inverse`로 제공합니다. else 조각의 존재 여부를 확인할 필요는 없습니다.
Handlebars가 이를 자동으로 감지하고 "noop" 함수를 등록합니다.

```js
Handlebars.registerHelper("if", function (conditional, options) {
  if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
```

Handlebars는 옵션 해시의 속성으로 추가 메타데이터를 블록 헬퍼에 제공합니다. 더 많은 예제를 보려면 계속 읽어보세요.

조건문은 else 머스태쉬 내에 후속 헬퍼 호출을 포함하여 체인할 수도 있습니다.

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active">
{{else if isInactive}}
  <img src="cry.gif" alt="Inactive">
{{/if}}

```

후속 호출에서 동일한 헬퍼를 사용할 필요는 없습니다. 다른 헬퍼와 마찬가지로 else 부분에서 unless 헬퍼를 사용할 수 있습니
다. 헬퍼 값이 다른 경우, 닫는 머스태쉬는 여는 헬퍼 이름과 일치해야 합니다.

## Hash 매개변수

일반 헬퍼와 마찬가지로 블록 헬퍼도 최종 매개변수로 선택적 해시(Hash)를 받을 수 있습니다. `list` 헬퍼를 다시 살펴보고, 생
성할 `<ul>` 요소에 선택적 속성을 여러 개 추가할 수 있도록 만들어 봅시다.

```handlebars
{{#list nav id="nav-bar" class="top"}}
  <a href="{{url}}">{{title}}</a>
{{/list}}
```

Handlebars는 마지막 해시를 `options.hash`로 제공합니다. 이를 통해 가변 매개변수와 선택적 해시를 쉽게 받을 수 있습니다.
템플릿이 해시 인수를 제공하지 않으면 Handlebars는 자동으로 빈 객체(`{}`)를 전달하므로 해시 매개변수의 존재 여부를 확인할
필요가 없습니다.

```js
Handlebars.registerHelper("list", function (context, options) {
  var attrs = Object.keys(options.hash)
    .map(function (key) {
      return key + '="' + options.hash[key] + '"';
    })
    .join(" ");

  return (
    "<ul " +
    attrs +
    ">" +
    context
      .map(function (item) {
        return "<li>" + options.fn(item) + "</li>";
      })
      .join("\n") +
    "</ul>"
  );
});
```

해시 인수는 위치 인수로 인한 복잡성 없이 블록 헬퍼에 여러 선택적 매개변수를 제공하는 강력한 방법을 제공합니다.

블록 헬퍼는 자식 템플릿에 비공개 변수를 주입하는 것이 가능합니다. 이는 원래 컨텍스트 데이터에 없는 정보를 추가하는 데 유
용할 수 있습니다.

예를 들어, 목록을 반복할 때 현재 인덱스를 비공개 변수로 제공할 수 있습니다.

```handlebars
{{#list array}}
  {{@index}}. {{title}}
{{/list}}
```

```js
Handlebars.registerHelper("list", function (context, options) {
  var out = "<ul>",
    data;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  for (var i = 0; i < context.length; i++) {
    if (data) {
      data.index = i;
    }

    out += "<li>" + options.fn(context[i], { data: data }) + "</li>";
  }

  out += "</ul>";
  return out;
});
```

`data` 옵션을 통해 제공되는 비공개 변수는 모든 하위 스코프에서 사용할 수 있습니다.

부모 스코프에서 정의된 비공개 변수는 경로 쿼리를 통해 접근할 수 있습니다. 부모 반복자의 index 필드에 접근하려면
`@../index`를 사용할 수 있습니다.

각 헬퍼에서 자체 데이터를 할당하는 새로운 데이터 프레임을 생성해야 합니다. 그렇지 않으면 하위 헬퍼가 예상치 않게 상위 변
수를 변경할 수 있습니다.

또한 기존 데이터 객체와 상호 작용하기 전에 `data` 필드가 정의되어 있는지 확인해야 합니다. 비공개 변수 동작은 조건부로 컴
파일되며, 일부 템플릿은 이 필드를 생성하지 않을 수 있습니다.

## 블록 매개변수

Handlebars 3.0에서는 지원하는 헬퍼로부터 명명된 매개변수를 받을 수 있습니다.

```handlebars
{{#each users as |user userId|}}
  Id: {{userId}} Name: {{user.name}}
{{/each}}
```

이 특정 예제에서 `user`는 현재 컨텍스트와 동일한 값을 가지며, `userId`는 반복에 대한 인덱스 값을 가집니다.

이를 통해 중첩된 헬퍼가 비공개 변수와 발생할 수 있는 이름 충돌을 피할 수 있습니다.

```handlebars
{{#each users as |user userId|}}
  {{#each user.book as |book bookId|}}
    User Id: {{userId}} Book Id: {{bookId}}
  {{/each}}
{{/each}}
```

여러 [내장 헬퍼](builtin-helpers.html)는 블록 매개변수를 지원하며, 모든 사용자 정의 헬퍼는 `blockParams` 옵션 필드를 통
해 이를 제공할 수 있습니다.

헬퍼는 `options.fn.blockParams` 필드를 통해 템플릿에서 참조하는 블록 매개변수의 수를 결정할 수 있으며, 이는 정수 값입니
다. 이 값은 자식 템플릿에서 참조할 수 있는 블록 매개변수의 수를 나타냅니다. 이 수를 초과하는 매개변수는 참조되지 않으므
로, 원할 경우 헬퍼에서 안전하게 생략할 수 있습니다. 이는 선택 사항이며, 템플릿에 전달된 추가 매개변수는 조용히 무시됩니
다.

## RAW 블록

Raw 블록은 처리되지 않은 머스태쉬 블록을 다뤄야 하는 템플릿에서 사용할 수 있습니다.

<ExamplePart examplePage="/zh/examples/raw-blocks.md" show="template"/>

```handlebars
{{{{raw-helper}}}}
  {{bar}}
{{{{/raw-helper}}}}
```

내용을 해석하지 않고 raw-helper 헬퍼를 실행합니다.

```js
Handlebars.registerHelper("raw-helper", function (options) {
  return options.fn();
});
```

이렇게 렌더됩니다.

```
{{bar}}
```
