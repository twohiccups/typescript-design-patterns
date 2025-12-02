

export type TemperatureUnit = "Celsius" | "Fahrenheit";
export type PressureUnit = "PSI" | "Bar";
export type Units = TemperatureUnit | PressureUnit;


export interface Measurement {
    data: number,
    units: Units,
    timeStamp: number
}


export class MultiMeasurementDevice {
    measureTemperature(): Measurement {
        return {
            data: Math.random() * 255,
            units: "Fahrenheit",
            timeStamp: Date.now()
        }
    }

    measurePressure(): Measurement {
        return {
            data: Math.random() * 255,
            units: "PSI",
            timeStamp: Date.now()
        }
    }
}


export class DataArchive<T> {

    readonly data: T[];

    constructor() {
        this.data = [];
    }

    addDataPoint(dataPoint: T) {
        this.data.push(dataPoint);
    }

    displayData() {
        console.log(this.data);
    }
}

