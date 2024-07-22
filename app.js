const andate = "20 May 2024 10:00 PM";

document.getElementById("End-date").innerText = andate;
const input= document.querySelectorAll("input");

function clock() {
    const end = new Date(andate);
    const now = new Date ()
    const diff = (end - now) / 1000;
    input[0].value = (Math.floor(diff/3600/24));
    input[1].value = Math.floor(diff/3600) %24;
    input[2].value = Math.floor(diff / 60) %60;
    input[3].value = Math.floor (diff) %60;
}

clock()

setInterval (
    () => {
        clock()
    },
    1000
)