# kidsloop-branding

Collection of all branding-specific assets, including:

-   images/static assets
-   React components
-   configuration variables (e.g. Terms and Conditions URL)

## How to use

### Installation

Add `@kl-engineering:registry=https://npm.pkg.github.com` to the `.npmrc` file in the project root.
This will enable installing from the internal GitHub packages registry.

For projects using kidsloop-branding before the Github migration, change the line in your `package.json` from

```text
"kidsloop-branding": "bitbucket:calmisland/kidsloop-branding#1.0.0"
```

to

```text
"@kl-engineering/kidsloop-branding": "1.0.0"
```

For new projects, run

```shell
npm i -E @kl-engineering/kidsloop-branding
```

### Setup

Add the following to your Webpack configuration.

```javascript
const { loadBrandingOptions } = require("@kl-engineering/kidsloop-branding");

const brandingOptions = loadBrandingOptions(process.env.BRAND);

export default {
    //...rest of Webpack configuration
    plugins: [
        new HtmlWebpackPlugin({
            // rest of HtmlWebpackPlugin options
            ...brandingOptions.webpack.html,
        }),
    ],
    resolve: alias: {...brandingOptions.webpack.resolve.alias}
}
```

process.env.BRAND can be one of:

-   "KIDSLOOP"
-   "RUMAH_KISAH"
-   "AKADEMIMU"
-   undefined

`undefined` will use the default brand (which is "KIDSLOOP")

(You could also hardcode to a specific brand, rather than using `process.env.BRAND` as shown above)

Note the use of `kidsloop-branding`, which points to the root of the library.
This contains any common (i.e. non-brand specific) code,
such as Error classes and the `loadBrandingOptions` function.

NB: Webpack documentation on [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias)

The _author_, _favicon_ and _og:image_ meta tags in "index.html" should also be removed,
to avoid duplication from the `HtmlWebpackPlugin` above.

The `companyName` is exposed in the options object available in the HTML template,
which could be used in the `<title>` tag.

```html
<title>Sign In | <%= htmlWebpackPlugin.options.companyName %> Accounts</title>
```

### Usage

`@branding` is set in the Webpack configuration shown in setup, and resolves to the `@kl-engineering/kidsloop-branding/dist/brands/${BRAND}` directory.

This allows for simple import paths, which don't need to contain any logic about the current brand, as the complexity is handled by the `kidsloop-branding` library and the Webpack alias.

For example, if `loadBrandingOptions("RUMAH_KISAH")` is used in the Webpack config,
`@branding/assets/img/primary_logo.svg` resolves to `@kl-engineering/kidsloop-branding/dist/brands/rumahkisah/assets/img/primary_logo.svg`,
and `@branding` resolves to `@kl-engineering/kidsloop-branding/dist/brands/rumahkisah/index.js`.

The `BrandingOptions` object (containing company name etc.) is also exported from the brand `index.js`,
and available to use in your components.

```JSX
import React from "react"
import PrimaryLogo from "@branding/assets/img/primary_logo.svg"
import {brandingConfig} from "@branding"

export default function MyComponent(props) {
    return (
        <div>
            <img alt=`${brandingConfig.company.name} Logo` src={PrimaryLogo} height={32} />
            <figcaption>Brand specific logo</figcaption>
        </div>
    )
}
```

To use the brand-specific translated messages, you can use the following pattern
(only English and Korean shown for brevity):

```typescript
import { createIntl, createIntlCache } from "react-intl";

import english from "./en.json"
import korean from "./ko.json"

import brandedEnglish from "@branding/locale/en.json"
import brandedKorean from "@branding/locale/ko.json"

Object.assign(english, brandedEnglish)
Object.assign(korean, brandedKorean)

const intlCache = createIntlCache();
export const fallbackLocale = createIntl(
  { locale: "en", messages: english },
  intlCache
);
export function getIntl(locale: string) {
  switch (locale) {
    case "ko":
      return createIntl({ locale: "ko", messages: korean }, intlCache);
    case "en":
      return createIntl({ locale: "en", messages: english }, intlCache);
```

## Adding a new brand

1. Copy the folder structure of an existing brand e.g kidsloop
1. Add all required assets e.g. _primary_logo.svg_
1. Enter all required properties in `config.ts`, using the folder name you've just created in the `webpack.resolve.alias`
1. Add another `case` to `loadBrandingOptions` in `src/index.ts` for this new brand
1. Prepare the dist folder with `npm run clean && npm run build`
1. Upversion the `package.json`
1. Create a new git tag identical to the new `package.json` version

## TODO

-   Add Jest & Storybook
-   Glob entrypoints for all brands in Webpack config
