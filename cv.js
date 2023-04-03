const photo = document.getElementById('photo');

photo.addEventListener('click', () => {
  photo.classList.toggle('animation');
});

document.addEventListener("keydown", function(event) {
  if (event.key === "a") {
    document.getElementById("a").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "s") {
    document.getElementById("s").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "w") {
    document.getElementById("w").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "e") {
    document.getElementById("e").scrollIntoView({behavior: "smooth"});
  }
});



