import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    browser.tabs.create({
      url: 'https://example.com/',
      active: false,
    });
  }
});
