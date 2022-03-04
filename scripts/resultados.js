/*FUNCIONES DE MOSTRAR RESULTADOS*/
let marcaelegida = ""
 nextboton.click(mostrar)  //! OJO CON ESTO

let resultadosMostradosFlex = false
let resultadosMostradosGrid=false
let resultadosMostrados=false
let guitarrasMostradas = 0 //! por ahora no lo us ocreo 
/* let results=document.createElement("section")
results.classList.add("results")
results.setAttribute("id", "option6") */

const cambiarVista = document.createElement("div")
cambiarVista.classList.add("cambiarVista")

/*CREACION DE ELEMENTOS PARA SLIDER*/
const splideHTML = document.createElement("div")
splideHTML.classList.add("splide")
splideHTML.setAttribute("transition-style","in:wipe:right")
const splide__trackHTML = document.createElement("div")
splide__trackHTML.classList.add("splide__track")
const splide__listHTML = document.createElement("ul")
splide__listHTML.classList.add("splide__list")

splideHTML.prepend(splide__trackHTML)
splide__trackHTML.prepend(splide__listHTML)



function mostrar() {
    switch (index) {
        case 1: chequeado1("a", 1);
            h2option.innerHTML = "<h2>Awesome! Is this guitar for an adult or child?</h2>"
            nextboton.prop("disabled", true)
            break
        case 2: chequeado2("a", 2);
            h2option.innerHTML = "<h2>Which body style are you most interested in?</h2>"
            nextboton.prop("disabled", true)
            break
        case 3: chequeado3("a", 3);
            h2option.innerHTML = "<h2>What were you thinking in terms of budget?</h2>"
            divbodyoption.innerHTML = ""
            nextboton.prop("disabled", true)
            break
        case 4: chequeado4("a", 4);
            h2option.innerHTML = "<h2>Do you have a brand preference?</h2>"
            nextboton.prop("disabled", true)
            break
        case 5: chequeado5("a", 5);
            option.style.display = "none"   /*HACE QUE SE DESAPAREZCA LA ULTIMA OPCIÓN PARA DAR PASO A LOS RESULTADOS*/
        case 6: terminado()
    }

    if (option.style.display = "flex") {
        option.style.display = "none"
        index++;
        option = document.getElementById("option" + index)
        if (option !== null) {
            option.style.display = "flex"
        }
    } else if (option.style.display = "none") {
        option.style.display = "flex"
        index++;
    }

}

function terminado() {
    resultadosMostrados=true
    nextboton.remove()
    /*botones.append(`<button class="button__compare">Compare</button>`)
    document.querySelector(".button__compare").addEventListener("click",()=> alert("no llegué a terminar bien esta funcionalidad. Lo voy a terminar despues con tiempo"))*/
    /* $(".button__compare").click(compararGuitarras) */  //! AGREGAR LUEGO DE ENTREGAR.
    document.querySelector(".guitarFinderApp").style.display = "none"
    cambiarVista.innerHTML = ` <img src="./img/flexicon.png" >
                            <img class="cambiarAFlex" src="./img/on-slider.png">
                            <img src="./img/gridicon.png">`
    document.querySelector(".guitarFinder").prepend(cambiarVista)
    document.querySelector(".cambiarAFlex").addEventListener("click", cargarFlexResults)
    document.querySelector(".results").style.display = "flex"
    h2option.innerHTML = "This is for YOU :)"

    document.querySelector(".guitarFinder").prepend(h2option)
    cargarGridResults()
    cargarCardClicks()
}


