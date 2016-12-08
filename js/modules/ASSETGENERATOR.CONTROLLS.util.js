var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CONTROLLS = ASSETGENERATOR.CONTROLLS || {};

ASSETGENERATOR.CONTROLLS.util = (function() {
    var elements = {
        inputs: '.js-inputs',
        recipeBox: '.js-recipe',
        closeRecipeBox: '.js-close-recipe',
        showRecipeBox: '.js-show-recipe',
        updateRecipe: '.js-reload-recipe',
        recipeInput: '.js-recipe-input',

    };

    function init(opts) {

    }


    function createDropdown(elements, classes) {
        var $select = $('<select></select>');
        for (ele in elements) {
            var $option = $('<option value="' + elements[ele] +'">' + ele + '</option>');
            $select.append($option);
        }
        if(classes) {
            $select.addClass(classes);
        }
        return $select;
    }

    function closeRecipeBox() {
        $(elements.recipeBox).hide();
    }

    function showRecipeBox() {
        $(elements.recipeBox).show();
    }

    function updateRecipe() {
        ASSETGENERATOR.FILESYSTEM.base.setActiveRecipe(JSON.parse($(elements.recipeInput).val()));
        ASSETGENERATOR.CANVAS.loadRecipe.load();
    }


    return {
        init: init,
        elements: elements,
        createDropdown: createDropdown,
        closeRecipeBox: closeRecipeBox,
        showRecipeBox: showRecipeBox,
        updateRecipe: updateRecipe,

    }

}());
