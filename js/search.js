$(document).ready(function(){
        $('.search-box').keyup(function(){
		$('.result').html('');
                var nsearch = $('.search-box').val();
		var sanitize = nsearch.replace(/[^a-zA-Z ]/gi, '');
		var regex = new RegExp(sanitize, "i");
		if ($.trim(nsearch) != '')
		$.getJSON('/data/data.json', function(data){
			$.each(data, function(key, value){
				if(value.name.search(regex) != -1)
				{
					$('.result').append('<a href=" '+value.link+'" class="result-link">'+value.name+'</a>');
				}


			});
		})


	});


});

