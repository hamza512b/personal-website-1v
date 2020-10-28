import './assets/style.scss';
import "./components/gfx/gfx";
import "./components/text/text";

const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
    document.body.removeChild(loader);
});