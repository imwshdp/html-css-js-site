let w_width = 400;
let w_height = 600;

let margin_left = (screen.width - 400)/2;
let margin_top = (screen.height - 600)/2;

function show(link) {

	let new_window = window.open(link, 'social networks', 'width=' + w_width + ', height=' + w_height + ',left=' + margin_left + ',top='+ margin_top);
	
}