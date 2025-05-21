document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("dark-mode-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "Switch to Dark Mode";
    } else {
      toggleBtn.textContent = "Switch to Light Mode";
    }
  });

  const downloadBtn = document.querySelector(".button");
  downloadBtn.addEventListener("click", function () {
    alert("Your download will start shortly...");
  });
});