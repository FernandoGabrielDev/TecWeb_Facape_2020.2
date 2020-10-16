document.querySelector(".iconhambg").addEventListener("click", () => document.querySelector(".container").classList.toggle("mostrar"));

const player1 = "X";
const player2 = "O";
var vez = player1;
var fim = false;

atualizamostra_vez();
fespacos();

function atualizamostra_vez(){
    if(fim){return;}
    if(vez == player1){
        var player = document.querySelectorAll("div#mostra_vez img")[0];
        player.setAttribute("src", "../src/X.png");
    }else{
        var player = document.querySelectorAll("div#mostra_vez img")[0];
        player.setAttribute("src", "../src/O.png");
    }
}

function fespacos(){
    var espacos = document.getElementsByClassName("espaco");
    for(var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if(fim){return;}
            if(this.getElementsByTagName("img").length == 0){
                if(vez == player1){
                    this.innerHTML = "<img src='../src/X.png'>";
                    this.setAttribute("jogada", player1);
                    vez = player2;
                }else{
                    this.innerHTML = "<img src='../src/O.png'>";
                    this.setAttribute("jogada", player2);
                    vez = player1;
                }
                atualizamostra_vez();
                fvencedor();
            }           
        })
    } 
}

async function fvencedor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");
    
    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");
    
    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if( (a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")){
        vencedor = a1;
    }else if( (b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = b2;
    }else if( (c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "") ){
        vencedor = c3;
    }
    if((a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 != "" && c1 != "" && c2 !="" && c3 !="" && vencedor == "")) {
        fim = true;
        await Sleep(50);
        alert("O jogo terminou empatado!");
        location.reload();
    }
    if (vencedor != ""){
        fim = true;
        await Sleep(50);
        alert("O vencedor foi o: '" + vencedor + "'");
        location.reload();
    }    
}

function Sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}