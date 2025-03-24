$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false
              }
            }
          ]
    })

    $('.reviews__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1141,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 846,
                settings: {
                  slidesToShow: 2
                }
            }, 
            {
                breakpoint: 586,
                settings: {
                  slidesToShow: 1
                }
            }
          ]
    })

});
$(function() {

  $("[data-collapse]").on("click", function (event) {
      event.preventDefault()

      let $this = $(this)
      let blockId = $this.data("collapse")
      
      $this.toggleClass("active")
  })

  // $('.menu__btn').on('click', function () {
  //     $('.menu__list').toggleClass('menu__list--active')
  // })

  // $('[data-fancybox]').fancybox({
  //     youtube : {
  //         controls : 1,
  //         showinfo : 1
  //     }
  // })

})

