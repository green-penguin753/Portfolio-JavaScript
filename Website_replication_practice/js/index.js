window.addEventListener("scroll", () => {
  const mainHeader = document.querySelector("#main-header");
  const stickyHeader = document.querySelector("#sticky-header");
  const scrollPosition = window.scrollY;
  const triggerPosition = mainHeader.offsetHeight;

  if (scrollPosition > triggerPosition) {
    stickyHeader.classList.add("visible");
  } else {
    stickyHeader.classList.remove("visible");
  }
});

const hoverBorders = document.querySelectorAll(".hover-border");

hoverBorders.forEach((hoverBorder) => {
  hoverBorder.addEventListener("mouseover", () => {
    hoverBorder.classList.add("hovered");
  });

  hoverBorder.addEventListener("mouseout", () => {
    hoverBorder.classList.remove("hovered");
  });
});

let current = 0;
const slides = document.querySelectorAll(".slide");

slides[current].classList.add("image-visible");

setInterval(() => {
  slides[current].classList.remove("image-visible");

  current = (current + 1) % slides.length;
  slides[current].classList.add("image-visible");
}, 4000);

for (let i = 0; i < slides.length; i++) {
  slides[i].animate(
    [
      { width: "105%", height: "105vh" },
      { width: "100%", height: "100vh" },
    ],
    {
      duration: 4000,
      iterations: Infinity,
    }
  );
}
