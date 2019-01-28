$(document).ready(function() { // do this when the document is loaded
	$("#dialer_content").show(); // show the element with ID "element"
	$("#contact_list_content").hide(); // hide the element with ID "otherElement"
	$("#add_contact_content").hide();
});

$("#dialer").click(function() { // when "button_id" is clicked
	$("#dialer_content").show(); // show element
	$("#contact_list_content").hide();	// hide other element
	$("#add_contact_content").hide();
});

$("#contactList").click(function() { // when "button_id" is clicked
	$("#contact_list_content").show(); // show element
	$("#dialer_content").hide();	// hide other element
	$("#add_contact_content").hide();
});

$("#addContact").click(function() { // when "button_id" is clicked
	$("#add_contact_content").show(); // show element
	$("#contact_list_content").hide();	// hide other element
	$("#dialer_content").hide();
});
