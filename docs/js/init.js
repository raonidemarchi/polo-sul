let instance 	= new M.Sidenav(document.querySelector('.sidenav'));
let $content 	= $('#content');

FastClick.attach(document.body);

$('a').click(function(e) {
	e.preventDefault();
	
	instance.close();
	
	let href = $(this).attr('href');
	
	if(href == '#') return;
	
	$.ajax({
		method: 'GET',
		url: 'view/' + href + '.html',
		dataType: 'text',
		
		success: function(data) {
			$content.html(data);
		}
	});
	
	$.getScript('js/controller/' + href + '.js');
});

$('.sidenav > li:nth-child(2) > a').click();