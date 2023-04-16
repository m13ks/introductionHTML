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


document.addEventListener("DOMContentLoaded", async function() {
  const response = await fetch('https://api.github.com/users/m13ks/repos');
  const repositories = await response.json();
  const repoList = document.getElementById('projects-list');
  repositories.forEach(repository => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = repository.html_url;
    link.textContent = repository.full_name;
    listItem.appendChild(link);
    if (repository.description) {
      const description = document.createElement('p');
      description.textContent = repository.description;
      listItem.appendChild(description);
    }
    repoList.appendChild(listItem);
  });
});




