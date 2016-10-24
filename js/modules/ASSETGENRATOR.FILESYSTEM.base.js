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
                console.log('DATA', data);
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
        for (index in data) {
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
        return JSON.parse(json);

    }

    /**
     * 
     * @param recipeName
     */
    function setActiveRecipe(recipeName) {
        activeRecipe = getJSON(recipeName);
    }

    /**
     * 
     * @returns {Array}
     */
    function getRecipes() {
        return fileList;
    }



    return {
        init: init,
        activeRecipe: activeRecipe,
        setActiveRecipe: setActiveRecipe,
        getRecipes: getRecipes
    }

}());
