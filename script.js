AOS.init();

const countDownDate = new Date("Jul 24, 2025 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".data").innerHTML = "Encerrado";
    }
}, 1000);
