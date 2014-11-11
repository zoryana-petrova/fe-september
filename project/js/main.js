$(document).ready(function() {

	$('.tooltips').on('mouseover', function(e){
		console.log('tooltip');
		$(this).tooltip('show');
	});

	$('#order').on('click', function(e){
		$('.alert-success').fadeIn();
	});


	$('.tab-content a[data-go="next"]').click(function (e) {
	  e.preventDefault();
	  // console.log($(this));
	  var href = $(this).attr('href');
	  // console.log('href', href);
	  $('#navtabs a[href="'+href+'"]').tab('show');
	});
	
});
