# 什么时候使用/不使用 Handlebars？

本节概述了 Handlebars 的优缺点。它能够让你了解 Handlebars 是否适合你的实际情况，并使你就是否选择 Handlebars 做出明智的决
定。

::: warning 关于在浏览器中使用 Handlebars 的注意事项

Handlebars 是一个纯渲染引擎。如果你要允许人们自己编写用于渲染 HTML 页面，电子邮件或者 Markdown 文件的模板，那么使用
Handlebars 效果将会很好。

Handlebars **没有事件处理**，访问 **后端服务** 或增量 **DOM 更新** 的内置支持。

如果你想构建一个 **单页应用程序（SPA）** 并且想要处理用户输入，则可能应该寻找一个前端框架：

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

# 高级

- Handlebars 非常适合在 CLI 应用渲染，非 HTML 文本内容，在服务器端呈现纯内容。
- Handlebars 已移植到许多编程语言上（Java、Rust 等）。
- Handlebars 不利于 DOM 的快速（增量）更新，事件处理和前后端通信。
