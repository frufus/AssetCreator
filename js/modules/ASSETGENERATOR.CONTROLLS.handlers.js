var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CONTROLLS = ASSETGENERATOR.CONTROLLS || {};

ASSETGENERATOR.CONTROLLS.handlers = (function() {
    var hooks = {
        updateActiveRecipe: 'js-updateActiveRecipe',

    };

    function init(opts) {
        for(var hook in hooks) {
            eval(hook)();
        }
    }

    function updateActiveRecipe() {
        $('.' + hooks.updateActiveRecipe).on('change', function (e) {
            ASSETGENERATOR.FILESYSTEM.base.setActiveRecipeFromList($(this).val());
            $(ASSETGENERATOR.CONTROLLS.util.elements.recipeInput).val(JSON.stringify(ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe(), undefined, 4));
        });
    }


    return {
        init: init,
        hooks: hooks,
    }

}());
