$(document).ready(function(){
	hljs.highlightAll();
	$('button.cp-btn').on('click', function(e){
		e.preventDefault();
		var codeBlock = document.getElementsByClassName('code');
		var copyButton = document.getElementsByClassName('cp-btn');
		
		var copyTextHandler = () => {
			var text = codeBlock[this.id].innerText;
			
			navigator.clipboard.writeText(text).then(
				() => {
					copyButton[this.id].innerHTML = "Copied";
					setTimeout(() => {
						copyButton[this.id].innerHTML = "Copy";
					}, 1000);
				},
				() => {
					console.log('Error writing to clipboard');
				},
			);
		};
		copyTextHandler();
	});
});

