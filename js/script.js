const $hamb = document.querySelector('#hamburger');
const $navbarInner = document.querySelector('.navbar-inner');

console.log($hamb)
$hamb.addEventListener("click", function() {
  if ($navbarInner.style.display === "none" || $navbarInner.style.display === "") {
      // console.log('click')
      $navbarInner.style.display = "flex";
    } else {
      $navbarInner.style.display = "none";
    }
  });
