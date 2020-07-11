let bar = document.getElementById("bar");

bar.addEventListener("click", () => {
  if (document.getElementById('menu').classList.contains('show')) {
    document.getElementById('menu').classList.remove("show");
  document.getElementById('icon').setAttribute('src', './image/menu.svg')
  } else {
    document.getElementById('menu').classList.add("show");
  document.getElementById('icon').setAttribute('src', './image/x.svg')
  }
  
});
