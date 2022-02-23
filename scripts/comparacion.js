/*CREACION DE ELEMENTOS PARA SLIDER COMPARADOR*/
const splideCOMP = document.createElement("div")
splideCOMP.classList.add("splide")
splideCOMP.classList.add("splide2")
splideCOMP.setAttribute("transition-style","in:wipe:right")
const splide__trackCOMP = document.createElement("div")
splide__trackCOMP.classList.add("splide__track")
const splide__listCOMP = document.createElement("ul")
splide__listCOMP.classList.add("splide__list")
splide__listCOMP.classList.add("splide__comparacion")

splideCOMP.prepend(splide__trackCOMP)
splide__trackCOMP.prepend(splide__listCOMP)


function compararGuitarras(){
    /* splideHTML.classList.add("splide__comparacion")
    document.querySelector(".results__grid").innerHTML=``
    botones.html(`<button class="backbutton">Reset</button><button class="exit__compare">Exit Compare</button>`)
    document.querySelector(".results__grid").appendChild(splideHTML)
    $(".exit__compare").click(salirDeComparacion())
    cargarResultadosDeComparacion() */
    splideHTML.classList.add("splide__comparacion")
    document.querySelector(".results__grid").remove()
    document.querySelector(".results").appendChild(splideCOMP)
    cargarResultadosDeComparacion()
}

function cargarResultadosDeComparacion(){
    if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".splide__comparacion").innerHTML+= ` 
            <li class=splide__slide>   
            <div class="card" transition-style="in:wipe:down">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <img class=rotateCardActive src="./img/rotateicon.png">
                    <span class=resultsCardPorcentaje><p>100%</p></span>
                    <p class=resultsCardActiveName>${eleccion.name}</p>
                    <img class=resultsCardActiveImg src="${eleccion.img}">
                    <div class="resultsCardActive_imgs">
                        <img class="fotoRelacionada" src="${eleccion.img}">
                        <img class="fotoRelacionada" src="${eleccion.img2}">
                        <img class="fotoRelacionada" src="${eleccion.img3}">
                        <img class="fotoRelacionada" src="${eleccion.img4}">
                    </div> 
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">
                        <div class="card__header">
                           <img class=rotateCardActive src="./img/rotateicon.png">
                            <img src="./img/puaguitar.png" alt="" class="pp" />
                            <h2>SPECIFICATIONS</h2>
                        </div>
                        <div class="card__body">
                            <div class="resultsCard__specs">
                                <ul class=specifications__neck>
                                <p class=specifications__text>NECK</p>
                                <li class="specification__neck">${eleccion.specifications[0].neck1}</li>
                                <li class="specification__neck">${eleccion.specifications[0].neck2}</li>
                                <li class="specification__neck">${eleccion.specifications[0].neck3}</li>
                                <li class="specification__neck">${eleccion.specifications[0].neck4}</li>
                                <ul>
                                <ul class=specifications__fret>
                                <p class=specifications__text>FREATBOARD</p>
                                <li class="specification__fretboard">${eleccion.specifications[0].fretboard1}</li>
                                <li class="specification__fretboard">${eleccion.specifications[0].fretboard2}</li>
                                <li class="specification__fretboard">${eleccion.specifications[0].fretboard3}</li>
                                <li class="specification__fretboard">${eleccion.specifications[0].fretboard4}</li>
                                <ul>
                                <ul class=specifications__pickups>
                                <p class=specifications__text>PICKUPS</p>
                                <li class="specification__pickup">${eleccion.specifications[0].pickups1}</li>
                                <li class="specification__pickup">${eleccion.specifications[0].pickups2}</li>
                                <li class="specification__pickup">${eleccion.specifications[0].pickups3}</li>
                                <li class="specification__pickup">${eleccion.specifications[0].pickups4}</li>
                                <ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </li>`
        }
   }
    if (elecciones2.length>=0) {
        let pricecoincidence=elecciones2.filter(el => !elecciones3.includes(el));
        guitarrasMostradas=pricecoincidence.length+elecciones4.length
        for (i=0;i<pricecoincidence.length;i++) {
            if (pricecoincidence[i].brand===marcaelegida) {
                document.querySelector(".splide__comparacion").innerHTML = ` <div class="card" transition-style="in:wipe:down">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <img class=rotateCardActive src="./img/rotateicon.png">
                        <span class=resultsCardPorcentaje><p>85%</p></span>
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
                               <img class=rotateCardActive src="./img/rotateicon.png">
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
            }   else {
                document.querySelector(".splide__comparacion").innerHTML = ` <div class="card" transition-style="in:wipe:down">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <img class=rotateCardActive src="./img/rotateicon.png">
                        <span class=resultsCardPorcentaje><p>85%</p></span>
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
                               <img class=rotateCardActive src="./img/rotateicon.png">
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
                }
        }  
    }
    botones.html(`<button class="backbutton">Reset</button><button class="exit__compare">Exit Compare</button>`)
    sliderComparacion()
    $(".exit__compare").click(salirDeComparacion)
}


function salirDeComparacion(){
    document.querySelector(".splide__comparacion").innerHTML=``
    document.querySelector(".splide2").remove()
    let gridVision=document.createElement("div")
    gridVision.classList.add("results__grid")
    document.querySelector(".results").appendChild(gridVision)
    cargarGridResults()
    cargarCardClicks()
    botones.html(`<button class="backbutton">Reset</button><button class="button__compare">Compare</button>`)
    $(".button__compare").click(compararGuitarras)
}


