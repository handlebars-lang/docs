# 런타임 옵션

::: v-pre

`Handlebars.compile` 및 `Handlebars.precompile` 함수는 함수를 생성합니다. 이 함수는 `template(context, options)`로 호출
될수 있으며, 여기서 `context`는 입력 객체입니다.

`options` 는 다음 속성을 가질 수 있는 객체입니다.

- `data` : 사용자 정의 `@variable` 프라이빗 변수를 정의하기 위해 객체를 전달합니다.
- `helpers` 전역적으로 정의된 헬퍼 외에 사용자 정의 헬퍼를 제공하기 위해 전달합니다. 이 객체에 정의된 값은 템플릿 실행동
  안 전역 객체에 정의된 값을 대체합니다.
- `partials` 전역적으로 정의된 부분 템플릿 외에 사용자 정의 부분 템플릿을 제공하기 위해 전달합니다. 이 객체에 정의된 값
  은 템플릿 실행 동안 전역 객체에 정의된 값을 대체합니다.
- `allowCallsToHelperMissing`(4.3.0 이후, 안전하지 않음)：`true`로 설정하면 `{{helperMissing}}` 및
  `{{blockHelperMissing}}`와 같은 호출이 허용됩니다. 이 옵션을 설정하면 템플릿 작성자가 Handlebars를 실행하는 환경에서원
  격 코드 실행을 위한 템플릿을 제작할 수 있으므로 주의해야 합니다 (자세한 내용은 여기를 참조하세요
  https://github.com/handlebars-lang/handlebars.js/issues/1558).

:::

## 프로토타입 접근을 제어하는 옵션

버전 4.6.0부터 Handlebars는 기본적으로 컨텍스트 객체의 프로토타입 속성 및 메서드에 대한 접근을 금지합니다. 이는 이러한가
능성에서 발생하는 다양한 보안 문제 때문입니다. 다음 옵션을 사용하여 이 접근을 제어할 수 있습니다.

::: danger 이러한 속성을 사용하는 것은 보안 허점을 열 수 있습니다.

프로토타입 속성을 허용하면 템플릿 작성자가 Handlebars가 실행되는 환경에서 임의의 코드를 실행할 수 있습니다. 일부 제한이
있더라도 공격자는 Handlebars 템플릿을 제작하여 머신을 충돌시킬 수 있습니다.

자세한 내용은 npm 보안 권고 [755](https://www.npmjs.com/advisories/755), [1164](https://www.npmjs.com/advisories/1164),
[1316](https://www.npmjs.com/advisories/1316), [1324](https://www.npmjs.com/advisories/1324) 및
[1325](https://www.npmjs.com/advisories/1325) 그리고
[Mahmoud Gamal](http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html)의 블로그 기사를 참조
하세요.

:::

- `allowProtoMethodsByDefault`(4.7.0 이후)：기본적으로 객체의 프로토타입에 정의된 메서드가 해석 가능해야 하는지 여부를정
  의하는 부울 값 (기본값: false).

  `constructor`，`__defineGetter__`，`__defineSetter__`，`__lookupGetter__`, `__lookupSetter__` 메서드는 이 옵션이
  `true`로 설정되어 있어도 금지됩니다. 이러한 메서드는 allowedProtoMethods에서 해당 키가 `true`로 설정된 경우에만 접근할
  수 있습니다.

이 옵션을 설정하면 프로토타입 메서드 접근이 시도되고 금지되었을 때 Handlebars가 콘솔에 기록하는 경고를 비활성화합니다.

- `allowedProtoMethods`(4.6.0 이후)：부모 객체의 메서드인 경우 허용되는 속성 이름의 문자열-부울 맵입니다. 정의되지 않은
  값은 `allowProtoMethodsByDefault`에서 정의된 값으로 되돌아갑니다.

- `allowProtoPropertiesByDefault`(4.7.0 이후)：본적으로 객체의 프로토타입에 정의된 비메서드 속성이 해석 가능해야 하는지
  여부를 정의하는 부울 값 (기본값: false).

`__proto__` 속성은 이 옵션이 `true`로 설정되어 있어도 금지됩니다. 이 속성은 `allowedProtoProperties`에서 해당 키가
`true`로 설정된 경우에만 접근할 수 있습니다.

이 옵션을 설정하면 프로토타입 속성 접근이 시도되고 금지되었을 때 Handlebars가 콘솔에 기록하는 경고를 비활성화합니다.

- `allowedProtoProperties`(4.6.0 이후): 부모 객체의 메서드가 아닌 속성인 경우 허용되는 속성 이름의 문자열-부울 맵입니다.
  정의되지 않은 값은 `allowProtoPropertiesByDefault`에서 정의된 값으로 되돌아갑니다.

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template({ aString: "  abc  " });
  // result is empty, because trim is defined at String prototype
  ```

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template(
    { aString: "  abc  " },
    {
      allowedProtoMethods: {
        trim: true,
      },
    },
  );
  // result = 'abc'
  ```

런타임 옵션을 전달할 수 없는 경우, [express-handlebars](https://www.npmjs.com/package/express-handlebars) 와 같은 경우에
는 [@handlebars/allow-prototype-access](https://www.npmjs.com/package/@handlebars/allow-prototype-access) 패키지를 사용
하여 4.5.3 버전의 동작으로 되돌릴 수 있습니다.
