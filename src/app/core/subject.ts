import { IObserver, Observer } from "./observer";

export interface ISubject<T> {
  subscribe(callback: any): void;
  next(state: T): void;
  getState(): T;
}

export class Subject<T> implements ISubject<T> {
  private state!: T;
  private observers: IObserver<T>[] = [];

  public subscribe(callback: any): void {
    const observer = new Observer(callback, this);
    this.observers.push(observer);
  }

  public next(state: T): void {
    this.state = state;
    this.observers.forEach((observer: IObserver<T>) => observer.next())
  }

  public getState(): T {
    return this.state;
  }
}
