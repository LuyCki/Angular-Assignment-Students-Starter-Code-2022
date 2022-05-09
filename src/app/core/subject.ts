import { IObserver, Observer } from "./observer";

export interface ISubject<T> {
  subscribe(callback: any): IObserver<T>;
  next(state: T): void;
  unsubscribe(observer: IObserver<T>): void;
  getState(): T;
}

export class Subject<T> implements ISubject<T> {
  private state!: T;
  private observers: IObserver<T>[] = [];

  public subscribe(callback: any): IObserver<T> {
    const observer = new Observer(callback, this);
    this.observers.push(observer);

    return observer;
  }

  public next(state: T): void {
    this.state = state;
    this.observers.forEach((observer: IObserver<T>) => observer.next())
  }

  public unsubscribe(observer: IObserver<T>): void {
    const observerIndex = this.observers.indexOf(observer);

    this.observers.splice(observerIndex, 1);
  }

  public getState(): T {
    return this.state;
  }
}
