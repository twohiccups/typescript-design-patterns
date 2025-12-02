
import { DisplayArchiveCommand, MeasurePressureCommand, MeasureTemperatureCommand } from "./command";
import { Button } from "./button";
import { DataArchive, Measurement, MultiMeasurementDevice } from "./measurements";


const temperatureArchive = new DataArchive<Measurement>();
const pressureArchive = new DataArchive<Measurement>();
const device = new MultiMeasurementDevice();



const measureTemperatureButton = new Button('Measure Temperature');
measureTemperatureButton.setOnClick(new MeasureTemperatureCommand(device, temperatureArchive));

const measurePressureButton = new Button('Measure Pressure');
measurePressureButton.setOnClick(new MeasurePressureCommand(device, pressureArchive));

const displayPressureButton = new Button('Display Pressure');
displayPressureButton.setOnClick(new DisplayArchiveCommand(pressureArchive));

const displayTemperatureButton = new Button('Display Temperature');
displayTemperatureButton.setOnClick(new DisplayArchiveCommand(temperatureArchive));

measurePressureButton.click();
measureTemperatureButton.click();
measurePressureButton.click();

displayPressureButton.click();
displayTemperatureButton.click();


