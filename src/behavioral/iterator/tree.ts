
// Using generics to hold any type of value
export interface TreeNode<V> {
    left?: TreeNode<V>,
    right?: TreeNode<V>,
    value: V
}


