const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');


hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function toggle(){
	var curtain = document.getElementById('curtain');
	curtain.classList.toggle('active')
}


//social media
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
		max: 30,
		speed: 400,
		glare: true,
		"max-glare": 1
	});