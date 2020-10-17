function sendMail(contactUs){
    emailjs.send("service_3206063", "AmericanAdventures", {
        "from_name": contactUs.name.value,
        "from_email": contactUs.Email.value,
        "contact_us": contactUs.HowCanWeAssist.value})
    .then(
        function(response) {
            alert("Success");
            window.location.href = 'index.html'
        },
        function(error) {
            alert("Failed");
        });
return false;
}

