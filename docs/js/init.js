let parallax	= new M.Parallax(document.querySelector('.parallax'));
let sidenav 	= new M.Sidenav(document.querySelector('.sidenav'));
let $content 	= $('#content');

FastClick.attach(document.body);

// SPA
$('a').click(function(e) {
	e.preventDefault();
	
	sidenav.close();
	
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
});

$('.sidenav > li:nth-child(2) > a').click();