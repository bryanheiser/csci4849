$(document).ready(function() {
	$("#dialer_content").show();
	$("#contact_list_content").hide();
	$("#add_contact_content").hide();
	$("#help_content").hide();
});

$("#dialer").click(function() {
	$("#dialer_content").show();
	$("#contact_list_content").hide();
	$("#add_contact_content").hide();
	$("#help_content").hide();
});

$("#contactList").click(function() {
	$("#contact_list_content").show();
	$("#dialer_content").hide();
	$("#add_contact_content").hide();
	$("#help_content").hide();
});

$("#addContact").click(function() {
	$("#add_contact_content").show();
	$("#contact_list_content").hide();
	$("#dialer_content").hide();
	$("#help_content").hide();
});

$("#help").click(function() {
	$("#dialer_content").hide();
	$("#contact_list_content").hide();
	$("#add_contact_content").hide();
	$("#help_content").show();
});

$("#numPad button").click(function() {
	$("#enterNumber").val($("#enterNumber").val() + this.innerText);
});

$("#clear_id").click(function() {
	$("#enterNumber").val("");
});

document.addEventListener("keydown", function ( event ) {
	if ( event.shiftKey && event.which == 51 ) {
		$("#enterNumber").val($("#enterNumber").val() + '#');
	}
	else if ( event.shiftKey && event.which == 56 ) {
		$("#enterNumber").val($("#enterNumber").val() + '*');
	}
	else if ( event.which == 8 ) {
		$("#enterNumber").val("");
	}
	else if ( event.which == 68 ) {
		$("#dialer_content").show();
		$("#contact_list_content").hide();
		$("#add_contact_content").hide();
		$("#help_content").hide();
	}
	else if ( event.which == 67 ) {
		$("#dialer_content").hide();
		$("#contact_list_content").show();
		$("#add_contact_content").hide();
		$("#help_content").hide();
	}
	else if ( event.which == 65 ) {
		$("#dialer_content").hide();
		$("#contact_list_content").hide();
		$("#add_contact_content").show();
		$("#help_content").hide();
	}
	else if ( event.which == 72 ) {
		$("#dialer_content").hide();
		$("#contact_list_content").hide();
		$("#add_contact_content").hide();
		$("#help_content").show();
	}
	else if ( event.which >= 48 && event.which <= 57 ) {
		var entry = event.which - 48;
		$("#enterNumber").val($("#enterNumber").val() + entry.toString());
	}
});
