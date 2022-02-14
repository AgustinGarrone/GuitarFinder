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

           guardarlocal(eleccion.name,JSON.stringify(eleccion))
        }
   }
    if (elecciones2.length>=0) {
        let pricecoincidence=elecciones2.filter(el => !elecciones3.includes(el));
        console.log("PRICECOINCI ES")
        guitarrasMostradas=pricecoincidence.length+elecciones4.length
        for (i=0;i<pricecoincidence.length;i++) {
/*             if (i==6) {
                break
            } */
            if (pricecoincidence[i].brand===marcaelegida) {
               document.querySelector(".splide__comparacion").innerHTML += `
                  <li class=splide__slide>    
                   <div class=resultsCard85Flex >
                     <span class=resultsCardPorcentaje><p>85%</p></span>
                     <p class=resultsCard85FlexName>${pricecoincidence[i].name}</p>
                     <img class=resultsCard85FlexImg src="${pricecoincidence[i].img}">
                     <div class=resultsCardFail>
                         <button class="button__compare--now">Choose</button>
                     </div>
                   </div>
                 </li>
                `;
            }   else {
                    document.querySelector(".splide__comparacion").innerHTML += `
                    <li class=splide__slide>       
                    <div class=resultsCard70Flex> 
                      <span class=resultsCardPorcentaje><p>70%</p></span>
                      <p class=resultsCard70FlexName>${pricecoincidence[i].name}</p>
                      <img class=resultsCard70FlexImg src="${pricecoincidence[i].img}">
                      <div class=resultsCardFail>
                          <button class="button__compare--now">Choose</button>
                      </div>
                    </div>
                    <li
                     `;
                }
        }  
    }
    botones.html(`<button class="backbutton">Reset</button><button class="exit__compare">Exit Compare</button>`)
    sliderComparacion()
    $(".exit__compare").click(salirDeComparacion)
}


function salirDeComparacion(){
    document.querySelector(".splide__comparacion").innerHTML=``
    document.querySelector(".splide__comparacion").remove()
    cargarGridResults()
    botones.html(`<button class="backbutton">Reset</button><button class="button__compare">Compare</button>`)
    $(".button__compare").click(compararGuitarras)
}


/*if (elecciones4.length>=0) {
    for (eleccion of elecciones4) {
        document.querySelector(".splide__list").innerHTML+= ` 
        <li class=splide__slide>   
           <div class=resultsCard100Comparacion>
           <span class=resultsCardPorcentaje><p>100%</p></span>
           <p class=resultsCard100ComparacionName>${eleccion.name}</p>
           <img class=resultsCard100ComparacionImg src="${eleccion.img}">
          </div>
       </li>
          `;
       guardarlocal(eleccion.name,JSON.stringify(eleccion))
    }
}
 if (elecciones2.length>=0) {
    let pricecoincidence=elecciones2.filter(el => !elecciones3.includes(el));
    console.log("PRICECOINCI ES")
    guitarrasMostradas=pricecoincidence.length+elecciones4.length
    for (i=0;i<pricecoincidence.length;i++) {
/*             if (i==6) {
            break
        } 
        if (pricecoincidence[i].brand===marcaelegida) {
           document.querySelector(".splide__list").innerHTML += `
              <li class=splide__slide>    
               <div class=resultsCard85Comparacion >
                 <span class=resultsCardPorcentaje><p>85%</p></span>
                 <p class=resultsCard85ComparacionName>${pricecoincidence[i].name}</p>
                 <img class=resultsCard85ComparacionImg src="${pricecoincidence[i].img}">
                 <div class=resultsCardFail>
                     <p>Price</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                 </div>
               </div>
             </li>
            `;
        }   else {
                document.querySelector(".splide__list").innerHTML += `
                <li class=splide__slide>       
                <div class=resultsCard70Comparacion> 
                  <span class=resultsCardPorcentaje><p>70%</p></span>
                  <p class=resultsCard70ComparacionName>${pricecoincidence[i].name}</p>
                  <img class=resultsCard70ComparacionImg src="${pricecoincidence[i].img}">
                  <div class=resultsCardFail>
                      <p>Price and brand</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                  </div>
                </div>
                <li
                 `;
            }
    }  
}*/