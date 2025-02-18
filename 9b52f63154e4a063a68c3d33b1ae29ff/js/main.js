$(function() {

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data("collapse")
        
        $this.toggleClass("active")
    })

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    })

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        }
    })

}) 

//send file
$(function() {
  document.getElementById('ajax-contact-form').addEventListener('submit', function(evt) {
    var http = new XMLHttpRequest(),
      f = this;
    var th = $(this);
    evt.preventDefault();

    document.getElementById('submit-button').style.display = 'none'; // Скрыть кнопку отправки
    document.getElementById('loading-spinner').style.display = 'block'; // Показать индикатор загрузки


    http.open("POST", "send.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        // alert(http.responseText);
        if (http.responseText.indexOf(f.name.value) == 0) {
          // Очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          document.getElementById('submit-button').style.display = 'block';
          document.getElementById('loading-spinner').style.display = 'none';
          alert("Ваша заявка отправлена!");
          const modal = document.getElementById('modal');
          modal.style.display = 'none';
          
          
          th.trigger("reset");
        }

      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
});
