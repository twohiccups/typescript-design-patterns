export abstract class CanvasElement {
    constructor() { }
    abstract clone(): CanvasElement
}

export class Text extends CanvasElement {
    constructor(private x: number, private y: number, private text: string) {
        super();
    }

    clone(): Text {
        return new Text(this.x, this.y, this.text)
    }
}


export class Square extends CanvasElement {

    constructor(private x: number, private y: number, private width: number) {
        super();
    }

    clone(): Square {
        return new Square(this.x, this.y, this.width);
    }

}

export class Circle extends CanvasElement {

    constructor(private x: number, private y: number, private radius: number) {
        super();
    }

    clone(): Circle {
        return new Circle(this.x, this.y, this.radius);
    }
}