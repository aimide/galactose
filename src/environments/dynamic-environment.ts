declare var window: any;

export class DynamicEnvironment {
    public get base_api() {
        return window.config.base_api;
    }
}
