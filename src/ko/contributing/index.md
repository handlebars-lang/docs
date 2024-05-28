# 문서 개선하기

[[toc]]

Handlebars는 오픈 소스 프로젝트입니다. 문서를 최신 상태로 유지하는 _“문서 부서”_ 가 없습니다. 이 문서 사이트는 유용하고
도움이 되는 사이트가 되기 위해 여러분의 도움이 필요합니다.

[릴리스 노트](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md)<br>
['docs-needed' 레이블이 붙은 Issues](https://github.com/handlebars-lang/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed)<br>
[옛 Handlebars 웹사이트](https://handlebars-archive.knappi.org)

다음 섹션은 문서 개선을 돕기 위해 작성되었습니다.

## Contribution은 어떻게 하나요?

이 사이트는 [Github](https://github.com/handlebars-lang/docs) 에 호스팅되고 [VuePress](https://v1.vuepress.vuejs.org/)
로 렌더링됩니다.

- 페이지에 변경 사항이 있을 경우 [pull requests](https://help.github.com/en/articles/about-pull-requests)를 생성해 주세
  요.
- 변경 사항이 단일 페이지의 내용에만 영향을 미치는 경우, 페이지 하단의 `{{$themeLocaleConfig.editLinkText}}` 링크를 클릭
  하여 변경할 수 있습니다. 자세한 내용은
   [다른 사용자의 저장소에서 파일 편집하기](https://help.github.com/en/articles/editing-files-in-another-users-repository)를
  참조하세요.
- 더 복잡한 변경 사항(스타일링, 여러 페이지, 새 페이지, 빌드 문제 수정)은 저장소를 포크하고 작업이 완료되면 풀 리퀘스트
  를 제출하세요. 저장소의 [CONTRIBUTING.md 페이지][contributing-page-in-repo]  에서 자세한 정보를 확인할 수 있습니다. 이
  방법을 통해 개발 서버를 사용하고 변경 사항을 제출하기 전에 미리 볼 수 있습니다.

## 콘텐츠는 어떻게 작성하나요?

문서는 마크다운으로 작성되며 [VuePress](https://v1.vuepress.vuejs.org/) 로 렌더링됩니다. VuePress는 `markdown-it` 패키지
를 사용하여 마크다운을 렌더링합니다. `markdown-it`은 CommonMark dialect를 구현합니다.

따라서 다음 자료에 설명된 구문을 사용할 수 있습니다:

- [CommonMark 도움말](https://commonmark.org/help/)
- [markdown-it에서 추가한 구문 확장](https://github.com/markdown-it/markdown-it#syntax-extensions)
- [VuePress에서 추가한 구문 확장](https://v1.vuepress.vuejs.org/guide/markdown.html)

이러한 모든 확장 외에도, 이 사이트는 소스 파일에 포함될 수 있는 일부 사용자 정의 Vue 컴포넌트를 추가합니다.

- [인터랙티브 예제](interactive-examples.md)
- [버튼 링크](button-links.md)

## 어떤 행동을 해야 하나요?

::: 위험

- **지적 재산 존중**: 본인이 작성했거나 [handlebarsjs.com](https://handlebarsjs.com) 上에서 복사한 텍스트와 기타 미디어
  만 제출해 주세요. Handlebars에 관한 많은 블로그 게시물이 있지만, 해당 게시물의 텍스트는 작성자의 지적 재산입니다.
- **라이선스**: 콘텐츠를 제출하면 해당 콘텐츠가 이 사이트의 라이선스 하에 게시되는 것에 동의하게 됩니다.
- **행동 강령**: 다른 사람을 존중하고 성적인 언어나 거친 표현을 피하세요.

:::

## 무엇을 기여할 수 있나요?

- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) 저장소에서
  [docs-needed](https://github.com/handlebars-lang/handlebars.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Adocs-needed+)
  레이블이 붙은 이슈를 찾아보세요. 문서화가 필요한 사항을 설명하는 이슈들입니다.
- **새로운 콘텐츠를 제안하고 제출하세요.** 제안에 대해 확신이 없다면 풀 리퀘스트를 제출하기 전에 이슈를 생성할 수 있습니
  다. 이를 통해 시간을 낭비하지 않도록 할 수 있습니다.
- **기존 콘텐츠를 개선하세요.** 네비게이션을 제안하고, 오타를 수정하고, 언어를 개선하고, 잘못된 내용을 수정할 수 있습니
  다.
- **CSS 스타일링 문제를 수정하세요.** 이 페이지의 스타일링은 완벽하지 않습니다. 개선하고 싶다면 주저하지 말고 진행해 주
  세요. 더 큰 변경 사항의 경우 이슈를 열어 연락해 주세요.

[contributing-page-in-repo]: https://github.com/handlebars-lang/docs/blob/master/CONTRIBUTING.md
[all-features-example-raw]: https://raw.githubusercontent.com/handlebars-lang/docs/master/src/examples/all-features.md
