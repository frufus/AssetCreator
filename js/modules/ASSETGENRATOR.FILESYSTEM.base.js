var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.FILESYSTEM = ASSETGENERATOR.FILESYSTEM || {};

ASSETGENERATOR.FILESYSTEM.base = (function() {

    var dir = './recipe/';
    var extention = '.json';
    var fileList = [];
    var activeRecipe;

    
    function init(opts) {
        getFilenames();
    }

    /**
     *
     * @returns {Array}
     */
    function getFilenames() {
        var filenames = [];
        $.ajax({
            //This will retrieve the contents of the folder if the folder is configured as 'browsable'
            url: dir + 'scanDir.php',
            method: 'POST',
            dataType: 'json',
            async: false,
            cache: false,
            error: function(responde){
                  console.log('Error:', responde);
            },
            success: function (data) {
                // List all json file names in the page
                updatedFileList(data);
            }
        });
    }

    /**
     * 
     * @param data
     */
    function updatedFileList(data) {
        fileList = [];
        console.log('data', data);

        for (var index in data) {
            if (!data.hasOwnProperty(index)) continue;
            var json = getJSON(data[index]);
            fileList[json.name] = data[index];
        }
    }

    /**
     *
     * @param filename
     */
    function getJSON(filename) {
        var filePath = dir + filename;
        var json = $.ajax({
            url: filePath,
            method: 'GET',
            dataType: 'json',
            async: false,
            cache: false
        }).responseText;
        try {
            json = JSON.parse(json);
            return json;
        } catch (e) {
            return {};
        }

    }

    /**
     * 
     * @param recipeName
     */
    function setActiveRecipeFromList(recipeName) {
        setActiveRecipe(getJSON(recipeName));
    }

    /**
     *
     * @param recipe
     */
    function setActiveRecipe(recipe) {
        activeRecipe = recipe;
    }

    /**
     * 
     * @returns {Array}
     */
    function getRecipes() {
        return fileList;
    }

    function getActiveRecipe() {
        return activeRecipe;
    }




    return {
        init: init,
        getActiveRecipe: getActiveRecipe,
        setActiveRecipe: setActiveRecipe,
        setActiveRecipeFromList: setActiveRecipeFromList,
        getRecipes: getRecipes,
        getJSON: getJSON
    };

}());
