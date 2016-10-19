var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};

ASSETGENERATOR.CANVAS.base = (function() {

    var canvas;
	function init(settingsopts) {

        var settings = jQuery.extend({
            height: 640,
            width: 640
            
        });

        canvas = document.getElementById('js-canvas');
        
       
        if(settings.height){
            setHeight(settings.height);
        }
        if(settings.width){
            setWidth(settings.width);
        }
		
    }
    var getCanvas = function getCanvas(){
    	return canvas;
    };
    
    function setWidth(width) {
        canvas.width = width;
    }

    function setHeight(height) {
        canvas.height = height;
    }

    return {
        init: init,
        setHeight: setHeight,
        setWidth: setWidth,
        getCanvas: getCanvas
    };

}());