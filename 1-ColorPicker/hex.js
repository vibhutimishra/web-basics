const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    var name="#"
    for( var i=0;i<6;i++){
        var randomNumber = getRandom();
        name=name+randomNumber;
    }
    document.body.style.backgroundColor=name;
    color.textContent=name;
});

function getRandom(){
    return parseInt(Math.random()*6)
}