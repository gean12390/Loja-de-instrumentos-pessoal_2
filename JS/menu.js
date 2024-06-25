   
   let botao = false;


function fechar(){

     document.getElementById('menu').style.width = "0px";
     document.querySelector('.inicio').style.display = "none";
     document.querySelector('.instrumentos').style.display = "none";
     document.querySelector('.sobre_nos').style.display = "0px";
     botao = true;
     const mediaQuery = window.matchMedia('(max-width: 450px)');

     if(mediaQuery.matches){
        
     }
}

function abrir(){   
    
    const mediaQuery = window.matchMedia('(max-width: 450px)');

    if(mediaQuery.matches){
        abrir_mobile();
    }  
    else{
    document.getElementById('menu').style.width = "500px";
    document.querySelector('.inicio').style.display = "flex";
    document.querySelector('.instrumentos').style.display = "flex";
    document.querySelector('.sobre_nos').style.display = "flex";
    }
    }



    function abrir_sub() {
        if (botao == false) {
            document.getElementById('menu_sec').style.height = "500px";
            document.getElementById('menu_sec').style.display = "flex";
            botao = true;
            console.log(botao);
        } else if(botao == true) {
            document.getElementById('menu_sec').style.height = "0px";
            document.getElementById('menu_sec').style.display = "none";
            botao = false;
        }
    }
    
    function abrir_mobile(){
        document.getElementById('menu').style.width = "340px";      
        document.querySelector('.sobre_nos').style.display = "flex";
        document.querySelector('.inicio').style.display = "flex";
        document.querySelector('.instrumentos').style.display = "flex";

    }
