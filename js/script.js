 // changing header when scrolling


const header = document.querySelector('.header');
const body = document.querySelector('body');

function headerTop() {

	if(window.scrollY > 2) {
		body.classList.add('scroll');
	}else{
		body.classList.remove('scroll');
	}

};

window.addEventListener('scroll', headerTop);



// move highlighter when hovering around nav__links

const highLighter = document.querySelector('.highlighter');
const navLinks = document.querySelectorAll('.nav__link');

function handleEnter() {
	const size = this.getBoundingClientRect();

	const cords = {
		height: size.height,
		width: size.width,
		top: size.top,
		left: size.left,
	}

	highLighter.classList.add('open');
	highLighter.style.height = `${cords.height}px`;
	highLighter.style.width = `${cords.width}px`;
	highLighter.style.top = `${cords.top - header.offsetTop}px`;
	highLighter.style.left = `${cords.left}px`;

}

function handleLeave() {
	highLighter.classList.remove('open');
}

navLinks.forEach(cur => {
	cur.addEventListener('mouseenter', handleEnter);
	cur.addEventListener('mouseleave', handleLeave);
});



// scroll to  section when clicking on nav__link
// jquery
 
$('.nav__link').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - header.offsetHeight
            ,
        }, 1000);
    }

});


// adding class to the current nav link


navLinks.forEach(cur => {
	cur.addEventListener('click', function() {
		navLinks.forEach(alreadyActive => {
			alreadyActive.classList.remove('nav__link--active');
		});
		this.classList.add('nav__link--active');
	})
})



// reservation images slide in


const images = document.querySelectorAll('.reservation__image img');
const reservation = document.querySelector('.reservation');

window.addEventListener('scroll', showImg);

function showImg() {
	
	images.forEach(slideImg => {
		const slideInAt = (window.scrollY + window.innerHeight) - (slideImg.offsetHeight / 2) // halfway through the img
		const imageBottom = slideImg.offsetTop + slideImg.offsetHeight; // bottom of the img

		const isHalfShown = slideInAt > slideImg.offsetTop;
		const isScrollBackToImg = window.scrollY < imageBottom;

		if(isHalfShown && isScrollBackToImg) {
			slideImg.classList.add('visible');
		}else{
			slideImg.classList.remove('visible');
		}

	})
}



// display navigation when clicking on menuIcon


const menuIcon = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav');

function displayNav() {
	body.classList.toggle('visible__nav');
}

menuIcon.addEventListener('click', displayNav);


