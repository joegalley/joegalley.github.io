$(document).ready(function() {
	$(document).click(function(event) { 
		if(!$(event.target).closest('#menu-icon').length) {
			$(".menu-dropdown-content").hide();
		}        
		else {
			if($('.menu-dropdown-content').is(":visible")) {
				$(".menu-dropdown-content").hide();
			}
			else{
				$(".menu-dropdown-content").show();
			}
		}
	});
});