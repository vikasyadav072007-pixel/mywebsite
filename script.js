// ===============================
// Portfolio Website JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Loaded Successfully");

    // Research Card Hover Effect

    const researchCards = document.querySelectorAll(".research-card");

    researchCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.08)";

        });

    });

    // Smooth Scrolling for Navigation Links

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});