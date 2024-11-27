// HEADER ANİMASYONLU YAPI
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
});
