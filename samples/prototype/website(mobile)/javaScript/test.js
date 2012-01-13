function clustering() {
	$.each(getClusterArray(), function(key_val, cluster) {
		$.each(cluster, function(index, itemData) {

			var placeHolder = itemData;
			console.log(placeHolder);
			$(itemData).addClass(key_val);

		});
	});
}

/*
 * return cluster for a given cluster id
 * 
 * @param clusterId cluster ID
 */

function findCluster(clusterId) {
	return [clusterId];
}

/*
 * @returns a map of clusters
 */
function getClusterArray() {
	return clusterMapping;
}

// TODO catch repeating elements
var clusterMapping= {
	"inter" : [ ".departure_content", ".help_button" ],
	"expert" : [ ".dynamic_images" ],
	"light" : [ ".Ticket_Check_content" ]
};

function getStorage() {
	return localStorage.getItem("data");
}



function renderingLogic() {
	
	localStorage.setItem("data", 2);
	var storage = getStorage();
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

function testSupport() {
	if (localStorage)
		return "Local Storage: Supported";
	else
		return "Local Storage: Unsupported";
}


