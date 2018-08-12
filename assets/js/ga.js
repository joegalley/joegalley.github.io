  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90736927-1', 'auto');
  ga('send', 'pageview');

	var trackOutboundLink = function(url) {
		ga('send', 'event', 'outbound', 'click', url, {
			'transport': 'beacon',
			'hitCallback': function() {
				document.location = url;
			}
		});
	}	


	$(document).ready(function() {
		$("a").each(function() {
			$(this).click(function() {

				var url = $(this).attr("href");
				
				ga('send', 'event', 'outbound', 'click', url, {
					'transport': 'beacon',
					'hitCallback': function() {
						document.location = url;
					}
				});
			});
		});
	});

