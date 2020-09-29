const { BROWSER }  = require('../contants');
const { Builder, By } = require('selenium-webdriver');

const Browser = async () => {
return await new Builder()
    .forBrowser(BROWSER)
    .build();
  }

  const findElement = async (driver, selector) =>  {
    if (selector.startsWith('//')) {
        return await driver.findElement(this.driver.By.xpath(selector));
    }
    return await driver.findElement((this.driver).By.css(selector));
  }
  
  const text = (driver, text) =>  {
    return driver
      .actions()
      .sendKeys(text)
      .perform();
  }

module.exports = Browser;