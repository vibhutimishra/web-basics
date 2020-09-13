var count=0;
var value=document.querySelector("#value");
var btn=document.querySelectorAll(".btn")

btn[0].addEventListener("click",function(){
    count--; 
    value.textContent=count;
    
});
btn[1].addEventListener("click",function(){
    count=0; 
    value.textContent=count;
});
btn[2].addEventListener("click",function(){
    count++; 
    value.textContent=count;
});

console.log(btn);