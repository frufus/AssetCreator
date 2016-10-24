ag = ASSETGENERATOR || {};
canvas = ag.CANVAS || {};
interface = ag.INTERFACE || {};
asset = ag.ASSET || {};
filesystem = ag.FILESYSTEM || {};

$(document).ready(function() {
    canvas.base.init()
    filesystem.base.init();

    var $dropdown = interface.util.createDropdown(filesystem.base.getRecipes());
    $(interface.util.inputs).append($dropdown);
    console.log('Dropdown', $dropdown);


    asset.display.init();
	asset.display.drawGrid();
	asset.display.drawFace('#cba675', '#312783');
    console.log('Success!');
});