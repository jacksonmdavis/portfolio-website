// Fetch and insert the navbar
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // Set active link based on the current page
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.parentElement.classList.add("active");
      }
    });
  });
