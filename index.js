function addProject(){
	var length = $("#main p").length;
	if(length==0){
		newNum = 0;
	}
	else{
		newNum = $("#main p").eq(length-1).data("num");
	}
	var buttonHtml = '&nbsp; <button onclick="$(this).parent().remove();"><img src="./remove.png"></button>';
	$("#main").append('<p data-num="'+ (newNum+1) + '"> P' + (newNum + 1) + buttonHtml + "</p>");
}

function removeLastProject(){
	var length = $("#main p").length;
	if(length==0){
		alert("No projects mam!!");
	}
	else{
		$("#main p").eq(length-1).remove()
	}
}

function removeAllProjects(){
	var length = $("#main p").length;
	if(length==0){
		alert("No projects mam!!");
	}
	else{
		$("#main p").remove();
	}	
}