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

(function () {
    emailjs.init("fxrehaacDoVAy464Y");
})();

function SendMail() {
    let messageValue = document.getElementById("message").value;

    if (messageValue.trim() !== "") {
        let params = {
            full_name: document.getElementById("full_name").value,
            email_id: document.getElementById("email_id").value,
            message: messageValue
        };

        emailjs.send("service_ueink36", "template_doprjrk", params)
            .then(function (res) {
                alert("Message Sent");
            })
            .catch(function (error) {
                alert("Error sending message: " + error);
            });
    } else {
        alert("Message is empty. Please enter a message before sending.");
    }
}