const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://www.google.com/');

	await browser.close();
})();