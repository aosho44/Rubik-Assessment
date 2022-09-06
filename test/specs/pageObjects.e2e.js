import GoogleSearch from '../pageobjects/google.page';
import UdemySite from '../pageobjects/udemy.page';

describe('Finds highest rating course on Udemy website', () => {
	it('loads the google website', async () => {
		await GoogleSearch.open();
		await expect(browser).toHaveUrl('https://www.google.com/');
	});

	it('should accept the cookie', async () => {
		GoogleSearch.cookieAccepter.click();
		await expect(GoogleSearch.searchInput).toBePresent();
	});

	it('should search the keyword (Test Automation Learning)', async () => {
		await GoogleSearch.searchInput.click();
		await GoogleSearch.searchInput.addValue('Test Automation Learning');
		await browser.keys('\uE007');
		await expect(GoogleSearch.searchInput).toHaveValue(
			'Test Automation Learning'
		);
	});

	it('should click on the Udemy course link', async () => {
		await GoogleSearch.udemy.click();
		await expect(GoogleSearch.udemy).toHaveUrlContaining('udemy');
	});

	it('should search for BDD with Cucumber in the Udemy site', async () => {
		await UdemySite.udemySearch.click();
		await UdemySite.udemySearch.addValue('BDD with Cucumber');
		await browser.keys('\uE007');
		await expect(browser).toHaveUrlContaining('Cucumber');
	});

	it('selects the highest rated option in the drop down menu', async () => {
		await UdemySite.udemyDropDown.selectByVisibleText('Highest Rated');
		await expect(browser).toHaveUrlContaining('highest');
	});

	it('should click on the first site that corresponds to the highest rated', async () => {
		await UdemySite.highestRated.click();
		await expect(browser).toHaveUrlContaining('cucumber-and-java');
	});
});
