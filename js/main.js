// Leaflet

let map = L.map("map").setView([41.54329, 2.10942], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// iframe

function changeIframeSrc(src) {
  document.getElementById("iframeContent").src = src;
}

// Función para establecer el tema según el valor almacenado en la cookie
function setThemeFromCookie() {
  const htmlElement = document.querySelector("html");
  const theme = getCookie("theme");
  if (theme) {
    htmlElement.setAttribute("data-bs-theme", theme);
  }
}

// Función para guardar el tema seleccionado en una cookie
function setThemeToCookie(theme) {
  document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Función para obtener el valor de una cookie por nombre
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Función para cambiar el tema y guardar el cambio en la cookie
function toggleTheme() {
  const htmlElement = document.querySelector("html");
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-bs-theme", newTheme);
  setThemeToCookie(newTheme);
}

// Llama a setThemeFromCookie() cuando la página se carga para establecer el tema
window.addEventListener("DOMContentLoaded", setThemeFromCookie);
