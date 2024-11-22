/**
 * Owl Carousel
 */

export const owlCarousel = () => {
	// we wait for the DOM to be loaded
	window.addEventListener("DOMContentLoaded", () => {
		// If the element doesn't exist, we stop the function
		if (!document.querySelector(".testimonials-container")) return;

		// initialize the owl carousel object with the options
		$(".testimonials-container").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			margin: 10,
			nav: true,
			navText: [
				"<i class='fa-solid fa-arrow-left'></i>",
				"<i class='fa-solid fa-arrow-right'></i>",
			],
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				600: {
					items: 1,
					nav: true,
				},
				768: {
					items: 2,
				},
			},
		});
	});
};
