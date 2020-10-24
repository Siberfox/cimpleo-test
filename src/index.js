import "normalize.css";
import "./scss/styles.scss";
import "swiper/swiper-bundle.min.css";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const modalButton = document.querySelector(".navbar__humb-button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__humb-button");

modalButton.addEventListener("click", () => {
  modal.classList.add("modal_active");
  document.body.style.overflow = "hidden";
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.body.style.overflow = "auto";
});
