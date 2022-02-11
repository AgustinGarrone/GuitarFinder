const JSONGuitars="./data/guitars.json"

let timeBasic=[]
let timeAdvanced=[]
/*INTENTANDO CARGAR JSON*/
$.getJSON(JSONGuitars, function (respuesta,estado) {
     if (estado==="success") {
         for (guitar of respuesta.guitars) {
             if (guitar.time==="basic" || guitar.time==="basicadvanced"){
                 timeBasic.push(guitar)
                 console.log("agregada"+guitar+ "al array basic")
             }
             if (guitar.time==="advanced" || guitar.time==="basicadvanced") {
                 timeAdvanced.push(guitar)
                 console.log("agregada"+guitar+ "al array adv")
             }
         }
         console.log(timeBasic)
         console.log(timeAdvanced)
     }
})
console.log(timeBasic)
console.log(timeAdvanced)
let elecciones=[]
let elecciones1=[]
let elecciones2=[]
let elecciones3=[]
let elecciones4=[]