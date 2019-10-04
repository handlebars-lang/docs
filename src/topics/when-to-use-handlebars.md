# When to use Handlebars?

This section should give you an overview over the strengths and weaknesses of Handlebars. Ideally, it enables you to
make a good choice of a framework.

# TODO

Add text here!

- Handlebars is good for rendering in CLI-apps, non-HTML text content, server-side rendering of pure contents.
- Handlebars is not good for fast (incremental) updates of the DOM, event-handling, frontend-backend communication.

::: warning A note on using Handlebars in the browser

Handlebars is a pure rendering engine. It works well if you want to allow people to write templates for rendering
HTML-pages, e-mails or markdown files.

It has **no** built-in support for **event-handling**, accessing **backend-services** or incremental **DOM updates**.

If you want to build a single-page application and you want to handle user-input, you should probably look for a
framework like Angular, Ember, Ractive, React or Vue.js.

:::
