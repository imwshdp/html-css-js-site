let content = [];

let welcome = 0;
let about = 1;
let space_adventures = 2;
let aims_and_proposals = 3;
let history = 4;

content[welcome] = "<p>welcome home, good traveler. What is it you desire?</p>";
content[about] = '<p>"space astro" is an organization that offers an effective course of actions to the arranging of new exotic type of leisure and recreation – space tourism.</p><p>we offer a fresh, holistic approach dedicated to your the most unusual and cherished desire, namely a desire for visiting the planet of your dreams.</p><p>by choosing our company, you trust us the organisation of your flight program and your trip in a whole, and it is very important for us.</p><p>from ensuring your maximum comfort when boarding, to a healthy, tasty and nutritious diet at all points of your stay during your trip — we treat in detail the practical part of our work.</p><p>thank you for choosing us! have a nice trip.</p>';
content[space_adventures] = '<p>space tourism is no longer a figment of our imaginations and dreams, it is our present.</p><p>today there are not so many companies that provide a qualitative type of service, so that your choice would be settled on them.</p><p>the approach to this modern type of tourism is incredibly complex and intricate, and must also be thought out to the smallest detail.</p><p>today, "spase astro" offers you the most relevant and the most comfortable vouchers, working on the principle of "all included". you don’t need to worry about the program, places where you can stay, or problems with provision.</p><p>our partners provide us with the latest proven technology to ensure you have maximum comfort during the trip. and equipped stations on planetary surfaces help you get the best trip experience.</p><p>at the moment in the actual projects involved such spaceships as "Apollo" and "Torrance", which are brand new models from SpaceX.</p>';
content[aims_and_proposals] = '<p>the plans of the project "space astro" offer a broader range of options, based on scientific possibilities, aimed at a new era in the use of outer space, as well as the resources of the planets of the solar system.</p><p>thanks to the implementation of a global technically complex program and a multitude of innovative technologies that have been directly tested in various projects, our project will be able to promote space tourism to the masses, making it more available for everyone.</p><p>this project was founded in order to allow people to touch that unknown and mysterious beautiful infinity of the space, as well as the planets that fill it.</p><p>the project "space astro" proposes a system in which automation and technology are intelligently integrated into an overall holistic social and technological design, where the main function will be to maximizer the quality of your life while on board and on the surface.</p>';
content[history] = "<p>the history of The Space Astro Project offers a unique perspective convey creator’s views regarding beauty. this website was actually developed to show the creator's aesthetic preferences in design, site logic, animations and others features.</p><p>however, it is still at the beginning of his life path. Creator hopes that it will become something more greater than common webpage.</p>";


window.addEventListener('load', (event) => {
	  
	document.getElementById("main_text_div").innerHTML = content[welcome];

});

function content_handler(type) {

	let main = document.getElementById("main_text_div");
	main.style.opacity = "0";

	switch (type) {

		case 'about':
			
			setTimeout(function() {
				
				main.innerHTML = content[about];
				main.style.opacity = "1";

			},500);

			break;

		case 'space_adventures':

			setTimeout(function() {
				
				main.innerHTML = content[space_adventures];
				main.style.opacity = "1";

			},500);

			break;

		case 'aims_and_proposals':

			setTimeout(function() {
				
				main.innerHTML = content[aims_and_proposals];
				main.style.opacity = "1";

			},500);

			break;

		case 'history':

			setTimeout(function() {
				
				main.innerHTML = content[history];
				main.style.opacity = "1";

			},500);

			break;
	}

}
