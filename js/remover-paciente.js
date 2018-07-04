var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);

})


//atributo tagName guarda string com o nome do elemento, .tagName retorna tag em maiusculo
//Exemplo
// var table = document.querySelector("table");

// table.addEventListener("dblclick", function(event){

//         if(event.target.tagName == "TD"){
//             event.target.parentNode.remove();
//         }


// })