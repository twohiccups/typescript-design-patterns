import { DataArchive, Measurement, MultiMeasurementDevice } from "./measurements";


export abstract class Command {
    abstract execute(): void;
}


export class MeasureTemperatureCommand extends Command {
    temperatureDevice: MultiMeasurementDevice;
    dataArchive: DataArchive<Measurement>;

    constructor(device: MultiMeasurementDevice, dataArchive: DataArchive<Measurement>) {
        super();
        this.dataArchive = dataArchive;
        this.temperatureDevice = device;
    }

    execute(): void {
        const dataPoint = this.temperatureDevice.measureTemperature();
        this.dataArchive.addDataPoint(dataPoint);
    }
}


export class MeasurePressureCommand extends Command {

    constructor(
        public readonly pressureDevice: MultiMeasurementDevice,
        public readonly dataArchive: DataArchive<Measurement>
    ) { super(); }


    execute(): void {
        const dataPoint = this.pressureDevice.measurePressure();
        this.dataArchive.addDataPoint(dataPoint);
    }
}


export class DisplayArchiveCommand extends Command {
    constructor(public readonly dataArchive: DataArchive<Measurement>) { super() };

    execute(): void {
        this.dataArchive.displayData();
    }
}
