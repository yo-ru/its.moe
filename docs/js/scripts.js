window.addEventListener('DOMContentLoaded', event => {
	/* #mainButton */
	const mainButton = document.getElementById("mainButton");
	mainButton.classList.add('animate__animated', 'animate__fadeIn');
	mainButton.addEventListener('animationend', () => {
  		mainButton.classList.remove('animate__fadeIn');
  		mainButton.classList.add('animate__pulse', 'animate__infinite')
	});

	/* #mascot */
	const mascot = document.getElementById("mascot");
	mascot.classList.add('animate__animated', 'animate__bounceInRight');
	mascot.addEventListener('animationend', () => {
		mascot.classList.remove('animate__bounceInRight');
		mascot.classList.add('animate__bounceOutRight', 'animate__delay-5s');
	});
});