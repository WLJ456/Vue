/**
 * 
 * 一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

从第一个元素开始，该元素可以认为已经被排序；
取出下一个元素，在已经排序的元素序列中从后向前扫描；
如果该元素（已排序）大于新元素，将该元素移到下一位置；
重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
将新元素插入到该位置后；
重复步骤2~5。
 */

let arr = [3, 5, 9, 38, 9, 29, 18, 2, 122, 33];

function insertSort(arr) {
    let len = arr.length;
    let preIndex, currNode;
    for (let i = 1; i < len; i++) {
        currNode = arr[i];
        preIndex = i - 1;
        while (preIndex >= 0 && arr[preIndex] > currNode) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1]=currNode;
    }
    return arr

}
console.log(insertSort(arr));