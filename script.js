const toggle = document.querySelector(".hamburger");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("open", !open);

  if (!open) {
    links.querySelector("a")?.focus();
  }
});

links.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
    toggle.focus();
  }
});
