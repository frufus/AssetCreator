var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};
var base = ASSETGENERATOR.CANVAS.base || {};

ASSETGENERATOR.CANVAS.loadRecipe = (function () {

    var canvas;
    var activeRecipe;

    function load() {
        canvas = base.getCanvas();
        activeRecipe = ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe();

        if (activeRecipe.height) {
            base.setHeight(activeRecipe.height);
        }
        if (activeRecipe.width) {
            base.setWidth(activeRecipe.width);
        }

        for (var attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (typeof activeRecipe[attr] === 'object') {
                    if (activeRecipe[attr].hasOwnProperty('function')) {
                        var func;
                        eval('func = ' + activeRecipe[attr]['function']);
                        if(typeof func !== 'undefined') {
                            console.log('func:', func);
                            func();
                        } else {
                            console.log('Incorrect function!');
                        }
                    }
                }
            }
        }

    }


    return {
        load: load
    };

}());
