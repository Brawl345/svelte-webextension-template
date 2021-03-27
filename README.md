Svelte WebExtension Template
============================
WebExtension template that uses [Svelte](https://svelte.dev/) and [Rollup](https://rollupjs.org/guide/en/) under the hood.

## Directory structure

* **public**: Root directory of the extension. The `global.css` and HTML pages should be put here. The `build` directory and the `manifest.json` are created at build time so you don't need these!
* **src**: JavaScript sources with Svelte components. You would load your Svelte components here!
* **manifest.js**: Your WebExtension manifest should go here. A few values are read directly from the `package.json` so you don't have to repeat yourself.

The rest of the files should be self-explanatory. If you want to add other pages, e.g. a pop-up you have to expand the `rollup.config.js` with the same code-block as the options.

## How to use

```bash
git clone https://github.com/Brawl345/svelte-webextension-template.git
cd svelte-webextension-template
npm install
npm run dev
npm run dist # For production
```

## Available NPM scripts

* **dev**: Bundles all scripts and starts Firefox on about:debugging. Rollup will automatically rebundle your files on changes, but you have to reload the extension yourself (or hit CTRL+F5 on the options page)
* **dev-autoreload**: Same as above, but with live-reload in web-ext enabled. Could get annoying when you have to open the options page yourself everytime.
* **build**: Just bundle scripts - you probably don't need to run this.
* **dist**: Bundles scripts and ZIPs the extension into the `web-ext-artifacts` folder, ready for redistribution
* **lint**: Runs JavaScript through ESLint plus web-ext (bundled) and shows warnings.

## Thanks to

* [khang-nd for fandom-utils](https://github.com/khang-nd/fandom-utils): The rollup config was a nice starting point!