var y=Math.floor(Math.random()*10+1);
playername=localStorage.getItem("player_name");
var guess =1;
function submit(){
    var x =document.getElementById("guessField").value;
if(x==y){
    alert("parabéns"+playername+",você acertou em "+guess+" tentativa(s)");
    guess=1;
} else if(x>y){
    guess++;
    alert("opa,resposta errada! tente um numero menor");
} else{
    guess++;
    alert("opa,resposta errada! tente um numero maior");  
}
}
function playAgain(){
    y=Math.floor(Math.random()*10+1); 
}