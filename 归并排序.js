/**
 * 把长度为n的输入序列分成两个长度为n/2的子序列；
对这两个子序列分别采用归并排序；
将两个排序好的子序列合并成一个最终的排序序列。
 */
let arr = [3, 5, 9, 38, 9, 29, 18, 2, 122, 33];

function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let midIndex = Math.floor(len / 2),
        left = arr.slice(0, midIndex),
        right = arr.slice(midIndex);
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            res.push(right.shift())
        } else {
            res.push(left.shift())
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}
console.log(mergeSort(arr));