const contentElement = document.getElementById("content");

const icons = document.querySelectorAll(".icon");

function setActiveIcon(element) {
  icons.forEach((icon) => {
    if (icon === element) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
}

document.getElementById("publications").addEventListener("click", () => {
  contentElement.innerHTML = document.getElementById("publications-content").innerHTML;
  setActiveIcon(document.getElementById("publications"));
});

document.getElementById("talks").addEventListener("click", () => {
  contentElement.innerHTML = document.getElementById("talks-content").innerHTML;
  setActiveIcon(document.getElementById("talks"));
});

document.getElementById("code").addEventListener("click", () => {
  contentElement.innerHTML = document.getElementById("code-content").innerHTML;
  setActiveIcon(document.getElementById("code"));
});

// Set "Publications" as the default content
document.getElementById("publications").click();


