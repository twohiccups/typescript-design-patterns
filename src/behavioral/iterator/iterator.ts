import { TreeNode } from "./tree";

export interface Iterator<E> {
    hasNext(): boolean;
    next(): E;


}

export class LinkedTreeDepthIterator<V> implements Iterator<TreeNode<V>> {
    private stack: TreeNode<V>[]

    constructor(private head: TreeNode<V>) {
        this.stack = [head]
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }

    next(): TreeNode<V> {
        const cur = this.stack.pop();
        if (!cur) {
            throw Error("No more elements");
        }

        if (cur.right) {
            this.stack.push(cur.right);
        }

        if (cur.left) {
            this.stack.push(cur.left);
        }
        return cur;
    }
}


export class LinkedTreeBreadthIterator<V> implements Iterator<TreeNode<V>> {
    private queue: TreeNode<V>[]

    constructor(private head: TreeNode<V>) {
        this.queue = [head]
    }

    hasNext(): boolean {
        return this.queue.length > 0
    }

    next(): TreeNode<V> {
        const cur = this.queue.shift()
        if (!cur) {
            throw Error("No more elements.");
        }

        if (cur.left) {
            this.queue.push(cur.left);
        }

        if (cur.right) {
            this.queue.push(cur.right);
        }

        return cur;
    }
}