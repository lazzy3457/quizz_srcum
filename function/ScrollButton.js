
    (function() {
  // 1. Create the button element
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;"; // Up arrow HTML entity
  scrollBtn.id = "js-top-btn";
  scrollBtn.title = "Go to top";

  // 2. Apply CSS styles via JavaScript
  Object.assign(scrollBtn.style, {
    display: "none", // Hidden by default
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: "9999", // Ensure it is on the "toppest" layer
    border: "none",
    outline: "none",
    backgroundColor: "#555", // Dark grey background
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "50%", // Makes it a circle
    fontSize: "18px",
    width: "50px", // Fixed dimensions for perfect circle
    height: "50px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s, transform 0.3s"
  });

  // Add hover effects using mouse events since we are using inline styles
  scrollBtn.onmouseenter = () => {
    scrollBtn.style.backgroundColor = "#333";
    scrollBtn.style.transform = "scale(1.1)";
  };
  scrollBtn.onmouseleave = () => {
    scrollBtn.style.backgroundColor = "#555";
    scrollBtn.style.transform = "scale(1)";
  };

  // 3. Append the button to the body
  document.body.appendChild(scrollBtn);

  // 4. Scroll Logic: Show button when scrolling down
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // 5. Click Logic: Scroll to top smoothly
  scrollBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
})();

