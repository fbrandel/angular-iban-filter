(function() {
	angular.module('fbr.iban', [])
		.filter('iban', function() {
			return formatIban;
		});

	/**
	 * Formats an IBAN
	 * @param  {string} iban
	 * @return {string}
	 */
	function formatIban(iban) {
		iban = iban || '';
		var formattedIban = '';

		for (var i = 0; i < iban.length; i++) {
			if (i > 0 && i % 4 === 0) {
				formattedIban += ' ';
			}
			formattedIban += iban[i];
		}
		return formattedIban;
	}
})();
