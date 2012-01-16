// TODO catch repeating elements
var clusterMapping = {
	"content" : {
		"inter" : [ ".departure_content", ".help_button" ],
		"expert" : [ ".dynamic_images" ],
		"full" : [ ".Ticket_Check_content" ]
	},
	//TODO Apply the format
	"controllers" : {
		"departure":[{'id':'#departure .from','weight':'1'},{'id':'departure .from','weight':'1'}, {'id':'#departure .button help_button','weight':'1'},{'id':'#departure .btnSearch','weight':'1'}],
		"ticketCheck":[{'id':'#check .ticket','weight':'1'},'#check .code','#check help_button', '#check .search']
	}
};



{'id':'#check .code .ticket','weight':'1'}