const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы

// Проверка темной темы в local storage
if (localStorage.getItem("darkMode") === "dark") {
    localStorage.setItem("darkMode", "dark");
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Проверка темной темы на уровне системных настроек
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("darkMode")
) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Если меняются системные настройки, меняем тему
// window
//     .matchMedia("(prefers-color-scheme: dark)")
//     .addEventListener("change", (event) => {
//         const newColorScheme = event.matches ? "dark" : "light";

//         alert("Change!!!");

//         if (newColorScheme === "dark") {
//             btnDarkMode.classList.add("dark-mode-btn--active");
//             document.body.classList.add("dark");
//         } else {
//             btnDarkMode.classList.remote("dark-mode-btn--active");
//             document.body.classList.remote("dark");
//         }
//     });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
