const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navlinks");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
const search = document.querySelector("#articleSearch");
if (search) {
  const items = [...document.querySelectorAll("[data-searchable]")];
  const empty = document.querySelector(".empty");
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    items.forEach(item => {
      const match = item.textContent.toLowerCase().includes(q);
      item.style.display = match ? "" : "none";
      if (match) shown++;
    });
    if (empty) empty.style.display = shown ? "none" : "block";
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
