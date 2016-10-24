var ASSETGENERATOR = ASSETGENERATOR || {};
ASSETGENERATOR.CONTROLLS = ASSETGENERATOR.CONTROLLS || {};

ASSETGENERATOR.CONTROLLS.util = (function() {
    var elements = {
        inputs: '.js-inputs'
    };

    function init(opts) {

    }


    function createDropdown(elements, classes) {
        console.log('Ele', elements);
        var $select = $('<select></select>');
        for (ele in elements) {
            var $option = $('<option value="' + elements[ele] +'">' + ele + '</option>');
            $select.append($option);
        }
        if(classes) {
            $select.addClass(classes);
        }
        return $select;
    }


    return {
        init: init,
        elements: elements,
        createDropdown: createDropdown
    }

}());
