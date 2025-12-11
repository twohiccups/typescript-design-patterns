import type { Visitor } from "./visitor";


export abstract class DataRecords<T> {
    abstract accept(v: Visitor): T;
}

export class HeightRecords extends DataRecords<number[]> {
    constructor(public data: number[]) {
        super();
    }

    accept(v: Visitor): number[] {
        return v.doForHeights(this);
    }

}

export class TextRecords extends DataRecords<string[]> {
    constructor(public data: string[]) {
        super();
    }

    accept(v: Visitor): string[] {
        return v.doForText(this);
    }

}

