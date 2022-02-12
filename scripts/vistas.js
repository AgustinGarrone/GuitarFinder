function cargarGridResults () {
    if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".results__grid").innerHTML+= ` 
            <li class=splide__slide>   
               <div class=resultsCard100>
               <span class=resultsCardPorcentaje><p>100%</p></span>
               <p class=resultsCard100Name>${eleccion.name}</p>
               <img class=resultsCard100Img src="${eleccion.img}">
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
               document.querySelector(".results__grid").innerHTML += `
                  <li class=splide__slide>    
                   <div class=resultsCard85 >
                     <span class=resultsCardPorcentaje><p>85%</p></span>
                     <p class=resultsCard85Name>${pricecoincidence[i].name}</p>
                     <img class=resultsCard85Img src="${pricecoincidence[i].img}">
                     <div class=resultsCardFail>
                         <p>Price</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                     </div>
                   </div>
                 </li>
                `;
            }   else {
                    document.querySelector(".results__grid").innerHTML += `
                    <li class=splide__slide>       
                    <div class=resultsCard70> 
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
    }
}
let splidecargado=false

function cargarFlexResults() {
    let instertarAntes=document.querySelector(".guitarFinderStartButton")
    document.querySelector(".guitarFinder").insertBefore(splideHTML,instertarAntes)
    splidecargado=true
    if (elecciones4.length>=0) {
        for (eleccion of elecciones4) {
            document.querySelector(".splide__list").innerHTML+= ` 
            <li class=splide__slide>   
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
                  <li class=splide__slide>    
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
                    <li class=splide__slide>       
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