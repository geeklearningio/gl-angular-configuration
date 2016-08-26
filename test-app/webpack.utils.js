/**
 * Created by Vidailhet on 28/07/16.
 */

'use strict';

var _ = require('lodash');
var baseConfig = require('./webpack.base.config');

module.exports = {
    customizer: function (objValue, srcValue) {
        if (_.isArray(objValue)) {
            return objValue.concat(srcValue);
        }
    },

    config: function (customization) {
        return _.mergeWith(baseConfig, customization, module.exports.customizer);
    }
};



