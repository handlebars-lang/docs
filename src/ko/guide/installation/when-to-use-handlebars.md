# Handlebars를 사용할 때와 사용하지 말아야 할 때?

이 섹션은 Handlebars의 강점과 약점에 대한 개요를 제공 합니다. Handlebars가 사용 사례에 적합한지 여부를 파악하고,
Handlebars를 선택할지 여부에 대한 통찰력있는 결정을 내릴 수 있도록 돕습니다.

::: info 브라우저에서 Handlebars를 사용하는 데 관한 참고사항입니다.

Handlebars는 순수한 렌더링 엔진입니다. HTML 페이지, 이메일 또는 마크다운 파일을 렌더링하는 경우에 잘 작동합니다.

Handlebars에는 **이벤트 처리**, **백엔드 서비스** 접근 또는 **증분 DOM 업데이트**를 위한 내장 지원이 없습니다.

사용자 입력을 처리하고 **싱글 페이지 애플리케이션**을 구축하려는 경우, 아마도 Vue.js나 React와 같은 프레임워크를 찾아보
는 것이 좋습니다.：

- [Angular](https://angular.io/)
- [Aurelia](https://aurelia.io/)
- [Ember](https://emberjs.com/)
- [Inferno](https://infernojs.org/)
- [Mithril](https://mithril.js.org/)
- [Svelte](https://svelte.dev/)
- [Ractive](https://ractive.js.org/)
- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)

:::

# Handlebars의 장점

- Handlebars는 CLI 애플리케이션, HTML이 아닌 텍스트 콘텐츠, 순수 콘텐츠의 서버 측 렌더링에 좋습니다.
- Handlebars는 많은 프로그래밍 언어로 이식되었습니다(Java, Rust 등).

# Handlebars의 단점

- Handlebars는 DOM의 빠른(증분적) 업데이트, 이벤트 처리, 프론트엔드-백엔드 통신에 적합하지 않습니다.
