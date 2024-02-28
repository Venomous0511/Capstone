const mainMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', () => {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
});

closeMenu.addEventListener('click', () => {
    mainMenu.style.top = '-100%';
});

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('full_Name'),
    contactEmail = document.getElementById('Email_id'),
    contact = document.getElementById('Message'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contact.value === '') {
        // Show message	
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_ueink36', 'template_doprjrk', contactForm, 'fxrehaacDoVAy464Y')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                // Remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        // To clear input fields after a successful sent
        contactName.value = ''
        contactEmail.value = ''
        contact.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)