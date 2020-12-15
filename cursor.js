const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top:" + (e.clientY - 10) + "px; left:" + (e.clientX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("click");
  setTimeout(() => {
    cursor.classList.remove("click");
  }, 500);
});
