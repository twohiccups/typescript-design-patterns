import type { Strategy } from "./strategy";

export class Investor {
    constructor(
        private strategy: Strategy,
        private totalFunds: number
    ) { }

    decideFundAllocation(confidence: number): number {
        const allocated = this.strategy.allocateFunds(this.totalFunds, confidence);
        return allocated;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    setTotalFunds(totalFunds: number) {
        this.totalFunds = totalFunds;
    }

    getTotalFunds(): number {
        return this.totalFunds;
    }
}
