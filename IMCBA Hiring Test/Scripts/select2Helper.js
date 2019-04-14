const Select2Helper = (function () {

    'use strict';

    var select2Helper = {};

    select2Helper.defaults = {
        class: '.select2',
        classBE: '.select2, .select2BE'
    };

    select2Helper.initialize = function (settings) {
        settings = $.extend({}, select2Helper.defaults, settings);
        $(settings.class).select2({
            openOnEnter: false
        }).focus(function () {
            $(this).select2('focus');
        });
    };

    select2Helper.beautifyError = function (settings) {
        settings = $.extend({}, select2Helper.defaults, settings);
        $(settings.classBE).on('select2-open', function () {
            var that = $(this);
            if (that.parents('[class*="has-"]').length) {

                // get all CSS-classes from the element where we found "has-*" and collect them in an array
                var classNames = that.parents('[class*="has-"]').get(0).className.split(/\s+/);

                // go through the class names, find "has-"
                for (var i = 0; i < classNames.length; ++i) {
                    if (classNames[i].match('has-')) {
                        // and apply that class name to #select2-drop
                        $('#select2-drop').addClass(classNames[i]);
                    }
                }
            } else {
                var classNames = $('#select2-drop').get(0).className.split(/\s+/);
                for (var i = 0; i < classNames.length; ++i) {
                    if (classNames[i].match('has-')) {
                        // and apply that class name to #select2-drop
                        $('#select2-drop').removeClass(classNames[i]);
                    }
                }
            }
        });
    };

    select2Helper.initAndBeautifyError = function (settings) {
        select2Helper.initialize(settings);
        select2Helper.beautifyError(settings);
    };

    return {
        BeautifyError: select2Helper.beautifyError,
        Init: select2Helper.initialize,
        InitAndBeautifyError: select2Helper.initAndBeautifyError
    };
})();