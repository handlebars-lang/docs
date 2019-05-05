# Installation

There are many different ways to install and use Handlebars, the following are some of the more popular. Please send [pull requests](https://github.com/wycats/handlebars-site/blob/master/src/pages/installation.haml) if we are missing one!

The fastest route is to manually download the package and copy into your project but a number of other systems are available.

<DownloadHandlebars type="full">Download Handlebars {{$handlebarsVersions.latest}}</DownloadHandlebars>
<br>
<DownloadHandlebars type="runtime">Download Handlebars runtime {{$handlebarsVersions.latest}}</DownloadHandlebars>

## npm / yarn

Handlebar's npm package includes both libraries suitable for CommonJS aware systems and built browser libraries that can be consumed direct browser mechanisms.

```bash
npm install --save handlebars
```

or

```bash
yarn add handlebars
```

Require-aware systems such as Node and Webpack can then load via:

```js
require("handlebars");
```

or for the runtime only:

```js
require("handlebars/runtime");
```

The browser builds are located in the `node_modules/handlebars/dist/` directory. Making these accessible to the browser will depend on what build system you are using but this may be as simple as copying the files to an acessible place.

This is the preferred method of installation when using the precompiler as it ensures that your precompiled templates always run against the same version of the runtime.

## Bower (deprecated)

::: warning
[Bower is deprecated](https://bower.io/blog/2017/how-to-migrate-away-from-bower/). You should use the npm-version along with a bundler like
webpack, browserify or parceljs if you want to use Handlebars in the browser.

Bower versions of Handlebars are still created (at the moment) for backwards compatibility. But if you are setting up a new project, you should not use it anymore.
:::

## Manual Download

All of Handlebar's released versions and CI builds are available for download on S3 in our [builds page](http://builds.handlebarsjs.com.s3.amazonaws.com/bucket-listing.html?sort=lastmod&sortdir=desc).

The latest passing master build is named `handlebars-latest.js` and each passing SHA on master will create a `handlebars-gitSHA.js` file. While these all pass the CI, it's preferrable to use one of the tagged releases.

**Note**: The S3 builds page is provided as a convenience for the community, but you should not use it for hosting Handlebars in production.

## CDNs

Handlebars is hosted on a number of free CDNs as well.

- [cdnjs](https://cdnjs.com/libraries/handlebars.js)
- [jsDelivr](http://www.jsdelivr.com/#!handlebarsjs). Advanced usage, such as [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#usage), is available.
