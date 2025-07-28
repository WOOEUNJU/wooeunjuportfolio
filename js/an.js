 const h2El = document.querySelector(".section5 h2");

  window.addEventListener("scroll", function () {
    const rect = h2El.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8;

    if (isVisible) {
      h2El.classList.add("active");
    }
  });