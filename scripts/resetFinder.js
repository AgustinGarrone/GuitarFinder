/*RESETEO DE INPUTS Y ARRAYS CON ELECCIONES*/

let resetboton=$(".backbutton")
resetboton.click(resetear)

function resetear() {
    option.style.display="none"
    index=0;
    console.log(allinputs.length)
    nextboton.prop( "disabled", true )
    for (let f=0; f<=allinputs[0].length;f++) {
        if (allinputs[0][f]!==undefined) {
            console.log("BORRANDO LOS INPUT")
            allinputs[0][f].checked=false
        }
    }
    elecciones1=[]
    elecciones2=[]
    elecciones3=[]
    elecciones4=[]
    marcaelegida=""
    results.innerHTML=""
    $(".bodyDescription").hide()
    document.querySelector(".guitarFinderApp").style.display="flex"
   /*  document.querySelector(".guitarFinderApp").innerHTML="" */
    h2option.innerHTML="<h2>Are you a beginner or experienced guitarist?</h2>"
    console.log("arrays reseteados y contenido vaciado")
    console.log(arrayimg)
     for (let imagen of arrayimg) {
        if (imagen.classList.contains("activeimg")) {
            imagen.classList.remove("activeimg")
        } 
        imagen++
    } 
    mostrar()
}
