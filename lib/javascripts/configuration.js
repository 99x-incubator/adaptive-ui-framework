// TODO catch repeating elements
var clusterMapping = {
	"content" : {
		"inter" : [ ".departure_content", ".help_button" ],
		"expert" : [ ".dynamic_images" ],
		"full" : [ ".Ticket_Check_content" ]
	},
	//TODO Apply the format
	"controllers" : {
		"departure":[{'id':'#departure .from','weight':'1'},'#departure .from','#departure .to', '#departure .button help_button','#departure .btnSearch'],
		"ticketCheck":['#check .ticket','#check .code','#check help_button', '#check .search']
	}
};
