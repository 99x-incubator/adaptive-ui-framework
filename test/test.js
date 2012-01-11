function test() {

	for ( var i = 0; i < getClusterArray().length; i++) {
		console.log(getClusterArray()[i]);
		var cluster_id = getClusterArray()[i].id;
		console.log('cluster_id ' + cluster_id);
	}
}

function test2(){
	
	console.log(getControllers(findCluster('cluster1')));
}


/*
 * Perform specific action
 * 
 * @param content - a content object
 * TODO @param action 
 */
function performActionToContent(content){
	
	for ( var i = 0; i <content.length; i++) {
		content[i].hide();
	}
}

/*
 * Return array of content
 * 
 * @param cluster - cluster
 * */
function getContent(cluster){
	return cluster.content;
}

/*
 * Return array of controllers
 * @param cluster - cluster
 * */
function getControllers(cluster){
	return cluster.controller;	
}
/*
 * return cluster for a given cluster id
 *
 *  @param clusterId cluster ID 
 */

function findCluster(clusterId) {
	return jsonObject[clusterId];
}

/*
 * @returns a map of clusters
 * */
function getClusterArray() {
	return jsonObject;
}

var jsonObject = {
	"cluster1" : {
		"controller" : [ ".testControllerClass", "#testControllerId" ],
		"content" : [ ".testContentClass", "#testContentId" ]
	},
	"cluster2" : {
		"controller" : [ ".testControllerClass2", "#testControllerId2" ],
		"content" : [ ".testContentClass2", "#testContentId2" ]
	}

};
