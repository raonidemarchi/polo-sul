$('a').on('click', function(e) {
	e.preventDefault();
	
	let href = $(this).attr('href');
	
	$.ajax({
		method: 'GET',
		url: href,
		dataType: 'text',
		
		success: function(data) {
			console.log(data);
		}
	});
	
	console.log(href);
});