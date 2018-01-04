let fs = require('fs');
let path = require('path');
let dr = fs.readdirSync('pic');

// dr.forEach(v => {
// 		if(v.match(/\.\d/g) !== null) fs.renameSync(path.join(__dirname, 'pic', v.replace(/\.\d/g, '')), path.join(__dirname, 'pic', v.replace(/\.\d/g, '.2')))
// 	})

let dt = dr.sort((a,b) => {
	let aa = parseFloat(a), bb = parseFloat(b);
	return (aa > bb) ? 1 : -1;
})
// console.log(dt);

let steps = '', tx = 0, ty = 0, tz = 0, rx = 0, ry = 0, rz = 0, height = 600; // 450;
	
	steps += `
		<div class="step" data-x="0" data-y="0" data-z="-5000" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0"><h5><br/></h5></div>`
	steps += `
		<div class="step" data-x="0" data-y="0" data-z="-3000" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-scale="1">
			<img height="${height}px" src="opening.png"/>
			<img height="${height}px" src="pic/2.jpg" lefty="20"/>
		</div>`
	steps += `
		<div class="step" data-x="0" data-y="0" data-z="-2000" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0"><h5><br/></h5></div>`
	
	for(let i=0; i<dt.length; i++) {
		let amt = 120;
		let rn = 10+parseInt(Math.random()*10)
		steps += `
		<div class="step" data-x="${tx}" data-y="${ty}" data-z="${tz}" data-rotate-x="${rx}" data-rotate-y="${ry}" data-rotate-z="${rz}">
			<img height="${height}px" src="pic/${dt[i]}"/>
			<img height="${height}px" src="pic/${dt[i]}" lefty="20"/>
		</div>`
		tx += (i%4==1) ? amt*(10+parseInt(Math.random()*10)) : 0;
		ty += (i%4==2) ? amt*(10+parseInt(Math.random()*10)) : 0;
		tx += (i%4==3) ? -amt*(10+parseInt(Math.random()*10)) : 0;
		ty += (i%4==0) ? -amt*(10+parseInt(Math.random()*10)) : 0;
		tz += 400;
		rx += 0;
		ry += 0;
		rz += (i%2==0) ? 90 : 0;
		rz += (i%4==0) ? 180 : 0;
	}
	
	steps += `
		<div class="step" data-x="${tx}" data-y="${ty}" data-z="${tz+2000}" data-rotate-x="0" data-rotate-y="0" data-rotate-z="${rz}" data-scale="1">
			<img height="${height}px" src="closing.png"/>
			<img height="${height}px" src="black.jpg" lefty="20"/>
		</div>`
	steps += `
		<div class="step" data-x="${tx}" data-y="${ty}" data-z="${tz+3000}" data-rotate-x="0" data-rotate-y="0" data-rotate-z="${rz}"><h5><br/></h5></div>
	`;

let htm = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>Tour ICT 2017</title>
    <link href="main.css" rel="stylesheet"/>
    <link rel="shortcut icon" href="favicon.png"/>
</head>

<body class="impress-not-supported">
	
	<!-- Created By NaeeM -->
	
	<div class="fallback-message">
		<p>... LOADING ...</p>
		<p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
	</div>
	
	<audio preload="auto" id="music">
		<source src="music.wav" type="audio/wav"></source>
	</audio>
	
	<div id="impress" style="opacity: 0;">${ steps }</div>

	<div class="hint">
		<p>Use a spacebar or arrow keys to navigate</p>
	</div>
	
	<script>
		if ("ontouchstart" in document.documentElement) {
			document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
		}
	</script>

	<script src="jquery.min.js"></script>
	<script src="impress.custom.js"></script>
	<script src="index.js"></script>
	
</body>
</html>`

// fs.writeFileSync(path.join(__dirname, 'data.js'), `var DATA = ${JSON.stringify(sr)};`)
fs.writeFileSync(path.join(__dirname, 'index.html'), htm);