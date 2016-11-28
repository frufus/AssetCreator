var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};

ASSETGENERATOR.CANVAS.base = (function () {

    var canvas;

    function init(settingsopts) {

        var settings = jQuery.extend({
            height: 640,
            width: 640

        });

        canvas = document.getElementById('js-canvas');


        if (settings.height) {
            setHeight(settings.height);
        }
        if (settings.width) {
            setWidth(settings.width);
        }

    }

    var getCanvas = function getCanvas() {
        return canvas;
    };

    function setWidth(width) {
        canvas.width = width;
    }

    function setHeight(height) {
        canvas.height = height;
    }

    function getCanvasAsImage() {
        var src = '';
        if (typeof canvas !== 'undefined') {
            src = canvas.toDataURL("image/png");

        }

        urltoFile(src, (Math.floor(Date.now() / 1000)) + '.png', 'image/png');
    }

    function urltoFile(url, filename, mimeType) {
        return (fetch(url)
                .then(function (res) {
                    return res.arrayBuffer();
                })
                .then(function (buf) {
                    console.log('buf', buf);
                    var a = document.createElement("a");
                    var file = new Blob([buf], {type: mimeType});
                    var url = URL.createObjectURL(file);
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function () {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    }, 0);
                })
        );
    }


    return {
        init: init,
        setHeight: setHeight,
        setWidth: setWidth,
        getCanvas: getCanvas,
        getCanvasAsImage: getCanvasAsImage,
    };

}());
