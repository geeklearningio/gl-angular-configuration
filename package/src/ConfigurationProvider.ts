declare var require: Function;
var merge = require('lodash/merge');

export class ConfigurationProvider<T> {
    private mergedConfiguration: T;

    /* @ngInject */
    constructor() {
        this.mergedConfiguration = <T>{};

        this.addObject((<any>window).webConfig, true);
        this.addObject((<any>window).configuration, true);
    }

    public $get($q: angular.IQService) {
        return this.mergedConfiguration;
    }

    public get(): T {
        return this.mergedConfiguration;
    }

    public addObject(obj: any, optional?: boolean) {
        if (obj) {
            this.mergedConfiguration = <T>merge(this.mergedConfiguration, obj);
        } else {
            if (!optional) {
                throw new Error("A not optional configuration was not found or undefined");
            }
        }
    }
}

export function loadConfigurationJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'configuration.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            (<any>window).configuration = JSON.parse(xobj.responseText);
            callback();
        }
    };
    xobj.send(null);
}

declare var exports: any;

exports = angular.module("gl-angular-configuration", [])
    .provider("configuration", ConfigurationProvider);


