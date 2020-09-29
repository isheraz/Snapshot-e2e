// import Browser from '../lib/browser';
const Browser = require('../lib/browser');

describe('Demo Test for SnapShot Demo Project', () => {
  jest.setTimeout(200000);
  it('Writing async tests and not sync threads', async () => {
    const browser = await Browser('Mac OS Browser');
    console.log(browser)
    // const input = await browser.findElement('#search-form-input');
    // await input.text("Green");
  });
});