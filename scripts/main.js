


/*FUNCIÓN PARA GUARDAR EN LOCALSTORAGE*/
const guardarlocal=(clave,valor)=>{localStorage.setItem(clave,valor)}





/*OBTENCIÓN BOTONES DEL PROGRAMA*/

let botones=$(".guitarFinderButtonContainer")
let startboton=$(".startButton")
let nextboton=$("#gfNextButton")

 nextboton.prop( "disabled", true )  

startboton.click(empezar)



/*OBTENCIÓN TEXTOS PROGRAMA*/
let startText=document.querySelector(".guitarFinderText")

let h2option=document.createElement("h2")
h2option.classList.add("animate__animated")
h2option.classList.add("animate__fadeInRight")
/*OBTENCIÓN DE OPCIÓN MOSTRADA Y ARRAYS DE INPUTS*/
let index=1;
let option = document.getElementById("option"+index)

let elecciones=[]
let elecciones1=[]
let elecciones2=[]
let elecciones3=[]
let elecciones4=[]


let allinputs=document.getElementsByTagName("input")

/*FUNCION PARA EMPEZAR LA APP*/
function empezar () {
    startboton.hide()
    startText.style.display="none"
    document.querySelector(".guitarFinderApp").style.display="flex"
    botones.show()
    botones.css('display', 'flex');
    option.style.display="flex"
    h2option.innerHTML="<h2>Are you a beginner or experienced guitarist?</h2>"
    document.querySelector(".guitarFinder").prepend(h2option)
}


/*FUNCION SELECCION DE ITEM , COLOR AL IMG*/

let arrayimg=document.getElementsByTagName("img")
let letra="a"
let input= document.getElementById("opt"+index+letra)  

let divbodyoption=document.createElement("div") /*para info de bodys*/
divbodyoption.classList.add("bodyinfo")

function seleccion (indi){
    let stop=false
    if (allinputs[indi].checked==true) {
        arrayimg[indi+1].classList.add("activeimg")
        nextboton.prop( "disabled", false )  
    } else if (allinputs[indi].checked==false) {
        arrayimg[indi+1].classList.remove("activeimg")
        nextboton.prop( "disabled", true ) 
    } 
    if (indi==4 && allinputs[indi].checked==true) {
        divbodyoption.innerHTML=`<p class="bodyDescription">Solidbody electrics provide more sustain and are less susceptible to feedback. Solidbody electrics are staples in most popular music styles, including rock, country and blues.</p>"`
        document.querySelector(".guitarFinderApp").appendChild(divbodyoption)
    } else if (indi==4 && allinputs[indi].checked==false) {
        divbodyoption.innerHTML=""
    }
    if (indi==5 && allinputs[indi].checked==true) {
        divbodyoption.innerHTML="<p class=bodyDescription>Semi-hollow body electrics combine the style and resonant, warm sound of a hollowbody with the feedback-fighting benefits and longer sustain of a solidbody. Their distinctive tones are popular among rock, blues and rockabilly players.</p>"
        document.querySelector(".guitarFinderApp").appendChild(divbodyoption)
    } else if (indi==5 && allinputs[indi].checked==false) {
        divbodyoption.innerHTML=""
    }
    if (indi==6 && allinputs[indi].checked==true) {
        divbodyoption.innerHTML="<p class=bodyDescription>Hollowbody guitars retain the natural, airy and woody sound of an acoustic guitar, but are prone to feedback when amplified at high volume levels. Hollowbody guitars are popular among jazz, country and folk players.</p>"
        document.querySelector(".guitarFinderApp").appendChild(divbodyoption)
    } else if (indi==6 && allinputs[indi].checked==false) {
        divbodyoption.innerHTML=""
    }
}


let contador=0
//!NO ENTIENDO BIEN XQ FUNCIONA
switch (index) {
    case 1:
        console.log("EL INDEX ESSS DE "+index)
        allinputs[contador].addEventListener("change",()=> seleccion(0))
        allinputs[contador+1].addEventListener("change",()=> seleccion(1))
    case 2:
        contador=2
        console.log("EL INDEX ESSS DE "+index)
        allinputs[contador].addEventListener("change",()=> seleccion(2))
        allinputs[contador+1].addEventListener("change",()=> seleccion(3))
    case 3:
        console.log("EL INDEX ESSS DE "+index)
        contador=4
        allinputs[contador].addEventListener("change",()=> seleccion(4))
        allinputs[contador+1].addEventListener("change",()=> seleccion(5))
        allinputs[contador+2].addEventListener("change",()=> seleccion(6))
        allinputs[contador+3].addEventListener("change",()=> seleccion(7))
        allinputs[contador+4].addEventListener("change",()=> seleccion(8))
        allinputs[contador+5].addEventListener("change",()=> seleccion(9))
        allinputs[contador+6].addEventListener("change",()=> seleccion(10))
        allinputs[contador+7].addEventListener("change",()=> seleccion(11))
        allinputs[contador+8].addEventListener("change",()=> seleccion(12))
   /*  case 2:opt2inputs[contador].addEventListener */
}
console.log(allinputs)








