$(document).ready(function() {
    ASSETGENERATOR.CANVAS.base.init()
    ASSETGENERATOR.FILESYSTEM.base.init();
    ASSETGENERATOR.ASSET.display.init();
    console.log('Success!');
	ASSETGENERATOR.ASSET.display.drawGrid();
	ASSETGENERATOR.ASSET.display.drawFace('#cba675', '#312783');
});