/**
 * Apply clustering to each cluster in given cluster map object
 * 
 * @param clusters set of clusters
 */
function clustering(clusters) {
	CheckBSupport();
	$.each(clusters, function(key_val, cluster) {
		$.each(cluster, function(index, itemData) {

			var placeHolder = itemData;
			console.log(placeHolder);
			$(itemData).addClass(key_val);

		});
	});
}


/**
 * @returns a map of clusters
 */
function getClusterArray() {
	return clusterMapping;
}


/**
 * @param key name of data object
 * @returns Local browser local storage for given key
 */
function getStorage(key) {
	return localStorage.getItem(key);
}


/**
 * Rendering logic for the application
 * This part comes to UI level. User should manually define this
 */
function renderingLogic() {
	
	localStorage.setItem("data", 3);
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


/**
 * Check browser support
 */
function CheckBSupport() {
	if (localStorage)
		console.log ("Local Storage: Supported");
	else
		console.error("Local Storage: Unsupported");
}



//TODO catch repeating elements
var clusterMapping= {
	"inter" : [ ".departure_content", ".help_button" ],
	"expert" : [ ".dynamic_images" ],
	"full" : [ ".Ticket_Check_content" ]
};

