export declare class ConfigurationProvider<T> {
    private mergedConfiguration;
    constructor();
    $get($q: angular.IQService): T;
    get(): T;
    addObject(obj: any, optional?: boolean): void;
}
export declare function loadConfigurationJSON(callback: any): void;
