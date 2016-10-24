var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.FILESYSTEM = ASSETGENERATOR.FILESYSTEM || {};

ASSETGENERATOR.FILESYSTEM.base = (function() {

    var dir = './recipe/';
    var extention = '.json';
    var fileList = [];

    
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

    function updatedFileList(data) {
        console.log('Data:', data);
        fileList = data;
        for (index in fileList) {
            getJSON(fileList[index]);
        }
    }

    /**
     *
     * @param filename
     */
    function getJSON(filename) {
        $.getJSON(dir + filename, {}).done(function(data) {
            console.log('JSON:', data);
            return data;
        });

    }




    return {
        init: init

    }

}());
