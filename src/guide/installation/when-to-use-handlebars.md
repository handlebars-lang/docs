# When (not) to use Handlebars?

This section should give you an overview over the strengths and weaknesses of Handlebars. Ideally, it enables you to see
if handlebars fits your use case and make an informed decision about choosing handlebars or not.

::: info A note on using Handlebars in the browser

Handlebars is a pure rendering engine. It works well if you want to allow people to write templates for rendering
HTML-pages, e-mails or markdown files.

It has **no** built-in support for **event-handling**, accessing **backend-services** or incremental **DOM updates**.

If you want to build a **single-page application** and you want to handle user-input, you should probably look for a
framework like

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

## Pro Handlebars

- Handlebars is good for rendering in CLI-apps, non-HTML text content, server-side rendering of pure contents.
- Handlebars has been ported to many programming languages (Java, Rust etc).

## Contra Handlebars

- Handlebars is not good for fast (incremental) updates of the DOM, event-handling, frontend-backend communication.
