declare var require: Function;
var merge = require('lodash/merge');

export class ConfigurationProvider<T> {
    private mergedConfiguration: T;

    /* @ngInject */
    constructor() {
        this.mergedConfiguration = <T>{};

        this.addConfiguration((<any>window).webConfig, true);
        this.addConfiguration((<any>window).configuration, true);
    }

    public $get($q: angular.IQService) {
        return this.mergedConfiguration;
    }

    public addConfiguration(obj: T, optional?: boolean) {
        if (obj) {
            this.mergedConfiguration = <T>merge(this.mergedConfiguration, obj);
        } else {
            if (!optional) {
                throw new Error("A not optional configuration was not found or undefined");
            }
        }
    }

    /**
     * Add a default object that will only add params that aren't already specified
     * @param obj
     */
    public addDefaultObject(obj: T) {
        if (obj) {
            this.mergedConfiguration = <T>merge(obj, this.mergedConfiguration);
        }
    }
}

export function loadConfigurationJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'configuration.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4) {
            if (xobj.status == 200) {
                (<any>window).configuration = JSON.parse(xobj.responseText);
            }
            callback();
        }
    };
    xobj.send(null);
}

declare var exports: any;

exports = angular.module("gl-angular-configuration", [])
    .provider("configuration", ConfigurationProvider);


