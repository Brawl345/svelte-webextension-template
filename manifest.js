// generate public/manifest.json

const fs = require("fs");
const pkg = require("./package.json");
const content = {
  name: "Svelte Browser Extension Template",
  version: pkg.version,
  description: pkg.description,
  homepage_url: pkg.repository.url,
  manifest_version: 2,
  icons: {
    128: "images/icon.png",
  },
  permissions: ["tabs"],
  background: {
    scripts: ["build/background.js"]
  },
  options_ui: {
    page: "options.html",
    open_in_tab: true,
  },
};

fs.writeFile(
  __dirname + "/public/manifest.json",
  JSON.stringify(content),
  () => {
  }
);
