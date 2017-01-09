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

    function dynamicInput(input) {
        $(input, $('.js-dynamics')).on('change input move', function (e) {
            var $ele = $(this);
            if($ele[0].tagName == 'LABEL') {
                $ele = $('input', $(this));
            }
            var value = $ele.val();
            var attr = $ele.attr('name');
            console.log('ele', $ele);
            var recipe = ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe();
            recipe[attr] = value;
            ASSETGENERATOR.FILESYSTEM.base.setActiveRecipe(recipe);
            ASSETGENERATOR.CANVAS.loadRecipe.load();
        });
    }


    return {
        init: init,
        hooks: hooks,
        dynamicInputs: dynamicInput,
    }

}());
