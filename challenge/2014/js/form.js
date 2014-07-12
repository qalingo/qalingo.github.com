$( document ).ready(function() {
	$('#form-register-submit').click( function() {
		var lastname = $('#lastname').val();
		var firstname = $('#firstname').val();
		var email = $('#email').val();
		$.ajax({
			url: "https://docs.google.com/a/hoteia.com/forms/d/16i7yyCCsapb_Be0QpJdPD6wHMNmdwZpINOA5MDeH7pM/formResponse",
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
		$('#register-form-panel').hide();
		$('#register-success-panel').show();
	}
	
	$('#register-success-panel').hide();
	
});
