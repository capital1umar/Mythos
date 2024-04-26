const mobileNav = document.getElementById("mobileNav");
const openNav = document.querySelector("#openNav");
const sidebarMenu = document.querySelector(".sidebarMenu ");

function openNavigation() {
  const openNav = document.querySelector("#openNav");
  openNav.style.display = "flex";
  mobileNav.style.display = "none";
}

function closeNavigation() {
  openNav.style.display = "none";
  mobileNav.style.display = "block";
}
