function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
	
	const header  = document.querySelector(headerSelector),
		  tab     = document.querySelectorAll(tabSelector),
		  content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = "none";
		})

		tab.forEach(item => {
			item.classList.remove(activeClass);
		})
	}

	function showTabContent(i = 0) {
		tab[i].classList.add(activeClass);
		content[i].style.display = "block";
	}

	hideTabContent();
	showTabContent()

	header.addEventListener('click', function(e) {
		const target = e.target;
		e.preventDefault();

		if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
			target.parendNode.classList.contains(tabSelector.replace(/\./, "")))) {
			tab.forEach((item, i) => {
				if (target == item || target.parendNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	})
}

tabs('.tabs__header', '.tabs__tab', '.tabs__block', 'active');
tabs('.popular__header', '.popular__tab', '.popular__block', 'active')

$(document).ready(function() {
	$('.main__slider').slick({
		dots: true,
		infinite: false,
		adaptiveHeight: true
	});
	$('.brand__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		adaptiveHeight: true
	});
})

function scrollPage() {
	const scrollBtn    = document.querySelector('.first__scroll'),
		  footerScroll = document.querySelector('.footer__scroll'),
		  topmenu 	   = document.querySelector('.topmenu'),
		  promo		   = document.querySelector('.main__promo');


	scrollBtn.addEventListener('click', function(e) {
		e.preventDefault();
		promo.scrollIntoView({behavior: 'smooth'});
	})
	footerScroll.addEventListener('click', function(e) {
		e.preventDefault();
		topmenu.scrollIntoView({behavior: 'smooth'});
	})
}
scrollPage();