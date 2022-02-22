let cardMostrada=false

function cargarGridResults () {
    document.querySelector(".results__active").style.display="flex"
    document.querySelector(".results__grid").style.display="grid"
    cardMostrada=false
    if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".results__grid").innerHTML+= ` 
            <li class="splide__slide splide100">   
               <div class=resultsCard100>
               <span class=resultsCardPorcentaje><p>100%</p></span>
               <p class=resultsCard100Name>${eleccion.name}</p>
               <img class=resultsCard100Img src="${eleccion.img}">
              </div>
           </li>
              `;
           guardarlocal(eleccion.name,JSON.stringify(eleccion))
        }
        if (elecciones4.length>0) { //! TENGO QUE HACER QUE SI EL PRIMER RESULTADO ES UNO DE 70% SE CARGUE CON ESE RESLTADO
            cardMostrada=true
            document.querySelector(".results__active").innerHTML = ` <div class="card" transition-style="in:wipe:down">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <img class=rotateCardActive src="./img/rotateicon.png">
                    <span class=resultsCardPorcentaje><p>100%</p></span>
                    <p class=resultsCardActiveName>${elecciones4[0].name}</p>
                    <img class=resultsCardActiveImg src="${elecciones4[0].img}">
                    <div class="resultsCardActive_imgs">
                        <img class="fotoRelacionada" src="${elecciones4[0].img}">
                        <img class="fotoRelacionada" src="${elecciones4[0].img2}">
                        <img class="fotoRelacionada" src="${elecciones4[0].img3}">
                        <img class="fotoRelacionada" src="${elecciones4[0].img4}">
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
                                <li class="specification__neck">${elecciones4[0].specifications[0].neck1}</li>
                                <li class="specification__neck">${elecciones4[0].specifications[0].neck2}</li>
                                <li class="specification__neck">${elecciones4[0].specifications[0].neck3}</li>
                                <li class="specification__neck">${elecciones4[0].specifications[0].neck4}</li>
                                <ul>
                                <ul class=specifications__fret>
                                <p class=specifications__text>FREATBOARD</p>
                                <li class="specification__fretboard">${elecciones4[0].specifications[0].fretboard1}</li>
                                <li class="specification__fretboard">${elecciones4[0].specifications[0].fretboard2}</li>
                                <li class="specification__fretboard">${elecciones4[0].specifications[0].fretboard3}</li>
                                <li class="specification__fretboard">${elecciones4[0].specifications[0].fretboard4}</li>
                                <ul>
                                <ul class=specifications__pickups>
                                <p class=specifications__text>PICKUPS</p>
                                <li class="specification__pickup">${elecciones4[0].specifications[0].pickups1}</li>
                                <li class="specification__pickup">${elecciones4[0].specifications[0].pickups2}</li>
                                <li class="specification__pickup">${elecciones4[0].specifications[0].pickups3}</li>
                                <li class="specification__pickup">${elecciones4[0].specifications[0].pickups4}</li>
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
        }
   }
    if (elecciones2.length>=0) {
        let pricecoincidence=elecciones2.filter(el => !elecciones3.includes(el));
        let porcentajeDeCard=$('.resultsCardPorcentaje').text();
        console.log(porcentajeDeCard)
        console.log(pricecoincidence)
        console.log("ARRIBA PRICECOINCIDENCE")
        guitarrasMostradas=pricecoincidence.length+elecciones4.length //! esto creo q no lo uso
        for (i=0;i<pricecoincidence.length;i++) {
            if (pricecoincidence[i].brand===marcaelegida) {
               document.querySelector(".results__grid").innerHTML += `
                  <li class="splide__slide splide85">    
                   <div class="resultsCard85 resultsCardCoincidence" >
                     <span class=resultsCardPorcentaje><p>85%</p></span>
                     <p class=resultsCard85Name>${pricecoincidence[i].name}</p>
                     <img class=resultsCard85Img src="${pricecoincidence[i].img}">
                     <div class=resultsCardFail>
                         <p>Price</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                     </div>
                   </div>
                 </li>
                `;
            } 
        }  /*aca termina for de cargar results grid*/
        for (i=0;i<pricecoincidence.length;i++) {
            if (pricecoincidence[i].brand!==marcaelegida) {
                document.querySelector(".results__grid").innerHTML += `
                <li class="splide__slide splide70">       
                <div class="resultsCard70 resultsCardCoincidence"> 
                  <span class=resultsCardPorcentaje><p>70%</p></span>
                  <p class=resultsCard70Name>${pricecoincidence[i].name}</p>
                  <img class=resultsCard70Img src="${pricecoincidence[i].img}">
                  <div class=resultsCardFail>
                      <p>Price and brand</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                  </div>
                </div>
                <li
                 `;
            }
        }
        cargarCardCoincidenciaClick()
        if (cardMostrada==false) {
            let cardsCargadas=document.querySelector(".results__grid")
            console.log(cardsCargadas)
            document.querySelector(".results__active").innerHTML = ` <div class="card" transition-style="in:wipe:down">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <img class=rotateCardActive src="./img/rotateicon.png">
                    <span class=resultsCardPorcentaje><p>85%</p></span>
                    <p class=resultsCardActiveName>${pricecoincidence[0].name}</p>
                    <img class=resultsCardActiveImg src="${pricecoincidence[0].img}">
                    <div class="resultsCardActive_imgs">
                        <img class="fotoRelacionada" src="${pricecoincidence[0].img}">
                        <img class="fotoRelacionada" src="${pricecoincidence[0].img2}">
                        <img class="fotoRelacionada" src="${pricecoincidence[0].img3}">
                        <img class="fotoRelacionada" src="${pricecoincidence[0].img4}">
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
                                <li class="specification__neck">${pricecoincidence[0].specifications[0].neck1}</li>
                                <li class="specification__neck">${pricecoincidence[0].specifications[0].neck2}</li>
                                <li class="specification__neck">${pricecoincidence[0].specifications[0].neck3}</li>
                                <li class="specification__neck">${pricecoincidence[0].specifications[0].neck4}</li>
                                <ul>
                                <ul class=specifications__fret>
                                <p class=specifications__text>FREATBOARD</p>
                                <li class="specification__fretboard">${pricecoincidence[0].specifications[0].fretboard1}</li>
                                <li class="specification__fretboard">${pricecoincidence[0].specifications[0].fretboard2}</li>
                                <li class="specification__fretboard">${pricecoincidence[0].specifications[0].fretboard3}</li>
                                <li class="specification__fretboard">${pricecoincidence[0].specifications[0].fretboard4}</li>
                                <ul>
                                <ul class=specifications__pickups>
                                <p class=specifications__text>PICKUPS</p>
                                <li class="specification__pickup">${pricecoincidence[0].specifications[0].pickups1}</li>
                                <li class="specification__pickup">${pricecoincidence[0].specifications[0].pickups2}</li>
                                <li class="specification__pickup">${pricecoincidence[0].specifications[0].pickups3}</li>
                                <li class="specification__pickup">${pricecoincidence[0].specifications[0].pickups4}</li>
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
        }
    }
}
let splidecargado=false

