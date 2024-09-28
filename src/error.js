document.addEventListener("DOMContentLoaded", function () {
  const tryNowLink = document.getElementById("try-now-link");

  if (!tryNowLink) {
    console.error("The element with ID 'try-now-link' was not found.");
    return; // Exit the function if the element is not found
  }

  // check the screen width
  // redirect to draw.html if screen width is greater than 1024px, otherwise to error.html
  function updateLink() {
    if (window.innerWidth > 1024) {
      tryNowLink.href = "./draw.html";
    } else {
      tryNowLink.href = "./error.html";
    }
  }
  updateLink();

  // Optional: Update on screen resize
  window.addEventListener("resize", updateLink);
});
