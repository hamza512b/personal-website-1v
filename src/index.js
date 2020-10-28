import './assets/style.scss';
import "./components/text/text.scss";
import "./components/gfx/gfx";

const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
    document.body.removeChild(loader);
});