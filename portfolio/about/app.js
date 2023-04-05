const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');


hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function toggle(){
	var curtain = document.getElementById('curtain');
	curtain.classList.toggle('active')
}
//preloader
var loader = document.getElementById("preloader")
window.addEventListener("load", vanish);

function vanish() {
	loader.classList.add("disppear");
}
//responsive phone swiper
  var swiper = new Swiper(".myResponsiveSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
//swiper
 
  var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  //swiper2
     var swiper = new Swiper(".mySwipers", {
        effect: "cards",
        grabCursor: true,
      });



///////////////////////////
/* JS scripts are added see github repo for more 
https://github.com/fralec/ElegantJS */


//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});

window.sr = ScrollReveal();
sr.reveal('.animate-right',{
origin:'right',
duration:1000,
distance:'25rem',
delay:600
});

window.sr = ScrollReveal();
sr.reveal('.animate-scale',{
origin:'right',
duration:1000,
scale:'1',
delay:900
});


window.sr = ScrollReveal();
sr.reveal('.animate-top',{
origin:'top',
duration:1000,
distance:'25rem',
delay:600
});

window.sr = ScrollReveal();
sr.reveal('.animate-bottom',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:100
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-1',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:200
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-2',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:300
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-3',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:400
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-4',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:500
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-5',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:500
});






//social media
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
		max: 30,
		speed: 400,
		glare: true,
		"max-glare": 1
	});


//mudic player
var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
	if (player.paused) {
		player.play();
	} else {
		player.pause();
	}
}

playbtn.addEventListener("click", playpause);
player.onplay = function () {
	playbtn.classList.remove("fa-play");
	playbtn.classList.add("fa-pause");
}
player.onpause = function () {
	playbtn.classList.add("fa-play");
	playbtn.classList.remove("fa-pause");
}
player.ontimeupdate = function () {
	let ct = player.currentTime;
	current.innerHTML = timeFormat(ct);
	//progress
	let duration = player.duration;
	prog = Math.floor((ct * 100) / duration);
	progress.style.setProperty("--progress" , prog + "%"); 
}
function timeFormat(ct) {
	minutes = Math.floor(ct / 60);
	seconds = Math.floor(ct % 60);

	if (seconds < 10) {
		seconds="0"+seconds;
	}

	return minutes + ":" + seconds;
}





/* JS scripts are added see github repo for more 
https://github.com/fralec/ElegantJS */

$('#share').elegant({
    clickNextToClose: true,
    newTab: true,
    facebook: {
        id: 'alec.vonbarnekow'
    },
    twitter: {
        id: 'fralec_'
    },
    github: {
        id: 'fralec'
    },
    website: {
        id: 'https://fralec.com'
    },
    instagram: {
        id: 'fralec__'
    }
});



/*//canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	
let particlesArray;

//get mouse position
let mouse = {
	x:null,
	y:null,
	radius: (canvas.height/100) * (canvas.width/100)
	};

window.addEventListener('mousemove' ,
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
	}
);

//create particle
class Particle {
	constructor(x, y, directionX, directionY, size, color) {
		this.x = x;
		this.y = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		this.color = color;
	}
	//method to draw individual particles

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = '#30D5C8';
		ctx.fill();
	}
	update(){
		//check if particles is still within canvas
		if (this.x > canvas.width || this.x < 0) {
			this.directionX = -this.directionX;
		}
		if (this.y > canvas.height || this.y <0) {
			this.directionY = -this.directionY;
		}
		//check collision direction
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx*dx + dy*dy);
		if (distance < mouse.radius + this.size){
			if (mouse.x < this.x && this.x < canvas.width - this.size *10) {
				this.x += 10;
			}
			if (mouse.x > this.x && this.x > this.size * 10) {
				this.x -= 10;
			}
			if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
				this.y += 10;
			}
			if (mouse.y > this.y && this.y > this.size *10) {
				this.y -= 10;
			}
		}
		//move particles
		this.x += this.directionX;
		this.y += this.directionY;
		//draw
		this.draw();
	}
}

//create particle array
function init() {
	particlesArray = [];
	let numberOfParticles = (canvas.height * canvas.width) / 20000;
	for ( let i = 0; i < numberOfParticles; i++) {
		let size = (Math.random() * 5) + 1;
		let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
		let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
		let directionX = (Math.random() * 5) -2.5;
		let directionY = (Math.random() * 5) -2.5;
		let color = '#30D5C8';

		particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
	}	
}

//animation loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth, innerHeight);

	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
	}
	connect();
}
function connect(){
	for (let a = 0; a < particlesArray.length; a++) {
		for (let b = a; b < particlesArray.length; b++) {
			let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
			+ ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
			if (distance < (canvas.width/7) * (canvas.height/7)) {
				ctx.strokeStyle='rgba(255,255,255,1)';
				ctx.beginPath();
				ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
				ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
				ctx.stroke();
			}
		}
	}
}
init();
animate();*/


