# Introduction
This is a configuration package for Angular. 
It allows you to dynamically load a json file at the root of your project.
It also provides a provider that allows you to add configuration values in the config function of your Angular app.

# Requirements
- npm
- angular

# How to configure
1) In your project folder, install this plugin using npm
`npm install git+https://git@github.com/geeklearningio/gl-angular-configuration.git --save`

2) You can use the Typescript (`package/src/ConfigurationProvider.ts`) or the Javascript ((`package/dist/ConfigurationProvider.js`)) version of the Provider.

3) In your application's main module, inject the dependency `gl-angular-configuration` in order to use the Provider.
```
angular.module('mainModuleName', ['ionic', 'gl-angular-configuration']){

}
```

# How to use

## Dynamically load the configuration.json file (optional)
Add a `configuration.json` file at the root of your project. 

Note: If you look at the webpack config (`webpack.base.config.js`) of the test-app provided with the package, you'll see that I use the `CopyWebpackPlugin` to copy the right configuration named after a `env` argument passed to the webpack cli. The command line I use is a npm script. You can find it in the `package.json` file of the test-app.

Remove the automatic bootstrap of your angular app. You can do it by Removing the `ng-app` tag of your `index.html` file.
It will allow you to boostrap it manually after the json has been loaded.
```
<html ng-app="testApp">
```

In your application's main module, call the `loadConfigurationJSON` and pass a callback as a param. In the callback, get the html dom element and bootstrap manually your app.
```
loadConfigurationJSON(() => {
    var domElement = document.querySelector('html');
    angular.bootstrap(domElement, ["testApp"]);
});
```

## Add a configuration at config state
In the config function of your Angular application, inject the `ConfigurationProvider` and call the `addConfiguration` function.
You can also add a default configuration by calling `addDefaultConfiguration`. This function only changes the priority of the configuration loaded. It means that if the current configuration has a "env" param and the default configuration has also an "env" param, then it will keep the param of the current configuration, not the default one.
You can specify the type of your configuration object in the Typescript version.

```
import {ConfigurationProvider} from "gl-angular-configuration/package/src/ConfigurationProvider";

interface ITestAppConfiguration {
    env: string
}

export class Config {
    constructor(configurationProvider: ConfigurationProvider<ITestAppConfiguration>) {
        configurationProvider.addObject({otherParam: 'test'});
    }
}
```
