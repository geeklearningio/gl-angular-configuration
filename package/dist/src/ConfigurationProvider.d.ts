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
}
export declare function loadConfigurationJSON(callback: any): void;
