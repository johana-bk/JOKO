/**
 * Gestion du formulaire de contact
 */

export const formContact = () => {

    // We wait for the DOM to be loaded
    window.addEventListener("DOMContentLoaded", () => {

        // If the element doesn't exist, we stop the function
        if (!document.querySelector('.contact-form')) return;
        const form = document.querySelector('form');
        var i1 = 0, i2 = 0, i3 = 0, i4 = 0;

        // check if each input exist
        if (form.querySelector('#form-name') && form.querySelector('#form-phone') && form.querySelector('#form-email') && form.querySelector('#form-message')) {

            // listen to the name keyup event
            form.querySelector('#form-name').addEventListener('keyup', function () {
                if (form.querySelector('#form-name').value.length > 2) {
                    // check if name is valid
                    if (form.querySelector('#form-name').value.match(/^[a-zA-Z|\s]{2,20}$/)) {
                        i1 = 1;
                        form.querySelector('.error-form-name').innerHTML = "";
                    } else {
                        i1 = 0;
                        form.querySelector('.error-form-name').style.color = "red";
                        form.querySelector('.error-form-name').innerHTML = "Le nom doit contenir entre 2 et 20 caractères et ne doit pas contenir de caractères spéciaux ou de chiffres";
                    }
                }
            });

            // listen to the phone keyup event
            form.querySelector('#form-phone').addEventListener('keyup', function () {
                if (form.querySelector('#form-phone').value.length > 9) {
                    // check if phone number is valid
                    if (form.querySelector('#form-phone').value.match(/^[0-9]{10}$/)) {
                        i2 = 1;
                        form.querySelector('.error-form-tel').innerHTML = "";
                    } else {
                        i2 = 0;
                        form.querySelector('.error-form-tel').style.color = "red";
                        form.querySelector('.error-form-tel').innerHTML = "Le numéro de téléphone doit contenir 10 chiffres";
                    }
                }
            });

            // listen to the email keyup event
            form.querySelector('#form-email').addEventListener('keyup', function () {
                if (form.querySelector('#form-email').value.length > 5) {
                    // check if email is valid
                    if (form.querySelector('#form-email').value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
                        i3 = 1;
                        form.querySelector('.error-form-mail').innerHTML = "";
                    } else {
                        i3 = 0;
                        form.querySelector('.error-form-mail').style.color = "red";
                        form.querySelector('.error-form-mail').innerHTML = "L'adresse email n'est pas valide";
                    }
                }
            });

            // listen to the message keyup event
            form.querySelector('#form-message').addEventListener('keyup', function () {
                if (form.querySelector('#form-message').value.length > 20) {
                    // check if message is valid
                    if (form.querySelector('#form-message').value.match(/^[a-zA-Z0-9\s\.\,\!\?\:\;\(\)\'\"]{20,300}$/)) {
                        i4 = 1;
                        form.querySelector('.error-form-message').innerHTML = "";
                    } else {
                        i4 = 1;
                        form.querySelector('.error-form-message').style.color = "red";
                        form.querySelector('.error-form-message').innerHTML = "Le message doit contenir entre 20 et 300 caractères";
                    }
                }
            });
        }

        // listen to the form submit event
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            // check if all inputs are valid
            if (form.querySelector('button[type="submit"]') && (parseInt(i1) + parseInt(i2) + parseInt(i3) + parseInt(i4)) == 4) {

                const name = document.querySelector('#form-name').value;
                const phone = document.querySelector('#form-phone').value;
                const email = document.querySelector('#form-email').value;
                const message = document.querySelector('#form-message').value;
        
                alert("Bonjour " + name + ", votre message a bien été envoyé, l'agence vous contactera prochainement"); 

            }
    
        });

    });
}