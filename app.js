// function doFunction() {
//     console.log('clicou no botão');
//}

// window.onload = function() { 
//     const button = document.getElementById("myButton");
//     button.addEventListener("click",junior, false);    
// }

// function junior(){
//     console.log('junior');
// }

// var tituloOriginal
// var clicou = false

// window.onload = function() { 
//     tituloOriginal = document.getElementById("T1").textContent;    
// }

// console.log(clicou) 
// if (clicou == true) {
    // tituloP1.textContent = "ola";
//     clicou = false
// } else {
//     tituloP1.textContent = tituloOriginal
//     clicou = true
// } 

// console.log(resposta1.value); 
// console.log(resposta1.value); 

// var tituloP1 = document.getElementById("T1");

function submitEvent(event) {
    event.preventDefault();

    var score = 0 

    var resposta1 = document.getElementById("p1");

    if (resposta1.value.toLowerCase() == "curry") {
        console.log("correto")
        resposta1.style.backgroundColor = 'green';
        score += 1
    } else {
        console.log("Incorreta")
        resposta1.style.backgroundColor = 'red';
    }

    var resposta2 = document.getElementById("p2");

    if (resposta2.value.toLowerCase() == "golden") {
        console.log("correto")
        resposta2.style.backgroundColor = 'green';
        score += 1
    } else {
        console.log("incorreeto")
        resposta2.style.backgroundColor = 'red';
    }

    var resposta3 = document.getElementById("p3");

    if (resposta3.value.toLowerCase() == "curry") {
        console.log("correto")
        resposta3.style.backgroundColor = 'green';
        score += 1
    } else {
        console.log("incorreto")
        resposta3.style.backgroundColor = 'red';
    }

    var resposta4 = document.getElementById("p4");

    if (resposta4.value = "30") {
        console.log("correto")
        resposta4.style.backgroundColor = 'green';
        score += 1
    } else {
        console.log("incorreto")
        resposta4.style.backgroundColor = 'red';
    }

    var resposta5 = document.getElementsByName("option");
    for(i = 0; i < resposta5.length; i++) {
        if(resposta5[i].checked == true && i == 2) {
        console.log("correto")
        score += 1
        // Aqui sabemos que selecionou a resposta certa
        } else {
            console.log("incorreto")
        }

        // Aqui apenas parra colorir o gabarito
        if(i == 2) {
            resposta5[i].parentNode.style.color = 'green'
        } else {
            resposta5[i].parentNode.style.color = 'red'
        }
    }
    console.log(score);

    document.getElementById("score").innerText = "total de pontos: " + score
} 



