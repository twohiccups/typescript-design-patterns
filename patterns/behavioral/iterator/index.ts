
import { LinkedTreeBreadthIterator, LinkedTreeDepthIterator } from "./iterator";
import { TreeNode } from "./tree";



//           A
//          / \
//         B   C
//        / \   \
//       D   E   F


const tree: TreeNode<string> = {
    value: "A",
    left: {
        value: "B",
        left: { value: "D" },
        right: { value: "E" },
    },
    right: {
        value: "C",
        right: { value: "F" },
    },
};


const depthIterator = new LinkedTreeDepthIterator(tree);

const result: string[] = [];
while (depthIterator.hasNext()) {
    result.push(depthIterator.next().value);
}
console.log(result);


const result2: string[] = [];
const breadthIterator = new LinkedTreeBreadthIterator(tree);
while (breadthIterator.hasNext()) {
    result2.push(breadthIterator.next().value);
}
console.log(result2);

