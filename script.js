const serviceTitle = document.querySelector(".service_title");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            serviceTitle.classList.add("show");
            observer.disconnect();
        }
    });
}, { threshold: 0.2 });

observer.observe(serviceTitle);


const items = document.querySelectorAll(".service_img");

const Cardobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate once per card
    }
  });
}, { threshold: 0.2 });

items.forEach(item => Cardobserver.observe(item));


const contactTitle = document.querySelector(".contact__title");

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactTitle.classList.add("show");
            contactObserver.disconnect();
        }
    });
}, { threshold: 0.2 });

contactObserver.observe(contactTitle);

const burger = document.querySelector(".burger");
const navButtons = document.querySelector(".navigation_buttons");

burger.addEventListener("click", () => {
    navButtons.classList.toggle("open");
});
