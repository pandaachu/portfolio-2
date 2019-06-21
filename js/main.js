$(document).ready(function() {
	// 點擊.gotop，就往上滑到網頁頂端
	   $('.gotop a').click(function(event) {
		   
		   event.preventDefault();
		   $('html, body').animate({
			   scrollTop: 0
			   },
			   1000);
	   });
});