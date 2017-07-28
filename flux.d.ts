// sav-flux interfaces
type Unwatcher = () => void;

interface VueAndFlux {
    dispatch(action: String, payload: any): Promise<any> | Proxy;
    proxy(name: String | Object, val: any): void;
}

interface VuePlugin {
    install(vue: any): void;
}

interface Proxy {}

declare class implFlux {
    opts: Object;
    flux: implFlux;
    prop: Function;
    mutations: Object;
    actions: Object;
    proxys: Object;

    constructor(opts: Object);

    // utils
    clone(val: T): T;
    extend(target: Object, ...args: Array<any>): any;
    opt(name: String, defaultVal: any): any;

    // events
    on(event: String, fn: Function): void;
    before(event: String, fn: Function): void;
    off(event: String, fn: Function): void;
    once(event: String, fn: Function): void;
    subscribe(event: String, fn: Function): Unwatcher;
    emit(event: String, ...args: Array<any>): void;

    // promise
    resolve(val: any): Promise<any>;
    reject(err: any): Promise<any>;
    all(iterable: Array<Promise<any>>): Promise<any>;
    then(fn: (resolve: Function, reject: Function) => any): Promise<any>;
    cloneThen(val: any): Promise<any>;

    // states
    getState(): Object;
    replaceState(newState): Promise<any>;
    updateState(changedState: Object, slice: Boolean): Promise<any>;

    commit(type: String, payload: any): any | Proxy;
    dispatch(action: String, payload: any): Promise<any> | Proxy;
    proxy(name: String | Object, val: any): void;

    declare(mod: Array<any> | Object) : void;
}

declare class implFluxRedux {
    constructor(context: any);
    getState(): any;
    subscribe(fn: Function): void;
}

declare module 'sav-flux' {
    export class Flux extends implFlux {}
    export function FluxVue(m: any): VueAndFlux;
    export function FluxRiot(m: any): void;
    export function mapGetters(getters: Object);
    export function mapActions(actions: Object);
}
