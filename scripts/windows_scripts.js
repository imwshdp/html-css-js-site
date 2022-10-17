//скрипт для зависания фокуса на кнопке после нажатия
document.addEventListener('click', event => {

  if (event.target.matches('button')) { event.target.focus() }

})



//скрипт появления/сокрытия всплывающих окон
function pop_up_window(id) {

  //получение необходимых элементов
  let button = document.getElementById(id + "_b");
  let pp_window = document.getElementById(id + "_ppw");
  let b_marginleft;

	pp_window.style.visibility = "visible";

  //обновление данных для получения размеров
  let refresh_window_size = setInterval( function() {
    
    b_marginleft = button.parentNode.offsetLeft;
    pp_window.style.marginLeft = b_marginleft;
    pp_window.style.width = button.parentNode.offsetWidth;

  }, 1);

  pp_window.style.zIndex = "1";

  //установление необходимых анимаций
  pp_window.style.WebkitAnimationName = "window_appearance, window_appearance_opacity";



  //сокрытие окна
  button.addEventListener('blur', function() {

    pp_window.style.WebkitAnimationName = "window_hiding, window_hiding_opacity";

    setTimeout( function() {
    
      pp_window.style.visibility = "hidden";
      clearInterval(refresh_window_size);

    }, 2000);

  });

}



//открытие окна с доп. информацией
function open_info_window(id) {

  let info_w_width = 50;
  let info_w_height = 70;

  let ref_info = document.getElementById(id);
  let ref_info_b = document.getElementById(id + "_b");

  let background = document.getElementById("background");
  let bg_link;

  ref_info.style.visibility = "visible";

  //обновление данных для получения размеров
  let refresh_ref_window_size = setInterval( function() {
    
    let margin_left = (100 - info_w_width)/2;
    let margin_top = (100 - info_w_height)/2;

    ref_info.style.left = margin_left + "%";
    ref_info.style.top = margin_top + "%";

    ref_info.style.width = info_w_width + "%";
    ref_info.style.height = info_w_height + "%";

  }, 1);

  ref_info.style.zIndex = "1";

  setTimeout( function() {

    ref_info_b.focus();    

  }, 2500);



  //замена фона
  if(id == "moon_travels") {
    bg_link = "url('content/bg_moon.jpg')"
  } else {
    bg_link = "url('content/bg_venus.jpg')"
  }

  background.style.WebkitAnimationName = "background_fade";

  setTimeout( function() {
    background.style.backgroundImage = bg_link;
  }, 2500);



  //установление необходимых анимаций
  ref_info.style.WebkitAnimationName = "info_window_appearance_opacity";



  //сокрытие окна
  ref_info_b.addEventListener('blur', function() {

    ref_info.style.WebkitAnimationName = "info_window_hiding_opacity";

    setTimeout( function() {
    
      ref_info.style.visibility = "hidden";
      clearInterval(refresh_ref_window_size);

    }, 2500);

    //замена фона
    background.style.WebkitAnimationName = "background_fade_2";

    setTimeout( function() {
      background.style.backgroundImage = "url('content/bg.jpg')";
    }, 2500);

  });

}
