// Email Js Contact Form

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

// Scroll Bar Animation

let progressbar = document.getElementById("progressbar")
let percent = document.getElementById("percent")

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progress + "%";
    percent.innerHTML = Math.round(progress) + "%"
}

// used to initilize animate on scroll library

AOS.init({
    // Global settings:
    disable: 'phone',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});