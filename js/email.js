$("#contactForm").submit(function(){
	if( #("#contact-form").valid()){
		alert("valid form");
		var name = $("#name").val();
		var email_addr = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();
		
		alert(name);
		alert(email_addr);
		alert(phone);
		alert(message);
	}else{
		alert("not valid");
	}
	
	
});