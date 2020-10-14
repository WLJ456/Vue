/**
 * 核心反向利用数组下标
 */

let arr = [3, 1, 5, 9, 38, 9, 29, 18, 2, 122, 0,33];

function countSort(arr) {
    let maxNum = Math.max(...arr);
    let newArray = new Array(maxNum + 1);
    var Oldlen = arr.length;
    for (let i = 0; i < Oldlen; i++) {
        if (!newArray[arr[i]]) {
            newArray[arr[i]] = 1;
        } else {
            newArray[arr[i]]++;
        }
    }
    let res = []
    newArray.forEach((item, index) => {
        if (item > 0) {
            while (item > 0) {
                res.push(index);
                item--;
            }
        }
    })
    return res

}
console.log(countSort(arr));