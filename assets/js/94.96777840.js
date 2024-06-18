(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{571:function(t,a,e){"use strict";e.r(a);var s=e(53),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"사전-컴파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사전-컴파일"}},[t._v("#")]),t._v(" (사전) 컴파일")]),t._v(" "),e("h2",{attrs:{id:"handlebars-compile-template-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-compile-template-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.compile(template, options)")])]),t._v(" "),e("p",[t._v("템플릿을 컴파일하여 즉시 실행할 수 있게 합니다.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" template "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("템플릿 실행 방식을 변경하는 다양한 옵션을 지원합니다.")]),t._v(" "),e("div",{pre:!0},[e("ul",[e("li",[e("code",[t._v("data")]),t._v(": "),e("code",[t._v("@data")]),t._v(" 추적을 비활성화하려면 false로 설정합니다.")]),t._v(" "),e("li",[e("code",[t._v("compat")]),t._v(": 재귀 필드 조회를 활성화하려면 true로 설정합니다.")]),t._v(" "),e("li",[e("code",[t._v("knownHelpers")]),t._v(": 템플릿 실행 시 존재하는 것으로 알려진 헬퍼 목록을 포함하는 해시입니다. 이를 전달하면 컴파일러가 여러\n경우를 최적화할 수 있습니다. 내장 헬퍼는 이 목록에 자동으로 포함되며 값을 "),e("code",[t._v("false")]),t._v("로 설정하여 생략할 수 있습니다.")]),t._v(" "),e("li",[e("code",[t._v("knownHelpersOnly")]),t._v(": 알려진 헬퍼 목록을 기반으로 추가 최적화를 허용하려면 true로 설정합니다.")]),t._v(" "),e("li",[e("code",[t._v("noEscape")]),t._v(": HTML 이스케이프를 하지 않으려면 true로 설정합니다.")]),t._v(" "),e("li",[e("code",[t._v("strict")]),t._v(": 엄격 모드에서 실행합니다. 이 모드에서는 누락된 필드를 묵인하지 않고 예외를 발생시킵니다. 이로 인해\n"),e("code",[t._v("{{^foo}}{{/foo}}")]),t._v("와 같은 역 연산이 데이터 소스 객체에 명시적으로 포함되지 않으면 비활성화됩니다.")]),t._v(" "),e("li",[e("code",[t._v("assumeObjects")]),t._v(": 경로를 탐색할 때 객체 존재 여부 확인을 제거합니다. 이는 데이터 입력이 안전하다고 알려진 경우 최적화된\n템플릿을 생성하는 엄격 모드의 하위 집합입니다.")]),t._v(" "),e("li",[e("code",[t._v("preventIndent")]),t._v(": 기본적으로 들여쓰기된 부분 템플릿 호출은 전체 부분 템플릿 출력이 동일한 양으로 들여쓰기되게 합니다.\n이는 부분 템플릿이 "),e("code",[t._v("pre")]),t._v(" 태그를 작성할 때 예기치 않은 동작을 초래할 수 있습니다. 이 옵션을 "),e("code",[t._v("true")]),t._v("로 설정하면 자동 들여\n쓰기 기능이 비활성화됩니다.")]),t._v(" "),e("li",[e("code",[t._v("ignoreStandalone")]),t._v(": 설정 시 독립 태그 제거를 비활성화합니다. 설정하면 블록과 부분 템플릿이 각자 줄에 있을 때 해당 줄의\n공백을 제거하지 않습니다.")]),t._v(" "),e("li",[e("code",[t._v("explicitPartialContext")]),t._v(": 부분 템플릿의 암시적 컨텍스트를 비활성화합니다. 활성화되면 컨텍스트 값을 전달받지 않은 부분\n템플릿은 빈 객체를 대상으로 실행됩니다.")])])]),e("h2",{attrs:{id:"handlebars-precompile-template-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-precompile-template-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.precompile(template, options)")])]),t._v(" "),e("p",[t._v("주어진 템플릿을 사전 컴파일하여 클라이언트로 전송한 후 컴파일 없이 실행할 수 있게 합니다.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" templateSpec "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("precompile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("Handlebars.compile")]),t._v(" 메서드와 동일한 옵션 매개변수를 지원합니다. 추가적으로 다음을 전달할 수 있습니다:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("srcName")]),t._v(": 입력 파일의 소스 맵을 생성하기 위해 전달됩니다. 이렇게 실행되면 반환 구조는 "),e("code",[t._v("{code, map}")]),t._v("이며, "),e("code",[t._v("code")]),t._v("에는\n템플릿 정의가 포함되고 "),e("code",[t._v("map")]),t._v("에는 소스 맵이 포함됩니다.")]),t._v(" "),e("li",[e("code",[t._v("destName")]),t._v(": 소스 맵을 생성할 때 "),e("code",[t._v("srcName")]),t._v("과 함께 사용되는 선택적 매개변수로, 대상 파일 이름을 제공합니다.")])]),t._v(" "),e("h2",{attrs:{id:"handlebars-template-templatespec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-template-templatespec"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.template(templateSpec)")])]),t._v(" "),e("p",[e("code",[t._v("Handlebars.precompile")]),t._v("로 사전 컴파일된 템플릿을 설정합니다.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" template "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateSpec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);