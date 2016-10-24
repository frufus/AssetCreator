var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.INTERFACE = ASSETGENERATOR.INTERFACE || {};

ASSETGENERATOR.INTERFACE.util = (function() {
    var elements = {
        inputs: '.js-inputs',
    };

    function init(opts) {

    }


    function createDropdown(elements) {
        console.log('Ele', elements);
        var $select = $('<select></select>');
        for (ele in elements) {
            var $option = $('<option value="' + elements[ele] +'">' + ele + '</option>');
            $select.append($option);
        }
        return $select;
    }


    return {
        init: init,
        elements: elements,
        createDropdown: createDropdown
    }

}());
