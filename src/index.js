// Define the navigate function in the global scope
function navigateTo(page) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  // Show the selected page
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.add("active");
  } else {
    console.error("Page not found:", page);
  }
}

// Set up event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the try now link and add the click event listener
  const tryNowLink = document.getElementById("try-now-link");
  if (tryNowLink) {
    tryNowLink.onclick = () => navigateTo("draw");
    console.log("Navigating to draw page");
  }
});
