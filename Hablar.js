document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);  //con click se llama a funcion
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}