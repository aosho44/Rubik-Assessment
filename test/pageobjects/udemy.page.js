class UdemySite {
	get udemySearch() {
		return $('input[name="q"]');
	}

	get udemyDropDown() {
		return $('select');
	}

	get highestRated() {
		return $('a*=BDD with Cucumber');
	}
}

export default new UdemySite();
