// index.ts

import { HeightRecords, TextRecords } from './dataRecords';
import { NormalizeVisitor, ShuffleVisitor } from './visitor';

function main() {
    const heights = new HeightRecords([150, 160, 170, 165, 155]);
    const names = new TextRecords(['Bob', 'alice', 'Charlie', 'Saline', 'dAve']);

    console.log('=== Original Data ===');
    console.log('Heights:', heights.data);
    console.log('Names:  ', names.data);
    console.log('');

    const normalizeVisitor = new NormalizeVisitor();
    const normalizedHeights = heights.accept(normalizeVisitor);
    const normalizedNames = names.accept(normalizeVisitor);

    console.log('=== After NormalizeVisitor ===');
    console.log('Normalized heights:', normalizedHeights);
    console.log('Normalized names:  ', normalizedNames);
    console.log('');

    const shuffleVisitor = new ShuffleVisitor();
    const shuffledHeights = heights.accept(shuffleVisitor);
    const shuffledNames = names.accept(shuffleVisitor);

    console.log('=== After ShuffleVisitor ===');
    console.log('Shuffled heights:', shuffledHeights);
    console.log('Shuffled names:  ', shuffledNames);
    console.log('');

}

main();
