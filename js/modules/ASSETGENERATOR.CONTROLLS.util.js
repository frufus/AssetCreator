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
        dynamicInputs : '.js-dynamics',
        dynamicArrays : '.js-arrays'
    };

    function init(opts) {

    }


    function createDropdown(elements, classes, label, noIndex) {
        var $select = $('<select></select>');
        for (var ele in elements) {
            var $option;
            if(noIndex) {
                $option = $('<option value="' + elements[ele] +'">' + elements[ele] + '</option>');
            } else {
                $option = $('<option value="' + elements[ele] +'">' + ele + '</option>');
            }
            $select.append($option);
        }

        if(typeof label !== 'undefined') {
            var $label = $('<label for="' + label + '">' + label + '</label>');
            $select = $label.append($select);
        }

        if(classes) {
            $select.addClass(classes);
        }
        return $select;
    }


    function addInput(value, type, label, classes) {
        if (typeof type === 'undefined') {
            type = 'text';
        }
        var $input = $('<input type="' + type + '" value="' + value + '" name="'+ label + '" id="'+ label + '">');

        if (classes) {
            $input.addClass(classes);
        }

        if(typeof label !== 'undefined') {
            var $label = $('<label for="' + label + '">' + label + '</label>');
            $input = $label.append($input);
        }

        return $input;
    }

    function closeRecipeBox() {
        $(elements.recipeBox).hide();
    }

    function showRecipeBox() {
        $(elements.recipeBox).show();
    }

    function updateRecipe(recipe) {
        ASSETGENERATOR.FILESYSTEM.base.setActiveRecipe(JSON.parse($(elements.recipeInput).val()));
        ASSETGENERATOR.CANVAS.loadRecipe.load();
    }

    function addToControlls(element) {
        $(elements.dynamicInputs).append(element);
    }

    function addToArrays(element) {
        $(elements.dynamicArrays).append(element);
    }

    function emptyControlls() {
        $(elements.dynamicInputs).empty();
        $(elements.dynamicArrays).empty();
    }


    return {
        init: init,
        elements: elements,
        createDropdown: createDropdown,
        closeRecipeBox: closeRecipeBox,
        showRecipeBox: showRecipeBox,
        updateRecipe: updateRecipe,
        addInput: addInput,
        addToControlls: addToControlls,
        addToArrays: addToArrays,
        emptyControlls: emptyControlls,
    }

}());
