const odliczanie = () => {
    const dzisiaj = new Date();
    const dzien = dzisiaj.getDate();
    const miesiac = dzisiaj.getMonth()+1;
    const rok = dzisiaj.getFullYear();

    const godzina = dzisiaj.getHours();
    const minuta = dzisiaj.getMinutes();
    const sekunda = dzisiaj.getSeconds();

    const czas = `${dzien} / ${miesiac} / ${rok}  ||  ${godzina}:${minuta}:${sekunda}`;

    // const czas = dzien + "/" + miesiac + "/" + rok + "|" + godzina + ":" + minuta + ":" + secunda;

    console.log({ czas });

    console.log('Lech Poznan');
    console.log(3);
    console.log(1922);
    console.log();

    // const adres = document.getElementById("zegar");
    // adres.innerHTML = czas;

    document.getElementById("zegar").innerHTML = czas;
}

window.onload = () => {
    setInterval(odliczanie, 1000);
};