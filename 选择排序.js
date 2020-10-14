let arr = [3, 5, 9, 38, 9, 29, 18, 2, 122, 33];
/**
通过for循环寻找出最小值得下标，从前开始排序
 *  
 */
function selectionSort(arr) {
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr
}
console.log(selectionSort(arr));