/**
 * This document contains the UI_hooks() to monitor user action
 */

//alert('ui_hoks_renderd');

/*$('#test').change(function() {
  alert('Handler for .click() called.');
});

$("#test").change(function () {
    var str = "";
    alert('ets');
    $("select option:selected").each(function () {
          str += $(this).text() + " ";
        });
    $("div").text(str);
  })
  .change();




function onAUI_Button_Click(){
	alert('aui but rendered');
}*/

 var num=0;
 var elasped,start;
 var numofselects=0;
 var json_str='';

$(document).ready(function() {
	
	//AUI_select('#test');
	
	onselect_Change('#test');
	 //alert(test);
	 
 
 
	function onselect_Change(elem) {
		
		var numofselects_here=0;
		var elapsed_tim=0;
		
		
		//on_hover_measure_time('#test');
		$(elem).change(function() {				// on change of value of select box
			numofselects_here=++num;			// increment the no of clicks
			alert('num of selects her '+numofselects_here );
			json_str='{"clicks" : "'+numofselects_here;	// add current no of times to json strings
		});
		
		json_str+'", "time" :"';  				// cont of json str//prob this part doesn't executing 
		$(elem).hover(							// to measure the time spent on element 
			  function () {						// on mouseover
			  //  $(this).append($("<span> ***</span>"));
			     start = new Date().getTime();
			  }, 
			  function () {						//onmouseout
			  //  $(this).find("span:last").remove();
				  elapsed_tim = new Date().getTime() - start;	//time spent
				  json_str+elapsed_tim+', "elem_id" :"'+elem+'"}'; 		//add to json str and elem id
				 // alert(json_str);
			      alert(elapsed_tim);
			  } 
		);
		
		var json_object = jQuery.parseJSON(json_str); 	// form JSON object
		localStorage.setItem("elem_data",json_object); 	// store into local storage
		//alert(json_str);
		alert(elapsed_tim+' out');
		
		alert(numofselects_here+' out');
		
	}

	
	//********************************************************************************************
	
	
	//alert(num_of_changes);
	//on_hover_measure_time('#test');
	
	//function AUI_select(elem){
		//var no_of_sel=onselect_Change(elem);
		//alert(no_of_sel+'her');
		/*on_hover_measure_time(elem);
		var tot_time=measured_time++;
		 alert(num_of_changes+' and it '+tot_time );
		alert(tot_time);
		
		var json2 = '{"test":"ab\\\"c"}';
		var object = jQuery.parseJSON(json2); 
		alert(object.test);
		
		json_string='{ "time":"'+tot_time+'", "num_0f_clicks" : "'+num_of_changes+'"}';*/
		
	//}
	//num=0;
	
	
	//alert('tl frm ui');
	


/*function on_hover_measure_time(elem){
	alert('tet');
	//var elapsed=0;
	$(elem).hover(
			  function () {
			  //  $(this).append($("<span> ***</span>"));
			     start = new Date().getTime();
			  }, 
			  function () {
			  //  $(this).find("span:last").remove();
			     elapsed = new Date().getTime() - start;
			    // alert(elapsed);
			  }
			);
	alert(elapsed);
	return elapsed;
}


function onAUI_Select_Change(numOfSelects){
	alert('aui but rendered'+numOfSelects);
	numOfSelects++;
	
	totnum=numOfSelects;
	//alert(numOfSelects);
	return totnum;
}
	
$('.mySelect').change(function() {
	//alert('el')
var arg = $('.mySelect').val();
localStorage.setItem("data", arg);
//location.reload();

});*/


});