ag = ASSETGENERATOR || {};
canvas = ag.CANVAS || {};
controlls = ag.CONTROLLS || {};
asset = ag.ASSET || {};
filesystem = ag.FILESYSTEM || {};

$(document).ready(function() {
    canvas.base.init()
    filesystem.base.init();

    var $dropdown = controlls.util.createDropdown(filesystem.base.getRecipes(), controlls.handlers.hooks.updateActiveRecipe);
    $(controlls.util.elements.inputs).append($dropdown);
    asset.display.init();

    var recipes = filesystem.base.getRecipes();
    for(var first in recipes) {
        var firstRecipe = recipes[first];
        break;
    }
    console.log('first', firstRecipe);
    filesystem.base.setActiveRecipeFromList(firstRecipe);
    $(ASSETGENERATOR.CONTROLLS.util.elements.recipeInput).val(JSON.stringify(ASSETGENERATOR.FILESYSTEM.base.getActiveRecipe(), undefined, 4));

    controlls.handlers.init();

});
