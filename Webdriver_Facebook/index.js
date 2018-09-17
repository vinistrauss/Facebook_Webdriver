const webdriver = require("selenium-webdriver");

(async () => {
  const driver = new webdriver.Builder().forBrowser("chrome").build();

  await driver
    .manage()
    .window()
    .maximize();
  await driver.get("https://pt-br.facebook.com/");
  // preenchimento dos campos
  await driver.findElement(webdriver.By.name("email")).sendKeys("<seu_email>");
  await driver.findElement(webdriver.By.name("pass")).sendKeys("<sua_senha>");
  await driver.findElement(webdriver.By.id("loginbutton")).click();
  await driver.sleep(2000);
  await driver.findElement(webdriver.By.tagName("body")).click();
  await driver.sleep(2000);
  await driver.findElement(webdriver.By.name("q")).click();
  await driver.findElement(webdriver.By.name("q")).sendKeys("<nome_da_pessoa>");
  await driver
    .findElement(
      webdriver.By.className("_42ft _4jy0 _4w98 _4jy3 _517h _51sy _4w97")
    )
    .click();
  await driver.sleep(2000);

  await driver.findElement(webdriver.By.className("_52eh _5bcu")).click();
  //driver.quit();
})();
