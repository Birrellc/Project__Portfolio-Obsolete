// Credit - Part of this code is from the code institute course which i have expanded on for my needs.

let formContact = document.getElementById("contactForm");
formContact.addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButtonContact = document.getElementById("submitBtnContact");
    submitButtonContact.innerHTML = "Submitting!";
    emailjs.send("gmail", "chris-portfolio", {
            "from_name": contactForm.fullNameContact.value,
            "from_email": contactForm.emailContact.value,
            "subject": contactForm.subjectContact.value,
            "message": contactForm.messageContact.value
        })
        .then(
            function () {
                let submitButtonContact = document.getElementById("submitBtnContact");
                submitButtonContact.innerHTML = "Submitted!";
                document.getElementById("submitBtnContact").disabled = true;
                setTimeout(function () {
                    document.getElementById("submitBtnContact").disabled = false;
                    document.getElementById("submitBtnContact").innerHTML = "Submit";
                }, 2500);
            },
            function (error) {
                alert("Error Please Try Again!");
                console.log("FAILED", error);
            });
    document.getElementById('contactForm').reset();
    return false;
});