//TODO This should change very soon. Hell of a dependency
document.write("<script type='text/javascript' src='../../.././lib/javascripts/configuration.json'></script>");
document.write("<script type='text/javascript' src='../../.././lib/javascripts/renderingLogic.js'></script>");

/**
 * Apply clustering to each cluster in given cluster map object
 * 
 * @param clusters
 *            set of clusters
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
 * @returns a map of clusters from JSON configuration file
 */
function getClusterArray() {
	return clusterMapping;
}

/**
 * Return a content array from configuration file
 */
function getContent() {
	return getClusterArray().content;
}

/**
 * Return a controller array from configuration file
 */
function getController() {
	return getClusterArray().controllers;
}

/**
 * @param key
 *            name of data object
 * @returns Local browser local storage for given key
 */
function getStorage(key) {
	return localStorage.getItem(key);
}

/**
 * Check browser support
 */
function CheckBSupport() {
	if (localStorage)
		console.log("Local Storage: Supported");
	else
		console.error("Local Storage: Unsupported");
}


