/**
 * Affiche le menu de navigation en version mobile
 */

export const navMobile = () => {
    // We wait for the DOM to be loaded
    window.addEventListener("DOMContentLoaded", () => {
        // If the element doesn't exist, we stop the function
        if (!document.querySelector('.mobile-button')) return;

        // We select the elements we need
        const mobileButton = document.querySelector('.mobile-button');
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');

        // We add an event listener on the mobile button
        mobileButton.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // We add an event listener on the window to close the menu when the window is resized
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
}