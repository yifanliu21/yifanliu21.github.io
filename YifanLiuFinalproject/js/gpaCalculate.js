$(function(){ 
　　var p='<p class="name">\n'+
	  		'<label class="lab-1">Letter Grade</label>\n'+
	    	'<input type="text" name="grade" /> \n'+
	    	'<label class="lab-1">Credit Hours</label>\n'+
	    	'<input type="text" name="hours" /> \n'+
		'</p>';
	
	$("#add").click(function(){
		$("#subjects").append(p);
	});
	
	$("#delete").click(function(){
		if($("#subjects p").size()<=2){
			alert("At least 2 subjects!");
		}else{
			$("#subjects p:last").remove();
		}
	});
	
	$("#calculate").click(function(){
		var hours=0;
		var grades=0;
		var a;
		
		$("#subjects input[name='hours']").each(function(){
			hours+=parseInt($(this).val());
		});
		
		$("#subjects p").each(function(event){
			var letter=$(this).find("input").eq(0).val().toUpperCase();
			var b=$(this).find("input").eq(1).val();
			
			if(letter!="A"&&letter!="B"&&letter!="C"&&letter!="D"&&letter!="F"){
				alert("Please put 'A','B','C','D','F' in the Letter Grade box!");
				event.preventDefault();
			}
			
			if(b<=0||b==null||isNaN(b)){
				alert("Please put the right number in the credit hours box!")
				event.preventDefault();
			}
			b=parseInt(b);
			
			if(letter=="A"){
				a=4.0;
			}else if(letter=="B"){
				a=3.0;
			}else if(letter=="C"){
				a=2.0;
			}else if(letter=="D"){
				a=1.0;
			}else{
				a=0;
			}
			
			grades+=a*b;
		});
		
		console.log(grades);
		console.log(hours);
		
		$("#gpa").val((grades/hours).toFixed(1));
		hours=0;
		grades=0;
	});
	
	$("#clear").click(function(){
		$("#subjects input[type='text']").val("");
	});
			
}); 