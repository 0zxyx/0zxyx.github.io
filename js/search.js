$(document).ready(function(){
        $('.search-box').keyup(function(){
		$('.result').html('');
                var nsearch = $('.search-box').val();
		var regex = new RegExp(nsearch, "i");
		if ($.trim(nsearch) != '')
		$.getJSON('/data/data.json', function(data){
			$.each(data, function(key, value){
				if(value.name.search(regex) != -1)
				{
					//$('.result').append(value.name + " " +  value.link + "<br>");
					$('.result').append('<a href=" '+value.link+'" class="result-link">'+value.name+'</a>');
				}


			});
		})


	});


});

