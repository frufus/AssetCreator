var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};

ASSETGENERATOR.CANVAS.base = (function() {

    var canvas;

    function init(settingsopts) {

        var settings = jQuery.extend({
            height: 200,
            width: 200
        }, opts);

        canvas = $('#js-canvas');
        if(canvas.getContext) {
            canvas.getContext("2d");
        }
        if(settings.height){
            setHeight(settings.height);
        }
        if(settings.width){
            setWidth(settings.width);
        }

    }

    function setWidth(width) {
        canvas.width = width;
    }

    function setHeight(height) {
        canvas.height = height;
    }


    return {
        init: init,
        setHeight: setHeight,
        setWidth: setWidth
    }

}());
