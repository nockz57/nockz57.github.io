var affixElement = 'navbar-main';

$(affixElement).affix({
	offset: {
		//Distance
		top: function () {
			// body
			return (this.top = $(affixElement).offset().top)
		}
	}
});