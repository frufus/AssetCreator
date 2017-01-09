var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CANVAS = ASSETGENERATOR.CANVAS || {};
var base = ASSETGENERATOR.CANVAS.base || {};

ASSETGENERATOR.CANVAS.loadRecipe = (function () {

    var canvas;
    var activeRecipe;

    function load() {
        canvas = base.getCanvas();
        activeRecipe = ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe();
        ASSETGENERATOR.CONTROLLS.util.emptyControlls();

        if (activeRecipe.height) {
            base.setHeight(activeRecipe.height);
        }
        if (activeRecipe.width) {
            base.setWidth(activeRecipe.width);
        }

        /**
         * copy all arrays an replace them with a single value
         */
        activeRecipe.arrays = {};
        for (var attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (Object.prototype.toString.call(activeRecipe[attr]) === '[object Array]') {
                    activeRecipe.arrays[attr] = activeRecipe[attr];
                    activeRecipe[attr] = randomFromArray(activeRecipe.arrays[attr]);
                }
            }
        }

        /**
         * execute all functions
         */
        for (var attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (typeof activeRecipe[attr] === 'object') {
                    if (activeRecipe[attr].hasOwnProperty('function')) {
                        var func;
                        eval('func = ' + activeRecipe[attr]['function']);
                        if (typeof func !== 'undefined') {
                            func();
                        } else {
                            console.log('Incorrect function!');
                        }
                    }
                }
            }
        }

        for (var attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (Object.prototype.toString.call(activeRecipe[attr]) === '[object String]') {
                    var input;
                    if (/^#[0-9A-F]{6}$/i.test(activeRecipe[attr])) {
                        input = ASSETGENERATOR.CONTROLLS.util.addInput(activeRecipe[attr], 'color', attr ,'js-attr-' + attr);
                    } else {
                        input = ASSETGENERATOR.CONTROLLS.util.addInput(activeRecipe[attr], 'text', attr, 'js-attr-' + attr);
                    }
                    ASSETGENERATOR.CONTROLLS.util.addToControlls(input);
                    ASSETGENERATOR.CONTROLLS.handlers.dynamicInputs(input);
                }
            }
        }

    }

    /**
     * Returns a random array element
     */
    function randomFromArray(array) {
        var max = array.length - 1;
        var min = 0;
        return array[Math.floor(Math.random() * (max - min + 1)) + min];
    }

    return {
        load: load
    };

}());
