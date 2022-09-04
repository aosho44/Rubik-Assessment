describe('Finds highest rating course on Udemy website', () => {
	it('loads the google website', async () => {
		await browser.url('https://www.google.com/');
		await expect(browser).toHaveUrl('https://www.google.com/');
	});

	it('accepts the cookie', async () => {
		const acceptCookie = await $('#L2AGLb');
		const search = $('input');
		await acceptCookie.click();
		await expect(search).toBePresent();
	});

	it('searches the keyword (Test Automation Learning)', async () => {
		const search = $('input');
		await search.click();
		await search.addValue('Test Automation Learning');
		await browser.keys('\uE007');
		await expect(search).toHaveValue('Test Automation Learning');
	});

	it('clicks on the Udemy course link', async () => {
		const websiteName = await $('*=Udemy');
		await websiteName.click();
		await expect(websiteName).toHaveUrlContaining('udemy');
	});

	it('search for BDD with Cucumber in the Udemy site', async () => {
		const uSearch = await $('input[name="q"]');
		const check = $('h1');
		await uSearch.click();
		await uSearch.addValue('BDD with Cucumber');
		await browser.keys('\uE007');
		await expect(browser).toHaveUrlContaining('Cucumber');
	});

	it('selects the highest rated option in the drop down menu', async () => {
		const dropDown = await $('select');
		await dropDown.selectByVisibleText('Highest Rated');
		await expect(browser).toHaveUrlContaining('highest');
	});

	// Website broke down on me multiple times and I am unable to complete it
	/*
	Issues I encountered were the input box was not working
	Captcha kept intervening sometimes when I run the page.
	I had few lucks but because of how quick the test was, I did not get a better look as to what was really happening
	*/
	it('selects the highest rated con');
});
