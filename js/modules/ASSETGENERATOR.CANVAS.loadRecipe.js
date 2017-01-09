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
        if (typeof activeRecipe.arrays === 'undefined') {
            activeRecipe.arrays = {};
        }
        for (var attr in activeRecipe) {
            if (activeRecipe.hasOwnProperty(attr)) {
                if (activeRecipe[attr] instanceof Array || typeof activeRecipe[attr] === 'string' ||  activeRecipe[attr] === parseInt(activeRecipe[attr], 10)) {
                    if (activeRecipe[attr] instanceof Array) {
                        activeRecipe.arrays[attr] = activeRecipe[attr];
                        activeRecipe[attr] = randomFromArray(activeRecipe.arrays[attr]);
                    }
                    var input;
                    if (/^#[0-9A-F]{6}$/i.test(activeRecipe[attr])) {
                        input = ASSETGENERATOR.CONTROLLS.util.addInput(activeRecipe[attr], 'color', attr, 'js-attr-' + attr);
                    } else {
                        if(activeRecipe[attr] === parseInt(activeRecipe[attr], 10)) {
                            input = ASSETGENERATOR.CONTROLLS.util.addInput(activeRecipe[attr], 'number', attr, 'js-attr-' + attr);
                        }else {
                            input = ASSETGENERATOR.CONTROLLS.util.addInput(activeRecipe[attr], 'text', attr, 'js-attr-' + attr);
                        }
                    }
                    if (typeof activeRecipe.arrays[attr] !== 'undefined') {
                        var select = ASSETGENERATOR.CONTROLLS.util.createDropdown(activeRecipe.arrays[attr], 'js-attr-' + attr, attr, true);
                        ASSETGENERATOR.CONTROLLS.util.addToArrays(select);
                        ASSETGENERATOR.CONTROLLS.handlers.arrayDropdown(select);
                    }

                    ASSETGENERATOR.CONTROLLS.util.addToControlls(input);
                    ASSETGENERATOR.CONTROLLS.handlers.dynamicInputs(input);
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
