$(document).ready(function(){
        $('.syscall-box').keyup(function(){
		$('.syscall-result').html('');
                var call = $('.syscall-box').val();
		var arch = $('.arch option:selected').val();
		var sanicall = call.replace(/[^a-zA-Z ]/gi, '');
		var sanicall = sanicall.toLowerCase();
		var saniarch = arch.replace(/[^0-9 ]/gi, '');
		if ($.trim(sanicall) != '')
		$.getJSON('/data/syscalls.json', function(data){
			var result = data[saniarch][sanicall];
			$(".syscall-result").text(result);

		});

	});

});
