var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.ASSET = ASSETGENERATOR.ASSET || {};

ASSETGENERATOR.ASSET.display = (function() {
	var canvas;
	var context;
	var mod;
	
	function init() {
    	canvas = ASSETGENERATOR.CANVAS.base.getCanvas();
    	mod = canvas.width / 16;
    	context = canvas.getContext("2d");
    	context.strokeStyle = '#DADADA';
    	context.strokeWidth = 1;
	}
	
	function drawGrid(){
		for(var i= 0; i <= canvas.width; i++){
			if(i % mod ==0){
				drawVerticalLine(context,i);
				drawHorizontalLine(context,i);
			}
		}
	}
	function drawVerticalLine(ctx,x){
		ctx.moveTo(x,0);
		ctx.lineTo(x,canvas.height);
		ctx.stroke();
	}
	function drawHorizontalLine(ctx,y){
		ctx.moveTo(0,y);
		ctx.lineTo(canvas.width, y);
		ctx.stroke();
	}
	function drawFace(skinColor, eyeColor){
		context.fillStyle = skinColor;
		context.fillRect(5*mod,5*mod,8*mod,6*mod);
		context.fillRect(6*mod,11*mod,6*mod,2*mod);
		context.fillRect(7*mod,13*mod,4*mod,1*mod);
		context.fillStyle = '#FFFFFF';
		context.fillRect(5*mod,7*mod,1*mod,1*mod);
		context.fillRect(10*mod,7*mod,1*mod,1*mod);
		context.fillStyle = eyeColor;
		context.fillRect(6*mod,7*mod,2*mod,1*mod);
		context.fillRect(11*mod,7*mod,2*mod,1*mod);
		
	}

	function drawBlock(){

	}
    return {
        init: init,
        drawGrid: drawGrid,
        drawFace: drawFace
    };

}());
