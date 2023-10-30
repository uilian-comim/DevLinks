function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("header img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar_light.jpg");
    } else {
        img.setAttribute("src", "./assets/avatar.jpg");
    }
}