function cargarCardClicks() {
    let cards100 = document.querySelectorAll(".resultsCard100")
    for (let t = 0; t < cards100.length; t++) {
        cards100[t].addEventListener('click', event => {
            document.querySelector(".results__active").innerHTML = ` <div class="card" transition-style="in:wipe:down">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <div class=card__icons>
                        <img class=rotateCardActive src="./img/rotateicon.png">
                        <span class=resultsCardPorcentaje><p>100%</p></span>
                    </div>
                    <p class=resultsCardActiveName>${elecciones4[t].name}</p>
                    <img class=resultsCardActiveImg src="${elecciones4[t].img}">
                    <div class="resultsCardActive_imgs">
                        <img class="fotoRelacionada" src="${elecciones4[t].img}">
                        <img class="fotoRelacionada" src="${elecciones4[t].img2}">
                        <img class="fotoRelacionada" src="${elecciones4[t].img3}">
                        <img class="fotoRelacionada" src="${elecciones4[t].img4}">
                    </div> 
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">
                        <div class="card__header">
                            <div class=card__icons>
                                <img class=rotateCardActive src="./img/rotateicon.png">
                            </div>
                            <img src="./img/puaguitar.png" alt="" class="pp" />
                            <h2>SPECIFICATIONS</h2>
                        </div>
                        <div class="card__body">
                            <div class="resultsCard__specs">
                                <ul class=specifications__neck>
                                <p class=specifications__text>NECK</p>
                                <li class="specification__neck">${elecciones4[t].specifications[0].neck1}</li>
                                <li class="specification__neck">${elecciones4[t].specifications[0].neck2}</li>
                                <li class="specification__neck">${elecciones4[t].specifications[0].neck3}</li>
                                <li class="specification__neck">${elecciones4[t].specifications[0].neck4}</li>
                                <ul>
                                <ul class=specifications__fret>
                                <p class=specifications__text>FREATBOARD</p>
                                <li class="specification__fretboard">${elecciones4[t].specifications[0].fretboard1}</li>
                                <li class="specification__fretboard">${elecciones4[t].specifications[0].fretboard2}</li>
                                <li class="specification__fretboard">${elecciones4[t].specifications[0].fretboard3}</li>
                                <li class="specification__fretboard">${elecciones4[t].specifications[0].fretboard4}</li>
                                <ul>
                                <ul class=specifications__pickups>
                                <p class=specifications__text>PICKUPS</p>
                                <li class="specification__pickup">${elecciones4[t].specifications[0].pickups1}</li>
                                <li class="specification__pickup">${elecciones4[t].specifications[0].pickups2}</li>
                                <li class="specification__pickup">${elecciones4[t].specifications[0].pickups3}</li>
                                <li class="specification__pickup">${elecciones4[t].specifications[0].pickups4}</li>
                                <ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`


         eliminarUndefineds()
 

            
        /*Activa rotacion de card*/
            const carta=document.querySelectorAll(".rotateCardActive")  
            for (cart of carta){
                cart.addEventListener("click", function (e) {
                    document.querySelector(".card__inner").classList.toggle('is-flipped');
                });
            }

        })
    }

}


