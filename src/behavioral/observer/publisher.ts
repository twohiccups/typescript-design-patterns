import { Observer, PackageTrackingData } from "./observer";

export abstract class Publisher<T> {
    // now private: subclasses can't mess with the collection directly
    private subscribers: Set<Observer<T>>;

    constructor() {
        this.subscribers = new Set<Observer<T>>();
    }

    subscribe(observer: Observer<T>): void {
        this.subscribers.add(observer);
    }

    unsubscribe(observer: Observer<T>): void {
        this.subscribers.delete(observer);
    }

    protected notifyObservers(data: T): void {
        for (const s of this.subscribers) {
            s.update(data);
        }
    }
}

export class PackageDeliveryStatusPublisher extends Publisher<PackageTrackingData> {
    constructor() {
        super();
    }

    public publishUpdate(data: PackageTrackingData): void {
        this.notifyObservers(data);
    }
}