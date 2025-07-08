document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const selectedTab = tab.getAttribute('data-tab');

    // Toggle tab button styles
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    // Toggle content visibility
    document.querySelectorAll('.tab-content').forEach(content => {
      if (content.id === selectedTab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});


// Automatically highlight the current page's nav link
const currentPage = location.pathname.split("/").pop(); // e.g., "mars.html"

document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage || (href === "index.html" && currentPage === "")) {
    link.classList.add("active");
  }
});
