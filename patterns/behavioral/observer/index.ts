import { CustomerCare, DeliveryService, PackageTrackingData } from './observer';
import { PackageDeliveryStatusPublisher } from './publisher';

const publisher = new PackageDeliveryStatusPublisher();

const customerCare = new CustomerCare();
const deliveryService = new DeliveryService();

// 👇 Subscribe both observers
publisher.subscribe(customerCare);
publisher.subscribe(deliveryService);

function publishUpdate(data: PackageTrackingData) {
    console.log('\n--- PUBLISH UPDATE ---', data);
    publisher.publishUpdate(data);
}


publishUpdate({
    packageId: 'PKG-001',
    address: '123 Main St',
    status: 'ordered',
});

publishUpdate({
    packageId: 'PKG-001',
    address: '123 Main St',
    status: 'shipped',
});

publishUpdate({
    packageId: 'PKG-001',
    address: '123 Main St',
    status: 'delivered',
});

console.log('\n--- UNSUBSCRIBE customerCare ---');
publisher.unsubscribe(customerCare);

// Fourth publish: delivered again
publishUpdate({
    packageId: 'PKG-001',
    address: '123 Main St',
    status: 'delivered',
});
