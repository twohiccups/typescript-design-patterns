
export interface Strategy {
    allocateFunds(totalFunds: number, confidence: number): number;
}

export class LowRiskStrategy implements Strategy {
    allocateFunds(totalFunds: number, confidence: number): number {
        if (confidence < 95) {
            return 0;
        } else {
            return totalFunds * 0.2;
        }
    }
}

export class MediumRiskStrategy implements Strategy {
    allocateFunds(totalFunds: number, confidence: number): number {
        if (confidence < 75) {
            return 0;
        } else if (confidence < 90) {
            return totalFunds * 0.2;
        } else {
            return totalFunds * 0.4
        }
    }
}

export class HighRiskStrategy implements Strategy {
    allocateFunds(totalFunds: number, confidence: number): number {
        if (confidence < 50) {
            return 0;
        } else {
            return totalFunds * 0.5;
        }
    }
}
