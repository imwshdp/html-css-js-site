let refresh_form_size;


//открытие формы
function open_form(id) {

	let form = document.getElementById(id);
	let main = document.getElementById('main');

	let form_margin_left;
	let form_margin_top;

	form.style.visibility = "visible";
	form.style.WebkitAnimationName = "window_appearance_opacity";

	//обновление данных для получения размеров
	refresh_form_size = setInterval( function() {

		form_margin_left = (main.offsetWidth - (main.offsetWidth * 0.2))/2;
		form_margin_top = (main.offsetHeight - (main.offsetHeight * 0.5))/2;

		form.style.marginTop = form_margin_top;
		form.style.marginLeft = form_margin_left;

	}, 1);

}



//закрытие формы на крестик
function close_form(id) {

	let form = document.getElementById(id);

	form.style.WebkitAnimationName = "window_hiding_opacity";

    setTimeout( function() {
    
      form.style.visibility = "hidden";
      clearInterval(refresh_form_size);

    }, 500);

}