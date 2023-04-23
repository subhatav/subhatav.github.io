
"use strict";

// element toggle function
const elementToggleFunc = function (element) {

  element.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {

  elementToggleFunc(sidebar);
});

// testimonials variables
const overlay = document.querySelector("[data-overlay]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseButton = document.querySelector("[data-modal-close-btn]");
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

// modal variable
const modalImage = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {

  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let index = 0; index < testimonialsItem.length; index++) {

  testimonialsItem[index].addEventListener("click", function () {

    modalImage.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImage.alt = this.querySelector("[data-testimonials-avatar]").alt;

    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;

    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseButton.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterButton = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {

  elementToggleFunc(this);
});

// add event in all select items
for (let index = 0; index < selectItems.length; index++) {

  selectItems[index].addEventListener("click", function () {

    elementToggleFunc(select);
    filterFunc(this.innerText);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  selectValue.innerText = selectedValue;
  selectedValue = selectedValue.toLowerCase();

  for (let index = 0; index < filterItems.length; index++) {

    if (selectedValue === "all") {

      filterItems[index].classList.add("active");

    } else if (selectedValue === filterItems[index].dataset.category) {

      filterItems[index].classList.add("active");

    } else {

      filterItems[index].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterButton[0];

for (let index = 0; index < filterButton.length; index++) {

  filterButton[index].addEventListener("click", function () {

    filterFunc(this.innerText);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");

    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formButton = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let index = 0; index < formInputs.length; index++) {

  formInputs[index].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {

      formButton.removeAttribute("disabled");

    } else {

      formButton.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let index = 0; index < navLinks.length; index++) {

  navLinks[index].addEventListener("click", function () {

    for (let index = 0; index < pages.length; index++) {

      if (this.innerHTML.toLowerCase() === pages[index].dataset.page) {

        pages[index].classList.add("active");
        navLinks[index].classList.add("active");

        window.scrollTo(0, 0);

      } else {

        pages[index].classList.remove("active");
        navLinks[index].classList.remove("active");
      }
    }
  });
}
