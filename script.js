document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado por entrar em contato! Responderemos em breve.");
    this.reset(); // Limpa o formul�rio ap�s o envio
});
