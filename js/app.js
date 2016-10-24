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

    controlls.handlers.init();

    asset.display.init();
	asset.display.drawGrid();
	asset.display.drawFace('#cba675', '#312783');
});
