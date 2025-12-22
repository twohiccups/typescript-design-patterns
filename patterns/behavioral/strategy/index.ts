import { Investor } from "./investor";
import {
    LowRiskStrategy,
    MediumRiskStrategy,
    HighRiskStrategy,
} from "./strategy";

const investor = new Investor(new LowRiskStrategy(), 10000);

const confidences = [40, 60, 80, 92, 97];

function logStrategy(confidence: number) {
    console.log(`confidence: ${confidence} -> allocated: $${investor.decideFundAllocation(confidence).toFixed(2)}`);
}

console.log("=== Low Risk Strategy ===");
for (const c of confidences) {
    logStrategy(c);
}

// Investor desides to try a new strategy
investor.setStrategy(new MediumRiskStrategy());
console.log("\n=== Medium Risk Strategy ===");
for (const c of confidences) {
    logStrategy(c);

}

// Investor desides to try a new strategy again
investor.setStrategy(new HighRiskStrategy());
console.log("\n=== High Risk Strategy ===");
for (const c of confidences) {
    logStrategy(c);
}
