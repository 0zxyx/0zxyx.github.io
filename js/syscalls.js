$(document).ready(function(){
        $('.syscall-box').keyup(function(){
		$('.syscall-result').html('');
                var call = $('.syscall-box').val();
		var arch = $('.arch option:selected').val();
		var sanicall = call.replace(/[^a-zA-Z_ ]/gi, '');
		var saniarch = arch.replace(/[^0-9 ]/gi, '');
		var sanicall = sanicall.toLowerCase();
		if ($.trim(sanicall) != '')
		$.getJSON('/data/syscalls.json', function(data){
			var result = data[saniarch][sanicall];
			$(".syscall-result").text(result);

		});

	});

});
