window.addEventListener('DOMContentLoaded', event => {
	/* #mainButton */
	const mainButton = document.getElementById("mainButton");
	mainButton.classList.add('animate__animated', 'animate__fadeIn');
	mainButton.addEventListener('animationend', () => {
  		mainButton.classList.remove('animate__fadeIn');
  		mainButton.classList.add('animate__pulse', 'animate__infinite')
	});
});