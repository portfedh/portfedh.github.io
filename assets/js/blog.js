// Blog functionality
// Copy code functionality
function copyCode(button) {
  const codeBlock = button.closest(".code-block").querySelector("code");
  const text = codeBlock.textContent;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      const originalText = button.textContent;
      button.textContent = "Copied!";
      button.classList.add("copied");

      setTimeout(function () {
        button.textContent = originalText;
        button.classList.remove("copied");
      }, 2000);
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
      button.textContent = "Failed";
      setTimeout(function () {
        button.textContent = "Copy";
      }, 2000);
    });
}

// Native smooth scrolling for table of contents
document.addEventListener("DOMContentLoaded", function () {
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');

  tocLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Make copyCode function globally available
window.copyCode = copyCode;