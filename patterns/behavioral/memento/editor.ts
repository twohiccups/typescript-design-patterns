import { CanvasElement } from "./canvasElements";



interface Memento {
    getName(): string;
    getTimestamp(): number;
}


export class CanvasEditor {
    private elements: CanvasElement[]
    private fontColor: string;
    private backgroundColor: string;
    private snapshotCounter: number;

    constructor() {
        this.elements = [];
        this.fontColor = 'black';
        this.backgroundColor = 'rgb';
        this.snapshotCounter = 1;
    }

    addElement(element: CanvasElement): void {
        this.elements.push(element);
    }

    setFontColor(color: string): void {
        this.fontColor = color;
    }

    setBackgroundColor(color: string): void {
        this.backgroundColor = color;
    }

    makeSnapshot(): Memento {
        const snapshot: CanvasSnapshot = new CanvasSnapshot(
            `Snapshot: ${this.snapshotCounter}`,
            Date.now(),
            {
                elements: this.elements.map((e) => e.clone()), // deep copy
                backgroundColor: this.backgroundColor,
                fontColor: this.fontColor
            }
        );
        this.snapshotCounter += 1;
        return snapshot;
    }


    restore(snapshot: Memento): void {
        if (!(snapshot instanceof CanvasSnapshot)) {
            throw new Error("Invalid memento for this CanvasEditor");
        }
        const canvasSnapshot = snapshot as CanvasSnapshot;
        const state = canvasSnapshot.getState();
        this.elements = state.elements.map((e) => e.clone());
        this.backgroundColor = state.backgroundColor;
        this.fontColor = state.fontColor;
    }

    getDebugState(): { elements: number; fontColor: string; backgroundColor: string } {
        return {
            elements: this.elements.length,
            fontColor: this.fontColor,
            backgroundColor: this.backgroundColor,
        };
    }
}

interface CanvasSnapshotState {
    elements: CanvasElement[]
    fontColor: string;
    backgroundColor: string;
}


// This class is local to editor.ts, so the state is no exposed to external objects
export class CanvasSnapshot implements Memento {
    constructor(
        private name: string,
        private timestamp: number,
        private state: CanvasSnapshotState) { }

    getName(): string {
        return this.name;
    }

    getTimestamp(): number {
        return this.timestamp;
    }

    getState(): CanvasSnapshotState {
        return this.state;
    }
}