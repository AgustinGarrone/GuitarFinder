

function slideron (){
    let splide=new Splide( ".splide", {
      type: 'slide',
      perPage:5,
      clones:0,
     /*  autoplay:true,
      interval:3000, */
      wheel:true,
      releaseWheel:true,
      focus:'center',
      breakpoints: {
        640: {
          perPage: 2
        }
      }
    }).mount();
}

function sliderComparacion(){
  new Splide( ".splide2", {
    type: 'fade',
    perPage:1,
    clones:0,
   /*  autoplay:true,
    interval:3000, */
    focus:'center'
  }).mount();

}