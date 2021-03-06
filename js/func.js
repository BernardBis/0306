console.log("podpięty JS. Hallo Word");
alert("podpięty JS. Hallo Word");


/*
document.getElementById("btn").addEventListener("click",function(e){
    //zabezpiecza nas przed wysyłaniem komentarza do backendu
    // bez tego zniknie
    e.preventDefault();
    document.getElementById("demo").innerHTML = 
    document.getElementById("input").value + document.getElementById("input").value; 
})
*/

//wresja strzałkowa
proba = (e) => {
    e.preventDefault();
    document.getElementById("demo").innerHTML = 
    document.getElementById("input").value + document.getElementById("input").value; 
}

document.getElementById("btn").addEventListener("click",proba);



