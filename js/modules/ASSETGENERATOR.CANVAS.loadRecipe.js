var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};
var base = ASSETGENERATOR.CANVAS.base || {};

ASSETGENERATOR.CANVAS.loadRecipe = (function () {

    var canvas;
    var activeRecipe;

    function load() {
        canvas = base.getCanvas();
        console.log('Active:', ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe());
        activeRecipe = ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe();

        if (activeRecipe.height) {
            base.setHeight(activeRecipe.height);
        }
        if (activeRecipe.width) {
            base.setWidth(activeRecipe.width);
        }

        for (attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (typeof activeRecipe[attr] === 'object') {
                    if (activeRecipe[attr].type === 'function' && activeRecipe.hasOwnProperty('function')) {
                        console.log('Function:', activeRecipe[attr]['function']);
                        eval(activeRecipe[attr]['function'])();
                    }
                }
            }
        }

    }


    return {
        load: load
    };

}());
