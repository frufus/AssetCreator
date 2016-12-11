var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.ASSET = ASSETGENERATOR.ASSET || {};

ASSETGENERATOR.ASSET.display = function () {
	var canvas;
	var context;
	var mod;

	function init() {
		canvas = ASSETGENERATOR.CANVAS.base.getCanvas();
		mod = canvas.width / 16;
		context = canvas.getContext("2d");
	}

	function drawGrid() {
		context.strokeStyle = '#DADADA';
		context.strokeWidth = 1;
		for (var i = 0; i <= canvas.width; i++) {
			if (i % mod == 0) {
				drawVerticalLine(context, i);
				drawHorizontalLine(context, i);
			}
		}
	}

	function drawVerticalLine(ctx, x) {
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvas.height);
		ctx.stroke();
	}

	function drawHorizontalLine(ctx, y) {
		ctx.moveTo(0, y);
		ctx.lineTo(canvas.width, y);
		ctx.stroke();
	}
	function chooseEyeColor(){
		return "#002266";
	}
	function drawFace(skinColor, eyeColor) {
		canvas = ASSETGENERATOR.CANVAS.base.getCanvas();
		mod = canvas.width / 16;
		context = canvas.getContext("2d");
		context.strokeStyle = skinColor;
		context.fillStyle = skinColor;
		context.fillRect(5 * mod, 5 * mod, 8 * mod, 6 * mod);
		context.fillRect(6 * mod, 11 * mod, 6 * mod, 2 * mod);
		context.fillRect(7 * mod, 13 * mod, 4 * mod, 1 * mod);
		context.fillStyle = '#FFFFFF';
		context.fillRect(5 * mod, 7 * mod, 1 * mod, 1 * mod);
		context.fillRect(10 * mod, 7 * mod, 1 * mod, 1 * mod);
		context.fillStyle = eyeColor;
		context.fillRect(6 * mod, 7 * mod, 2 * mod, 1 * mod);
		context.fillRect(11 * mod, 7 * mod, 2 * mod, 1 * mod);
	}

	function fillFace(skinColor, eyeColor) {
		canvas = ASSETGENERATOR.CANVAS.base.getCanvas();
		mod = canvas.width / 16;
		context = canvas.getContext("2d");
		context.fillStyle = skinColor;
		context.beginPath();
		context.rect(5 * mod, 5 * mod, 8 * mod, 6 * mod);
		context.rect(6 * mod, 11 * mod, 6 * mod, 2 * mod);
		context.rect(7 * mod, 13 * mod, 4 * mod, 1 * mod);
		context.fill();

		context.fillStyle = '#FFFFFF';
		context.fillRect(5 * mod, 7 * mod, 1 * mod, 1 * mod);
		context.fillRect(10 * mod, 7 * mod, 1 * mod, 1 * mod);
		context.fillStyle = eyeColor;
		context.fillRect(6 * mod, 7 * mod, 2 * mod, 1 * mod);
		context.fillRect(11 * mod, 7 * mod, 2 * mod, 1 * mod);
	}

	function fillHead(skinColor, shadowColor) {
		context.fillStyle = skinColor;
		context.beginPath();
		context.rect(5 * mod, 1 * mod, 5 * mod, 1 * mod);
		context.rect(4 * mod, 2 * mod, 8 * mod, 1 * mod);
		context.rect(3 * mod, 3 * mod, 9 * mod, 9 * mod);
		context.rect(4 * mod, 12 * mod, 8 * mod, 1 * mod);
		context.fill();

	}
	function fillProfile(skinColor){
		context.fillStyle = skinColor;
		context.beginPath();
		context.rect(11*mod, 2*mod,1*mod, 11*mod);
		var random = Math.floor(Math.random()*2);
		var secondRow= false;
		console.log(random);
		if(random == 1){
			context.rect(12*mod, 3*mod,1*mod, 10*mod);
			secondRow = true;
		}
		random = Math.floor(Math.random()*2);
		console.log(random);
		if(random == 1 && secondRow){
			context.rect(13*mod, 4*mod,1*mod, 7*mod);
		}
		context.fill();
	}

	function fillJaw(skinColor) {

		context.fillStyle = skinColor;
		context.beginPath();
		var minLength = 5;

		var firstLine = Math.floor((Math.random() * (10-minLength))+minLength );
		var startFirst = Math.floor((Math.random() * (10 - firstLine))) ;
		context.rect((4 + startFirst) * mod, 13 * mod, firstLine * mod, 1 * mod);

		var secondLine = Math.floor((Math.random() * (firstLine-minLength))+minLength-1 );
		var startSecond = Math.floor((Math.random() * (firstLine - secondLine))) ;
		context.rect((4+startFirst + startSecond) * mod, 14 * mod, secondLine * mod, 1 * mod);

		var thirdLine = Math.floor((Math.random() * (secondLine-minLength))+minLength-2 );
		var startThird = Math.floor((Math.random() * (secondLine - thirdLine))+1) ;
		context.rect((4+ startFirst +startSecond+ startThird) * mod, 15 * mod, thirdLine * mod, 1 * mod);

		context.fill();
	}

	function chooseNose(bright, dark) {
		context.fillStyle = bright;
		context.fillRect(8 * mod, 7 * mod, 2 * mod, 4 * mod);
		context.fillStyle = dark;
		context.beginPath();
		var noses = [
			function () {

				context.rect(8 * mod, 7 * mod, 1 * mod, 4 * mod);
				context.rect(7 * mod, 9 * mod, 1 * mod, 2 * mod);

			},
			function () {
				context.rect(8 * mod, 7 * mod, 1 * mod, 1 * mod);
				context.rect(8 * mod, 8 * mod, 1 * mod, 3 * mod);

			},
			function () {
				context.rect(8 * mod, 7* mod, 1 * mod, 4 * mod);
				context.rect(9 * mod, 8 * mod, 1 * mod, 1 * mod);

			}
		];
		var index = Math.floor(Math.random() * noses.length);
		noses[index]();
		context.fill();

	}

	function getColoredBlocks(startX, startY, width, height, color) {
		var rgb;
		var hexColor;
		var mask = [];
		for (var y = startY; y < width; y++) {
			var tmp = [];
			for (var x = startX; x < height; x++) {
				rgb = context.getImageData(x * mod + 3, y * mod + 3, 1, 1).data;
				hexColor = "#" + ("000000" + rgbToHex(rgb[0], rgb[1], rgb[2])).slice(-6);
				if (hexColor == color) {
					tmp[x] = true;
				} else {
					tmp[x] = false;
				}
			}
			mask[y] = tmp;
		}
		return mask;
	}

	function drawShadow(baseColor, shadowColor) {
		var startX = 0;
		var startY = 0;
		var width = 16;
		var height = 16;
		var mask = getColoredBlocks(startX, startY, width, height, baseColor);
		for (var y = startY; y < height; y++) {
			for (var x = startX; x < width; x++) {

				if (mask[y][x]) {
					context.fillStyle = shadowColor;
					context.fillRect(x * mod, y * mod, mod, mod);
					break;
				}


			}
		}
	}

	function rgbToHex(r, g, b) {
		if (r > 255 || g > 255 || b > 255)
			throw "Invalid color component";
		return ((r << 16) | (g << 8) | b).toString(16);
	}

	function drawBlock() {

	}

	return {
		init: init,
		drawGrid: drawGrid,
		drawFace: drawFace,
		fillFace: fillFace,
		fillHead: fillHead,
		fillJaw: fillJaw,
		fillProfile: fillProfile,
		chooseNose: chooseNose,
		chooseEyeColor: chooseEyeColor,
		drawShadow: drawShadow
	};

}();
