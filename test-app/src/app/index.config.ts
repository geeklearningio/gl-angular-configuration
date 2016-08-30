'use strict';
import {ConfigurationProvider} from "gl-angular-configuration/package/src/ConfigurationProvider";
import {ITestAppConfiguration} from "./configuration/ITestAppConfiguration.d.ts";

export class Config {
    /** @ngInject */
    constructor(configurationProvider: ConfigurationProvider<ITestAppConfiguration>) {

        // you can add configuration objects in the configuration function of Angular
        configurationProvider.addConfiguration({otherParam: 'test'});
    }
}