/*FUNCIONES QUE CHEQUEAN LAS OPCIONES MARCADAS */ 

function chequeado1(letra,inputindex){
    for (let z=1; z<3;z++) {
        input= document.getElementById("opt"+inputindex+letra)  
        if (input.checked && letra=="a") {
              elecciones= timeBasic.filter(p=> p)
              console.log(timeBasic)
              break;
        }
        else if (input.checked && letra=="b") {
            elecciones=timeAdvanced.filter(p=>p)
            console.log(timeBasic)

        }
        else {
            letra="b"
        }
    }
}
    
function chequeado2(letra,inputindex) {
 for (let z=1; z<3; z++) {
         input= document.getElementById("opt"+inputindex+letra)  
        if (input.checked && letra=="a") {
              elecciones1= elecciones.filter(p => p.age==="kid" || p.age==="kidadult")
              console.log("se filtro por kids")
              console.log(elecciones1)
              break;
        }
        else if (input.checked && letra=="b") {
              elecciones1= elecciones.filter(p=>p.age==="adult" || p.age==="kidadult")
              console.log(elecciones1);
              console.log("se voto adult")
              break;
        }
        else {
            letra="b"
            console.log("cambio la letra a b")
        }
        
    }
}



 function chequeado3(letra,inputindex) {
    for (let m=1;m<4;m++ ) {
        input= document.getElementById("opt"+inputindex+letra) 
        if (input.checked && letra=="a") {
             elecciones2=elecciones1.filter(p=>p.body==="solidbody")
             console.log(elecciones2)
             break
        }
        else if (input.checked && letra=="b") {
            elecciones2=elecciones1.filter(p=>p.body==="semihollow")
            console.log(elecciones2)
            break
        }
        else if (input.checked && letra=="c") {
            elecciones2=elecciones1.filter(p=>p.body==="hollowbody")
            console.log(elecciones2)
            break
        }
        else {
            if (letra=="b") {
                letra="c"
                console.log("la letra es C")
            }
            else {
                letra="b"
                console.log("la letra del chequeado 3 es "+letra)
            }
        }
        console.log(m)
    }
 }
 function chequeado4(letra,inputindex) {
    for (let m=1;m<4;m++ ) {
        input= document.getElementById("opt"+inputindex+letra) 
        if (input.checked && letra=="a") {
             elecciones3=elecciones2.filter(p=>p.price<=400)
             console.log(elecciones3)
             console.log("ELEGIDO PRECIO DE 0 A 400")
             break
        }
        else if (input.checked && letra=="b") {
            elecciones3=elecciones2.filter(p=>p.price>400 && p.price<=700)
            console.log(elecciones3)
            console.log("ELEGIDO PRECIO DE 400 A 700")
            break
        }
        else if (input.checked && letra=="c") {
            elecciones3=elecciones2.filter(p=>p.price>700 && p.price<=3000)
            console.log(elecciones3)
            console.log("ELEGIDO PRECIO DE 700 A 3000")
            break
        }
        else {
            if (letra=="b") {
                letra="c"
                console.log("la letra es C")
            }
            else {
                letra="b"
                console.log("la letra del chequeado 4 es "+letra)
            }
        }
       
    }
 }
 function chequeado5(letra,inputindex) {
    for (let m=1;m<5;m++ ) {
        input= document.getElementById("opt"+inputindex+letra) 
        if (input.checked && letra=="a") {
             elecciones4=elecciones3.filter(p=>p.brand==="fender")
             marcaelegida="fender"
             console.log(elecciones4)
             break
        }
        else if (input.checked && letra=="b") {
            elecciones4=elecciones3.filter(p=>p.brand==="gibson")
            marcaelegida="gibson"
            console.log(elecciones4)
            break
        }
        else if (input.checked && letra=="c") {
            elecciones4=elecciones3.filter(p=>p.brand==="ibanez")
            marcaelegida="ibanez"
            console.log(elecciones4)
            break
        }
        else {
            if (letra=="b") {
                letra="c"
                console.log("la letra es C")
            }
            else {
                letra="b"
                console.log("la letra del chequeado 5 es "+letra)
            }
        }
       
    }
 }





 /*EFECTOS MUSICA */

 let imagenhover = document.querySelector(".img")
 let audioplay=document.querySelector(".playbutton")
let audioArr=document.getElementsByTagName("audio")
console.log(audioArr)
/* imagenhover.addEventListener("mouseenter", ()=> {
    audioArr[2].play()
})
imagenhover.addEventListener("mouseleave", ()=> {
    audioArr[1].play()
}) */
audioplay.addEventListener("click",()=> {
    audioArr[2].play()
})
