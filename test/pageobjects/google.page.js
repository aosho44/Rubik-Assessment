import Page from './page';

class GoogleSearch extends Page {
	get cookieAccepter() {
		return $('#L2AGLb');
	}

	get searchInput() {
		return $('input');
	}

	get udemy() {
		return $('*=Udemy');
	}

	open() {
		browser.url('https://www.google.com/');
	}
}

export default new GoogleSearch();
