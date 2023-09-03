function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "davyjuniour25@gmail.com",
        Password : "Sidebitch25",
        To : 'davyjuniour25@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}