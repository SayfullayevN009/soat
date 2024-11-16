const soatEl = document.querySelector("#hour");
const minutEl = document.querySelector("#minute");
const sekundEl = document.querySelector("#second");

setInterval(snl, 1000);
function snl() {
    const date = new Date();
    const sekund = date.getSeconds() / 60;
    const minut = (date.getMinutes() + sekund) / 60;
    const soat = (date.getHours() + minut) / 12;

    sekundEl.style.transform = "rotate(" + (sekund * 360) + "deg)";
    minutEl.style.transform = "rotate(" + (minut * 360) + "deg)";
    soatEl.style.transform = "rotate(" + (soat * 360) + "deg)";
}

snl();
