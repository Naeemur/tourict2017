// $ = require('jquery')

$(window).load(ev => {
	let c = 0;//parseInt(window.location.hash.replace('#/step-', '')) - 1;// 0;
	let im = $('#impress').css('opacity', 1);
	let imp = impress();
	
	$(document.body).on('click', e=>{
		setTimeout(() => {
			window.location.hash = '';
			window.location.reload();
		}, 1000);
	})
	
	impress().init();
	let aud = $('#music')[0]; //new Audio('music.wav');
	aud.play();
	// aud.onload = function(e) {
	// 	aud.play();
	// }
	// $('#song')[0].play();
	setTimeout(() => {
		imp.goto(1, 4000)
	}, 1000);
	
	setInterval(x => {
		c++;
		if(c<3 || c>68) return;
		console.log(c);
		imp.goto(c, 4300)
		$(im.children('div').children()[c-1]).addClass('gone')
		// im.children[0].children[c-1].classList.add('gone')
		let el = $(im.children('div').children()[c])
		let ima = el.find('img:first')
		let imb = el.find('img[lefty]')
		if(ima.width() > 1000) {
			ima.height(ima.height()/ima.width()*1000)
			imb.height(imb.height()/imb.width()*1000)
			ima.width(1000)
			imb.width(1000)
		}
		imb.css('left', (el.width()-imb.width())/2 + 20)
	}, 3600)
})