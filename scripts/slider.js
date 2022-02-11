console.log("SLIDER ANDA")

/* let splideDiv=document.createElement("div")
let splide__track=document.createElement("div")
let splide__list=document.createElement("div")





splideDiv.classList.add("splide")
splide__track.classList.add("splide__track")
splide__list.classList.add("splide__list")

results.prepend(splideDiv)
splideDiv.prepend(splide__track)
splide__track.prepend(splide__list) */


function slideron (){
    var splide=new Splide( ".splide", {
        type: 'loop',
        perPage: 1,
        focus:'center',
        autoWidth: true
    }).mount();
/*     let guitarras=document.getElementsByClassName("splide__slide")
    for (let i=0;i=guitarras.length;i++) {
        if (guitarras[i].classList.contains("is-visible is-next") || guitarras[i].classList.contains("is-visible is-prev") || guitarras[i].classList.contains("is-visible is-active")){
            console.log(guitarras[i])
        }
    } */
/*     let visibles=document.getElementsByClassName("is-visible")
     if (visibles.length==5) {
        visibles[1].classList.add("elactivo")
        visibles[2].classList.add("elactivo")
        visibles[3].classList.add("elactivo")
    }   */
   /*  splide.on( 'moved', function () { */
        /* console.log("EJECUTANDO MOVIMIENTO SEXY")
        visibles=[]
     let sacarvisibles=document.getElementsByClassName("elactivo")
     if (sacarvisibles!=undefined && sacarvisibles.length>0) {
         console.log(sacarvisibles)
         for (let i=0;i=sacarvisibles.length;i++){
             sacarvisibles[i].classList.add("AYYYESTAWEA")
         }
     }
     visibles=document.getElementsByClassName("is-visible")
     if (visibles.length==5) {
        visibles[1].classList.add("elactivo")
        visibles[2].classList.add("elactivo")
        visibles[3].classList.add("elactivo")
    }   */
 /*    let guitarras=document.getElementsByClassName("splide__slider")
    for (let i=0;i=guitarras.length;i++) {
        if (guitarra[i].classList.contains("is-visible is-next") || guitarra[i].classList.contains("is-visible is-prev") || guitarra[i].classList.contains("is-visible is-active")){
            console.log(guitarra[i])
        }
    }
      } );
 */
      splide.on( 'active', function (slide) {
          slide.style.backgroundColor = "red";
      })
 }



/* slider.addEventListener('mousedown',(e)=> {
    apretado=true;
    startX=e.offsetX- innerSlider.offsetLeft
    console.log(startX)
    slider.style.cursor='grabbing'
})

slider.addEventListener('mouseenter',()=>{
    slider.style.cursor='grab'
})

slider.addEventListener("mouseup",()=>{
    slider.style.cursor='grab'
})

window.addEventListener("mouseup",()=>{
    apretado=false
})

slider.addEventListener('mousemove',(e)=>{
    if (!apretado) return 
    e.preventDefault()
    x=e.offsetX

    innerSlider.style.left=`${x-startX}px`
})

function checkbound(){
    let outer=slider.getBoundingClientRect()
    let inner=innerSlider.getBoundingClientRect()
    if (parseInt(innerSlider.style.left)>0) {
        innerSlider.style.left="0px"
    } else if (inner.right<outer.right) {
        innerSlider.style.left=`-${inner.width-outer.width}px`
    }
}
 */

