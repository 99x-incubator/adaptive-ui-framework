/**
 * Rendering logic for the application This part comes to UI level. User should
 * manually define this
 */
function renderingLogic() {

	var storage = getStorage("data");
	
	if (storage == 1) {
		$(".full").hide();
		$(".light").hide();
		$(".inter").hide();
		$(".expert").hide();
	} else if (storage == 2) {
		$(".full").hide();
		$(".light").hide();
		$(".inter").hide();
	} else if (storage == 3) {
		$(".full").hide();
		$(".inter").hide();
	}
}