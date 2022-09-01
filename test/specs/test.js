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
});
