$(function(){  
	$('.carousel').carousel("pause");
	//锚点跳转滑动效果  
	$("#tour-list-nav").find('a[href*=#]').click(function(){
		var target = $(this.hash);
		if(target.length){
			var targetOffset = target.offset().top;
			$("html, body").animate({
				scrollTop: targetOffset
			}, 800);
			return false;
		}
	});
});

$(function(){
	$(".tour-select-data").delegate(".tour-add", "click", function(e){
		e.preventDefault();
		var inputEle = $(this).parent().find(".book-num");
		var inputNum = parseInt(inputEle.val());
		if(!inputNum || inputNum <= 1) inputNum = 1;
		inputNum = inputNum + 1;
		inputEle.val(inputNum);
	}).delegate(".tour-minus", "click", function(e){
		e.preventDefault();
		var inputEle = $(this).parent().find(".book-num");
		var inputNum = parseInt(inputEle.val());
		if(!inputNum || inputNum <= 1){
			inputNum = 1;
		}else{
			inputNum = inputNum - 1;
		}
		inputEle.val(inputNum);
	});
});

$(function(){
	var now = new Date();
	$(".tour-date").datetimepicker({
		"autoclose": true,
		"minView": 2,
		"todayHighlight": true,
		"startDate": now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate()+1)
	});
});

$(function(){
	$(".tour-book-btn").click(function(e){
		e.preventDefault();
	});
});