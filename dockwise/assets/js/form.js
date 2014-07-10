$( document ).ready(function() {
	$('#form-newsletter-submit').click( function() {
		$.ajax({
			url: "https://docs.google.com/a/hoteia.com/forms/d/1vMGcc_PCG__6XXtoF6mv5lSlntNxLHc4py42X3e7wtA/formResponse",
			data: { "entry.1464826012": $('#lastname').val(), "entry.1227480568": $('#firstname').val(), "entry.246834050": $('#email').val() },
			type: "POST",
			dataType: "xml",
			success: function(data, textStatus, XMLHttpRequest) {
				showConfirmationMessage();
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				showConfirmationMessage();
			}
		})
		return false;
	});
	
	function showConfirmationMessage() {
		$('#newsletter-form-panel').hide();
		$('#newsletter-success-panel').show();
	}
	
});
