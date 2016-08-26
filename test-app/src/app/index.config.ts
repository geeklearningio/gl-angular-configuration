'use strict';
import {ConfigurationProvider} from "../../../package/src/ConfigurationProvider";

interface ITestAppConfiguration {
    env: string
}

export class Config {
    /** @ngInject */
    constructor(configurationProvider: ConfigurationProvider<ITestAppConfiguration>) {

        // you can add configuration objects in the configuration function of Angular
        configurationProvider.addObject({otherParam: 'test'});
    }
}
