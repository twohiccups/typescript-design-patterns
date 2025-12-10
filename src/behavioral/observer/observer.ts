export interface Observer<T> {
    update(data: T): void;
}

export type DeliveryStatus = 'ordered' | 'shipped' | 'delivered' | 'cancelled';

export interface PackageTrackingData {
    packageId: string;
    address: string;
    status: DeliveryStatus;
}

export class CustomerCare implements Observer<PackageTrackingData> {
    private readonly prefix = 'CustomerCare:';

    update(data: PackageTrackingData): void {
        let message: string | null = null;

        if (data.status === 'ordered') {
            message = `${this.prefix} Package ${data.packageId} ordered. Thank you for shopping with us.`;
        } else if (data.status === 'shipped') {
            message = `${this.prefix} Package ${data.packageId} is shipping. Want to see more great deals?`;
        } else if (data.status === 'delivered') {
            message = `${this.prefix} Package ${data.packageId} delivered to ${data.address}. Asking for feedback...`;
        }

        if (message) {
            console.log(message);
        }
    }
}

export class DeliveryService implements Observer<PackageTrackingData> {
    private readonly prefix = 'DeliveryService:';

    update(data: PackageTrackingData): void {
        let message: string | null = null;

        if (data.status === 'ordered') {
            message = `${this.prefix} Package ${data.packageId} ordered. Pick up from store at ${data.address}.`;
        } else if (data.status === 'cancelled') {
            message = `${this.prefix} Package ${data.packageId} cancelled. Return it to the store at ${data.address}.`;
        } else if (data.status === 'delivered') {
            message = `${this.prefix} Package ${data.packageId} delivered. Pay the driver.`;
        } else if (data.status === 'shipped') {
            message = `${this.prefix} Package ${data.packageId} shipped towards ${data.address}.`;
        }
        if (message) {
            console.log(message);
        }
    }
}