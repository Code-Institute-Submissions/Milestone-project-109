function sendMail(contactUs){ //send email from website to inbox//
    emailjs.send("service_3206063", "AmericanAdventures", {
        "from_name": contactUs.name.value,
        "from_email": contactUs.Email.value,
        "contact_us": contactUs.HowCanWeAssist.value})
    .then(
        function(response) {
            alert("Success");
            window.location.href = 'index.html' //allows user to know email has been sent and re-directs to home page//
        },
        function(error) {
            alert("Failed");
        });
return false;
}

