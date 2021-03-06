// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/mpromise/mpromise.d.ts
declare module "mpromise" {
  interface IFulfillFunction<F> {
    (...args: F[]): void;
    (arg: F): void;
  }
  interface IRejectFunction<R> {
    (err: R): void;
  }
  interface IResolveFunction<F, R> {
    (err: R, ...args: F[]): void;
    (err: R, arg: F): void;
  }

  class Promise<F, R> {
    constructor(fn?: IResolveFunction<F, R>);

    static FAILURE: string;
    static SUCCESS: string;

    fulfill(...args: F[]): Promise<F, R>;
    fulfill(arg: F): Promise<F, R>;
    reject(reason: R): Promise<F, R>;
    resolve(reason: R, ...args: F[]): Promise<F, R>;
    resolve(reason: R, arg: F): Promise<F, R>;

    onFulfill(callback: IFulfillFunction<F>): Promise<F, R>;
    onReject(callback: IRejectFunction<R>): Promise<F, R>;
    onResolve(callback: IResolveFunction<F, R>): Promise<F, R>;

    then<F, R>(onFulfilled: IFulfillFunction<F>, onRejected?: IRejectFunction<R>): Promise<F, R>;
    end(): void;

    chain(promise: Promise<F, R>): Promise<F, R>;
  }

  export = Promise;
}
