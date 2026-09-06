# Security

::: v-pre

Handlebars is designed to render templates with data. Treat the template, its input data, registered helpers, partials,
and runtime configuration as parts of your application's security boundary.

## Rendering HTML in the browser

By default, Handlebars HTML-escapes values rendered with `{{expression}}`. This protects text inserted into HTML markup
from being interpreted as HTML:

```handlebars
<p>{{comment}}</p>
```

Do not use triple-stash expressions (`{{{expression}}}`) or return `Handlebars.SafeString` for untrusted content. They
disable this escaping and can introduce cross-site scripting (XSS). If a helper returns HTML, it must escape every
untrusted value before marking the result safe.

HTML escaping is context-specific. It does not make untrusted data safe in JavaScript, CSS, URLs, or event-handler
attributes. Avoid using templates to generate inline scripts or event handlers. Validate and encode data for its exact
output context, and apply an allowlist before placing untrusted values in CSS.

### URLs

HTML escaping does not prevent a URL such as `javascript:...` from executing when used in an `href` or similar
attribute. Sanitize user-provided URLs before rendering them, using an allowlist of permitted schemes such as `https`.

### Content Security Policy

Use a [Content Security Policy](https://developer.mozilla.org/docs/Web/HTTP/Guides/CSP) (CSP) when rendering Handlebars
output in a browser. A restrictive CSP can limit the impact of an XSS vulnerability by preventing inline scripts and
restricting the origins from which scripts, styles, images, and other resources may load. Compiling templates in the
browser requires CSP's `'unsafe-eval'`; use [precompiled templates](installation/precompilation.md) and the runtime-only
build to avoid it. Avoid `'unsafe-inline'`. CSP is defense in depth: it does not replace escaping and sanitizing
untrusted content.

## Compiling and rendering templates on the server

A template can invoke the helpers and partials that your application exposes, and it renders the data that you provide.
Do not give a template access to secrets or privileged application objects unless it genuinely needs them. Keep the
rendering context small and use helpers with narrow, well-defined behavior. A helper must validate its arguments and
must not turn template input into arbitrary file, network, database, or command access.

Keep Handlebars up to date and review the runtime options used by your application. In particular, do not relax
prototype-property access controls or enable `allowCallsToHelperMissing`. These options can allow template authors to
execute unintended code through objects available to a template.

## User-supplied templates

Templates from users are untrusted programs for resource-consumption purposes. A deeply nested template, repeated
partials, or a template that performs large iterations can consume substantial CPU, memory, or output space. This can
cause a denial of service even when the template cannot execute arbitrary JavaScript.

When users may submit templates, enforce limits before and during processing:

- Limit template size, nesting depth, partial recursion, input size, and rendered output size in your application.
- Limit the size of arrays and objects passed to templates, since Handlebars does not limit iterations.
- Apply request timeouts and resource quotas to compilation and rendering.
- Rate-limit template submission and rendering endpoints.

Compile and render user-supplied templates in an isolated sandbox, such as a separate process or container with strict
CPU, memory, filesystem, and network limits. Do not rely on Handlebars alone as a security sandbox. In that isolated
environment, expose only an allowlist of safe helpers and partials, pass a minimal data object, and avoid application
credentials or host access.

## Compiling <abbr title="Abstract Syntax Trees">ASTs</abbr>

Only compile ASTs produced by Handlebars from trusted template source. Compiling a user-provided or otherwise untrusted
AST is inherently unsafe and must never be done. A crafted AST can violate the compiler's assumptions and produce
executable JavaScript with behavior that the original template language would not permit.

:::
