// index.ts
import { CanvasEditor } from "./editor";
import { Text, Square, Circle } from "./canvasElements";

function logState(label: string, editor: CanvasEditor): void {
    const state = editor.getDebugState();
    console.log(label, {
        elements: state.elements,
        fontColor: state.fontColor,
        backgroundColor: state.backgroundColor,
    });
}

// Create editor and initial state
const editor = new CanvasEditor();

editor.addElement(new Text(10, 10, "Hello world"));
editor.addElement(new Square(50, 50, 100));
editor.setBackgroundColor("white");
editor.setFontColor("black");

logState("Initial state:", editor);

// Take first snapshot
const snapshot1 = editor.makeSnapshot();
console.log("Created snapshot1 at", new Date(snapshot1.getTimestamp()).toISOString());

// Mutate canvas
editor.addElement(new Circle(200, 200, 30));
editor.setBackgroundColor("lightblue");
editor.setFontColor("red");

logState("After changes (before snapshot2):", editor);

// Take second snapshot
const snapshot2 = editor.makeSnapshot();
console.log("Created snapshot2 at", new Date(snapshot2.getTimestamp()).toISOString());

// More changes
editor.setBackgroundColor("yellow");
editor.setFontColor("green");
editor.addElement(new Text(300, 300, "Another label"));

logState("After further changes:", editor);

// Restore to snapshot1
editor.restore(snapshot1);
logState("After restore(snapshot1):", editor);

// Restore to snapshot2
editor.restore(snapshot2);
logState("After restore(snapshot2):", editor);
