import type { HeightRecords, TextRecords } from "./dataRecords";

export interface Visitor {
    doForHeights(records: HeightRecords): number[];
    doForText(records: TextRecords): string[];
}


export class NormalizeVisitor implements Visitor {
    doForHeights(records: HeightRecords): number[] {
        const min = Math.min(...records.data);
        const max = Math.max(...records.data);
        return records.data.map((p) => ((p - min) / (max - min)))
    }

    doForText(records: TextRecords): string[] {
        const normalized = records.data.map((p) => p.toLowerCase()).sort();
        return normalized;
    }

}

export class ShuffleVisitor implements Visitor {
    private shuffleArray<T>(arr: T[]): T[] {
        const result = [...arr]; // don’t mutate original
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    doForHeights(records: HeightRecords): number[] {
        return this.shuffleArray(records.data);
    }

    doForText(records: TextRecords): string[] {
        return this.shuffleArray(records.data);
    }
}
