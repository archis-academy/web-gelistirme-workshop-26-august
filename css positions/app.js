const dis = document.getElementById("dis1");

let isChosen = false;

function disiSec(){
    if(isChosen){
        dis.style.backgroundColor = "white";
        isChosen = !isChosen;
        dis.innerHTML = "Diş 1 Seçili Değil";
    } else {
        dis.style.backgroundColor = "red";
        isChosen = !isChosen;
        dis.innerHTML = "Diş 1 SEÇİLİ";
    }
}