$(function(){ 
	// preload images
	$("ul li a img").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("id");
	});
	
	var imageSRC;
	var arr = new Array;
	var total = 0;
	
	$("ul li a img").hover(function(){
		var imageURL = $(this).attr("id");
		imageSRC = $(this).attr("src");
	    $(this).attr("src",imageURL);
	},function(){
	    $(this).attr("src",imageSRC);
	});
	
	$("ul li a img").click(function(){
		var price = $(this).attr("data_price");
		var text = '<option>'+$(this).attr("alt") + "................................... $" + price + '</option>';
		arr.push(price);
		$("#order").append(text);
		for(var i = 0; i < arr.length; i++){
		 	total += parseFloat(arr[i]);
		}
		$("#total").text("total:$"+total.toFixed(2));
		total = 0;
	});
	
	$("#place_order").click(function(){
		window.location.href = "checkout.html";
	});
	
	$("#clear_order").click(function(){
		$("#order option").remove();
		$("#total").text("total:$0");
		arr = [];
		total = 0;
	});
	
}); 