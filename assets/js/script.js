document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your message has been sent.");
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});
