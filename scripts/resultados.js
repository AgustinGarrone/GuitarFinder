/*FUNCIONES DE MOSTRAR RESULTADOS*/
let marcaelegida=""
nextboton.click(mostrar)

let resultadosMostrados=false
let guitarrasMostradas=0
/* let results=document.createElement("section")
results.classList.add("results")
results.setAttribute("id", "option6") */

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
    if (elecciones4.length>=0) {
        document.querySelector(".guitarFinderApp").style.display="none"
        $(".results").show()
        h2option.innerHTML="This is for YOU :)"
        document.querySelector(".guitarFinder").prepend(h2option)
         for (eleccion of elecciones4) {
             document.querySelector(".splide__list").innerHTML+= ` 
             <li class=splide__slide>   
                <div class=resultsCard100>
                <span class=resultsCardPorcentaje><p>100%</p></span>
                <p class=resultsCard100Name>${eleccion.name}</p>
                <img class=resultsCard100Img src="${eleccion.img}">
                <p class=resultsCardPrice>${eleccion.price}$</p>
               </div>
            </li>
               `;
            guardarlocal(eleccion.name,JSON.stringify(eleccion))
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
                    <div class=resultsCard85 >
                      <span class=resultsCardPorcentaje><p>85%</p></span>
                      <p class=resultsCard85Name>${pricecoincidence[i].name}</p>
                      <img class=resultsCard85Img src="${pricecoincidence[i].img}">
                      <div class=resultsCardFail>
                          <p>Price</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                      </div>
                      <p class=resultsCardPrice>${pricecoincidence[i].price}$</p>
                    </div>
                  </li>
                 `;
             }   else {
                     document.querySelector(".splide__list").innerHTML += `
                     <li class=splide__slide>       
                     <div class=resultsCard70> 
                       <span class=resultsCardPorcentaje><p>70%</p></span>
                       <p class=resultsCard70Name>${pricecoincidence[i].name}</p>
                       <img class=resultsCard70Img src="${pricecoincidence[i].img}">
                       <div class=resultsCardFail>
                           <p>Price and brand</p><img class=resultsCardFailImg src="./img/cruzroja.png">
                       </div>
                       <p class=resultsCardPrice>${pricecoincidence[i].price}$</p>
                     </div>
                     <li
                      `;
                 }
         }  
     }

     }
     slideron()
}