document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".section-title");
  const intro = document.querySelector(".intro-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // ✅ 애니메이션 초기화 후 다시 실행
          title.classList.remove("active");
          intro.classList.remove("active");

          void title.offsetWidth; // 강제 리플로우
          void intro.offsetWidth;

          title.classList.add("active");
          intro.classList.add("active");
        }
      });
    },
    { threshold: 0.3 } // 30% 보여야 실행
  );

  observer.observe(document.querySelector(".profile-intro"));
});