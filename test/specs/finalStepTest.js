import UdemySite from '../pageobjects/udemy.page';

it('should click on the first site that corresponds to the highest rated', async () => {
	await browser.url(
		'https://www.udemy.com/courses/search/?q=BDD+with+Cucumber&sort=highest-rated&src=ukw'
	);
	await UdemySite.highestRated.click();
	await expect(browser).toHaveUrlContaining('cucumber-and-java');
});
