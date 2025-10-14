// programmes page
const checkboxes = document.querySelectorAll(".category-checkbox");
const searchInput = document.getElementById("searchProgram");
const allPrograms = document.querySelectorAll(".program-item");

function updateDisplay() {
  const selectedCategories = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const searchText = searchInput.value.toLowerCase();

  allPrograms.forEach((item) => {
    const nameEl = item.querySelector(".program-name");
    const nameText = nameEl.textContent;
    const category = item.dataset.category;

    // Highlight search term
    const regex = new RegExp(`(${searchText})`, "gi");
    const highlightedName = searchText
      ? nameText.replace(regex, "<mark>$1</mark>")
      : nameText;
    nameEl.innerHTML = highlightedName;

    // Show/hide based on category & search
    if (
      selectedCategories.includes(category) &&
      nameText.toLowerCase().includes(searchText)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Listen to checkboxes & search input
checkboxes.forEach((cb) => cb.addEventListener("change", updateDisplay));
searchInput.addEventListener("input", updateDisplay);

// Initialize display on page load
updateDisplay();

const recruitersSwiper = new Swiper(".recruiters-swiper", {
  slidesPerView: 5,
  slidesPerGroup: 1, // move 1 slide per swipe
  spaceBetween: 10, // smaller gap
  loop: true, // infinite loop
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: { slidesPerView: 5 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

// const swiper = new swiper(".company-logos-swiper", {
//   slidesPerView: 6, // show 6 logos at a time
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".company-logos-swiper .swiper-button-next",
//     prevEl: ".company-logos-swiper .swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     576: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 5,
//       spaceBetween: 25,
//     },
//     1200: {
//       slidesPerView: 6,
//       spaceBetween: 30,
//     },
//   },
// });

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".accreditation-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });
});
