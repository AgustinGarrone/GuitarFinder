/*FUNCIONES DE MOSTRAR RESULTADOS*/
let marcaelegida=""
nextboton.click(mostrar)

let resultadosMostrados=false
let guitarrasMostradas=0 //! por ahora no lo us ocreo 
/* let results=document.createElement("section")
results.classList.add("results")
results.setAttribute("id", "option6") */

const cambiarVista=document.createElement("div")
cambiarVista.classList.add("cambiarVista")


function mostrar() {             
    switch(index) {
        case 1: chequeado1("a",1);
        h2option.innerHTML="<h2>Awesome! Is this guitar for an adult or child?</h2>"
        console.log("ejectuando opcion1")
        nextboton.prop( "disabled", true) 
        break
        case 2:chequeado2("a",2);
        h2option.innerHTML="<h2>Which body style are you most interested in?</h2>"
        console.log("ejectuando opcion2")
        nextboton.prop( "disabled", true) 
        break
        case 3:chequeado3("a",3);
        h2option.innerHTML="<h2>What were you thinking in terms of budget?</h2>"
        divbodyoption.innerHTML=""
        console.log("ejecutada tercera opcion")
        nextboton.prop( "disabled", true) 
        break
        case 4:chequeado4("a",4);
        h2option.innerHTML="<h2>Do you have a brand preference?</h2>"
        console.log("ejecutada cuarta opcion")
        nextboton.prop( "disabled", true) 
        break
        case 5: chequeado5("a",5);
            option.style.display="none"   /*HACE QUE SE DESAPAREZCA LA ULTIMA OPCIÓN PARA DAR PASO A LOS RESULTADOS*/
        case 6: terminado()
                } 
        
    if (option.style.display ="flex") {    
       option.style.display ="none"
       index++;                                                         
       option = document.getElementById("option"+index)
       if (option!==null) {
         option.style.display="flex"
           console.log("aasaa")
       }
    } else if (option.style.display ="none") {
        option.style.display="flex"
        index++;
    }
     console.log("el index es "+index) 
    
}

function terminado() {   
    resultadosMostrados=true
    document.querySelector(".guitarFinderApp").style.display="none"
    cambiarVista.innerHTML=`<img src="./img/gridicon.png">
                            <img src="./img/on-slider.png">
                            <img src="./img/flexicon.png" >`
    document.querySelector(".guitarFinder").prepend(cambiarVista)
    document.querySelector(".results").style.display="flex"
    h2option.innerHTML="This is for YOU :)"
    document.querySelector(".guitarFinder").prepend(h2option)
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
     /* document.querySelector(".resultsCardPorcentaje").addEventListener("mouseenter",function (){
         alert("Porcentaje de tu eleccion")
     })*/
     cargarCardClicks()
     } 
    /*  slideron() */


function cargarCardClicks(){
    /*  const cards=document.getElementsByClassName("resultsCard100")
     console.log("CARDS ES")
     console.log(cards)
     console.log(elecciones4)
     for (let i=0;i=cards.length;i++) {
       console.log(i)
       conso
       cards[i].addEventListener("click", function() {
           document.querySelector(".results__active").innerHTML=` <div class=resultsCardActive>
                                                                               <span class=resultsCardPorcentaje><p>100%</p></span>
                                                                               <p class=resultsCardActiveName>${elecciones4[i].name}</p>
                                                                               <img class=resultsCardActiveImg src="${elecciones4[i].img}">
                                                                               <div class="resultsCardActive_imgs">
                                                                                   <img src="${elecciones4[i].img}">
                                                                                   <img src="${elecciones4[i].img}">
                                                                                   <img src="${elecciones4[i].img}">
                                                                               </div> 
                                                                         </div>` 
                                                                     }) 
                                                           
     }*/
     let cards=document.querySelectorAll(".resultsCard100")
     for (let t=0;t<cards.length;t++){
         cards[t].addEventListener('click', event => {
             document.querySelector(".results__active").innerHTML=` <div class=resultsCardActive transition-style="in:wipe:down">
             <div class=backgroundActive transition-style="in:wipe:down">
             </div>
             <span class=resultsCardPorcentaje><p>100%</p></span>
             <p class=resultsCardActiveName>${elecciones4[t].name}</p>
             <img class=resultsCardActiveImg src="${elecciones4[t].img}">
             <div class="resultsCardActive_imgs">
                 <img src="${elecciones4[t].img}">
                 <img src="${elecciones4[t].img}">
                 <img src="${elecciones4[t].img}">
             </div> 
       </div>` 
   }) 
 }

 } 