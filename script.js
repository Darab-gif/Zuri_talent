const links = document.querySelectorAll(".link");
const current = document.getElementsByClassName("active");

links.forEach((link) =>
  link.addEventListener("click", function () {
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  })
);
