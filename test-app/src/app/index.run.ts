'use strict';
import {ITestAppConfiguration} from "./configuration/ITestAppConfiguration.d.ts";

export class RunBlock {

    /** @ngInject */
    constructor(configuration: ITestAppConfiguration) {
        console.log('here is the configuration object in the run function of Angular:');
        console.log(configuration);
    }
}
