const navLinks = document.querySelectorAll("nav > ul > li > a");
navLinks.forEach((e) => {
    e.addEventListener("click", () => {
        navLinks.forEach((e) => {
            e.classList.remove('active');
        });
        e.classList.add("active");
    })
});

const burgerIcon = document.querySelector(".burgerIcon > img") , ul = document.querySelector("nav > ul");

burgerIcon.addEventListener("click", (e) => {
    if (!ul.classList.contains("mobile-ul") && burgerIcon.getAttribute("state") == "open") {
        ul.classList.add("mobile-ul");
        burgerIcon.src = "./images/icon-close.svg";
        burgerIcon.setAttribute('state', "close");
    } else {
        ul.classList.remove("mobile-ul");
        burgerIcon.src = "./images/icon-hamburger.svg";
        burgerIcon.setAttribute("state", "open");
    }
})
