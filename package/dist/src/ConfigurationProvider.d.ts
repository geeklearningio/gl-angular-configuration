export declare class ConfigurationProvider<T> {
    private mergedConfiguration;
    constructor();
    $get($q: angular.IQService): T;
    addConfiguration(obj: T, optional?: boolean): void;
    /**
     * Add a default object that will only add params that aren't already specified
     * @param obj
     */
    addDefaultConfiguration(obj: T): void;
    /**
     * Get the configuration object at config.
     * It can be useful to configure other providers with the loaded configuration
     * @returns {T}
     */
    getConfiguration(): T;
}
export declare function loadConfigurationJSON(callback: any, configurationFileUrl?: string): void;