function cargarFlexResults() {
    resultadosMostradosFlex=true
    console.log(resultadosMostradosFlex)
    resultadosMostradosGrid = false
    let instertarAntes=document.querySelector(".guitarFinderStartButton")
    document.querySelector(".guitarFinder").insertBefore(splideHTML,instertarAntes)
    splidecargado=true
    if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".splide__list").innerHTML+= ` 
            <li class="splide__slide splide100">   
               <div class=resultsCard100Flex>
               <span class=resultsCardPorcentaje><p>100%</p></span>
               <p class=resultsCard100FlexName>${eleccion.name}</p>
               <img class=resultsCard100FlexImg src="${eleccion.img}">
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
            } */
            if (pricecoincidence[i].brand===marcaelegida) {
               document.querySelector(".splide__list").innerHTML += `
                  <li class="splide__slide splide85">    
                   <div class=resultsCard85Flex >
                     <span class=resultsCardPorcentaje><p>85%</p></span>
                     <p class=resultsCard85FlexName>${pricecoincidence[i].name}</p>
                     <img class=resultsCard85FlexImg src="${pricecoincidence[i].img}">
                     <div class=resultsCardFail>
                         <p>Price</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                     </div>
                   </div>
                 </li>
                `;
            }   else {
                    document.querySelector(".splide__list").innerHTML += `
                    <li class="splide__slide splide70">       
                    <div class=resultsCard70Flex> 
                      <span class=resultsCardPorcentaje><p>70%</p></span>
                      <p class=resultsCard70FlexName>${pricecoincidence[i].name}</p>
                      <img class=resultsCard70FlexImg src="${pricecoincidence[i].img}">
                      <div class=resultsCardFail>
                          <p>Price and brand</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                      </div>
                    </div>
                    <li
                     `;
                }
        }  
    }
    cambiarVistaFlex()
}


function cambiarVistaFlex () {
    if (splidecargado==false) {
        let instertarAntes=document.querySelector(".guitarFinderStartButton")
        document.querySelector(".guitarFinder").insertBefore(splideHTML,instertarAntes)
    }
    document.querySelector(".results__grid").style.display="none"
    document.querySelector(".results__active").style.display="none"
    cambiarVista.innerHTML=` <img src="./img/flexicon.png" >
    <img class="cambiarAGrid" src="./img/off-slider.png">
    <img src="./img/gridicon.png">`
   /*  if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".splide__list").innerHTML+= ` 
            <li class=splide__slide>   
                <div class=resultsCard100Slider>
                  <span class=resultsCardPorcentaje><p>100%</p></span>
                  <p class=resultsCard100SliderName>${eleccion.name}</p>
                  <img class=resultsCard100Img src="${eleccion.img}">
                </div>
            </li>
                  `;
            }
       } */
    slideron()
    document.querySelector(".cambiarAGrid").addEventListener("click",cambiarVistaGrid)
}

function cambiarVistaGrid (){
    /*Vemos si el slider flex puso flechas y paginación. De ser asi las eliminar*/
    if (document.querySelector(".splide__arrows")!=null){  
        document.querySelector(".splide__arrows").remove() 
    }   
    if (document.querySelector(".splide__pagination")!=null) {
        document.querySelector(".splide__pagination").remove()
    }
    document.querySelector(".splide").remove()
    splidecargado=false
    document.querySelector(".results__grid").style.display="grid"
    document.querySelector(".results__active").style.display="flex"
    cambiarVista.innerHTML=` <img src="./img/flexicon.png" >
    <img class="cambiarAFlex" src="./img/on-slider.png">
    <img src="./img/gridicon.png">`
    document.querySelector(".cambiarAFlex").addEventListener("click",cambiarVistaFlex)
}