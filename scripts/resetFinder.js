/*RESETEO DE INPUTS Y ARRAYS CON ELECCIONES*/

let resetboton=$(".backbutton")
resetboton.click(resetear)

function resetear() {
    if (option!==null) {
       option.style.display="none"
    } else {
        option=document.getElementById("option1")
    }
    index=0;
    nextboton.prop( "disabled", true )
    for (input of allinputs) {
        input.checked=false
    }
    elecciones1=[]
    elecciones2=[]
    elecciones3=[]
    elecciones4=[]
    marcaelegida=""
    function verificarDisplay (elem) {
        if (elem!==null){
            elem.remove()
        }
    }
    if (resultadosMostrados==true) {
        verificarDisplay(document.querySelector(".splide__arrows"))
        if (document.querySelector(".splide__list")!==null) {
            document.querySelector(".splide__list").innerHTML="" 
        }
        verificarDisplay(document.querySelector(".splide__pagination"))
        document.querySelector(".button__compare").remove()
        document.querySelector(".results__active").innerHTML=""
        document.querySelector(".results__grid").innerHTML=""
        $(".guitarFinderButtonContainer").append(nextboton)
        cambiarVista.remove()
    }
    $(".bodyDescription").hide()
    document.querySelector(".guitarFinderApp").style.display="flex"
    h2option.innerHTML="<h2>Are you a beginner or experienced guitarist?</h2>"
     for (let imagen of arrayimg) {
        if (imagen.classList.contains("activeimg")) {
            imagen.classList.remove("activeimg")
        }
    } 
    resultadosMostrados=false
    mostrar() 
    nextboton.click(mostrar)
}
