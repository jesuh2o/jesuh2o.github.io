const toggle = document.getElementById("themeToggle");
if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
}
toggle?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme =
        document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
});