var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CONTROLLS = ASSETGENERATOR.CONTROLLS || {};

ASSETGENERATOR.CONTROLLS.handlers = (function() {
    var hooks = {
        updateActiveRecipe: 'js-updateActiveRecipe'
    };

    function init(opts) {
        for(var hook in hooks) {
            eval(hook)();
        }
    }

    function updateActiveRecipe() {
        $('.' + hooks.updateActiveRecipe).on('change', function (e) {
            ASSETGENERATOR.FILESYSTEM.base.setActiveRecipe($(this).val())
            console.log('Changed', $(this).val());
        });
    }

    return {
        init: init,
        hooks: hooks,
    }

}());