function cargarCardCoincidenciaClick () {
    let cartas85=document.querySelectorAll(".splide85")
    let cartas70=document.querySelectorAll(".splide70")
    let pricecoincidence=elecciones2.filter(el => !elecciones3.includes(el));
     for (c85 of cartas85) {
        let guitarraNombre=c85.children[0].children[0].children[0].textContent 
        for (let t=0;pricecoincidence.length;t++) {
            if (pricecoincidence[t].name==guitarraNombre) {
                c85.addEventListener("click",function() {
                    document.querySelector(".results__active").innerHTML = ` <div class="card" transition-style="in:wipe:down">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <div class="card__icons">
                            <img class=rotateCardActive src="./img/rotateicon.png">
                            <span class=resultsCardPorcentaje><p>85%</p></span>
                        </div>
                        <p class=resultsCardActiveName>${pricecoincidence[t].name}</p>
                        <img class=resultsCardActiveImg src="${pricecoincidence[t].img}">
                        <div class="resultsCardActive_imgs">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img2}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img3}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img4}">
                        </div> 
                    </div>
                    <div class="card__face card__face--back">
                        <div class="card__content">
                            <div class="card__header">
                                <div class=card__icons>
                                    <img class=rotateCardActive src="./img/rotateicon.png">
                                </div>
                                <img src="./img/puaguitar.png" alt="" class="pp" />
                                <h2>SPECIFICATIONS</h2>
                            </div>
                            <div class="card__body">
                                <div class="resultsCard__specs">
                                    <ul class=specifications__neck>
                                    <p class=specifications__text>NECK</p>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck1}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck2}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck3}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck4}</li>
                                    <ul>
                                    <ul class=specifications__fret>
                                    <p class=specifications__text>FREATBOARD</p>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard1}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard2}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard3}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard4}</li>
                                    <ul>
                                    <ul class=specifications__pickups>
                                    <p class=specifications__text>PICKUPS</p>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups1}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups2}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups3}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups4}</li>
                                    <ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
               
                
               
            eliminarUndefineds()
               
                     const carta=document.querySelectorAll(".rotateCardActive")  
                     for (cart of carta){
                         cart.addEventListener("click", function (e) {
                             document.querySelector(".card__inner").classList.toggle('is-flipped');
                         });
                     }
                })
            break
            }
        }
    } 

    for (c70 of cartas70) {
        let guitarraNombre=c70.children[0].children[0].children[0].textContent
        for (let t=0;pricecoincidence.length;t++) {
            if (pricecoincidence[t].name==guitarraNombre) {
                c70.addEventListener("click",function() {
                    document.querySelector(".results__active").innerHTML = ` <div class="card" transition-style="in:wipe:down">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <div class="card__icons">
                            <img class=rotateCardActive src="./img/rotateicon.png">
                            <span class=resultsCardPorcentaje><p>70%</p></span>
                    </div>
                        <p class=resultsCardActiveName>${pricecoincidence[t].name}</p>
                        <img class=resultsCardActiveImg src="${pricecoincidence[t].img}">
                        <div class="resultsCardActive_imgs">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img2}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img3}">
                            <img class="fotoRelacionada" src="${pricecoincidence[t].img4}">
                        </div> 
                    </div>
                    <div class="card__face card__face--back">
                        <div class="card__content">
                            <div class="card__header">
                                <div class=card__icons>
                                    <img class=rotateCardActive src="./img/rotateicon.png">
                                </div>
                                <img src="./img/puaguitar.png" alt="" class="pp" />
                                <h2>SPECIFICATIONS</h2>
                            </div>
                            <div class="card__body">
                                <div class="resultsCard__specs">
                                    <ul class=specifications__neck>
                                    <p class=specifications__text>NECK</p>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck1}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck2}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck3}</li>
                                    <li class="specification__neck">${pricecoincidence[t].specifications[0].neck4}</li>
                                    <ul>
                                    <ul class=specifications__fret>
                                    <p class=specifications__text>FREATBOARD</p>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard1}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard2}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard3}</li>
                                    <li class="specification__fretboard">${pricecoincidence[t].specifications[0].fretboard4}</li>
                                    <ul>
                                    <ul class=specifications__pickups>
                                    <p class=specifications__text>PICKUPS</p>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups1}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups2}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups3}</li>
                                    <li class="specification__pickup">${pricecoincidence[t].specifications[0].pickups4}</li>
                                    <ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
               
                
               
            eliminarUndefineds()
               
                     const carta=document.querySelectorAll(".rotateCardActive")  
                     for (cart of carta){
                         cart.addEventListener("click", function (e) {
                             document.querySelector(".card__inner").classList.toggle('is-flipped');
                         });
                     }
                })
            break
            }
        }
    } 
}


function eliminarUndefineds() {
      /*elimina fotos undefined*/
      let fotocargada=document.querySelectorAll(".fotoRelacionada") 
      for (foto of fotocargada) {
          let atributo=foto.getAttribute("src")
          if (atributo=="undefined") {
              foto.remove()
          } else {           /*Si la foto no es undefined, le agrega evento para cambiar imagen*/
              let fotoActiva=document.createElement("div")
              fotoActiva.classList.add(".resultsCardActiveImg")
              let insertarAntesDe=document.querySelector(".resultsCardActive_imgs")
              foto.addEventListener("click", function (){
                  document.querySelector(".resultsCardActiveImg").remove()
                  document.querySelector(".card__face--front").insertBefore(fotoActiva, insertarAntesDe)
                  fotoActiva.innerHTML=`<img class="resultsCardActiveImg" src="${atributo}">`
              })
          }
      }   
         
          /* eliminar info undefined*/
          let especificacionesNeck=document.querySelectorAll(".specification__neck")
          for (neck of especificacionesNeck) {
              let neckTexto=neck.textContent
              if (neckTexto=="undefined") {
                  neck.remove()
              }
          }  
          
          let especificacionesFret=document.querySelectorAll(".specification__fretboard")
          for (fret of especificacionesFret) {
              let fretTexto=fret.textContent
              if (fretTexto=="undefined") {
                  fret.remove()
              }
          }  
  
          let especificacionesPickup=document.querySelectorAll(".specification__pickup")
          for (pickup of especificacionesPickup) {
              let pickupTexto=pickup.textContent
              if (pickupTexto=="undefined") {
                  pickup.remove()
              }
          }  
   
  
}