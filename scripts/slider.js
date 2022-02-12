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
  /*   if (guitarrasMostradas>5) {
        let splide=new Splide( ".splide", {
          type: 'slide',
          perPage:5,
          clones:0,
          autoplay:true,
          interval:3000,
          wheel:true,
          releaseWheel:true,
          focus:'center'
    }).mount();
  }  */
    let splide=new Splide( ".splide", {
      type: 'slide',
      perPage:5,
      clones:0,
     /*  autoplay:true,
      interval:3000, */
      wheel:true,
      releaseWheel:true,
      focus:'center'
    }).mount();

    console.log("LA CANTIDAD DE GUITARS MOSTRADAS ES ")
    console.log(guitarrasMostradas)
}
