describe('Finds highest rating course on Udemy website', () => {
	it('loads the google website', async () => {
		await browser.url('https://www.google.com/');
		await expect(browser).toHaveUrl('https://www.google.com/');
	});

	it('accepts the cookie', async () => {
		const acceptCookie = await $('#L2AGLb');
		await acceptCookie.click();
	});
});
