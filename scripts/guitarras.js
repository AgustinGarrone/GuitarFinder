const JSONGuitars="./data/guitars.json"

let timeBasic=[]
let timeAdvanced=[]
/*INTENTANDO CARGAR JSON*/
$.getJSON(JSONGuitars, function (respuesta,estado) {
     if (estado==="success") {
         for (guitar of respuesta.guitars) {
             if (guitar.time==="basic" || guitar.time==="basicadvanced"){
                 timeBasic.push(guitar)
             }
             if (guitar.time==="advanced" || guitar.time==="basicadvanced") {
                 timeAdvanced.push(guitar)
             }
         }
     }
})

