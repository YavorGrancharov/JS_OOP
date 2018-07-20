//Bubble Sort
//step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.
//step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
//step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.
//step-4: Look at the inner loop in the code below.
//step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
//step-6: and then we move backward inside the outer loop.

function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

let arr = [0, 5, 3, 2, 4, 6, 8, 7, 1]
console.log(bubbleSort(arr))

//first pass i = 0, j = 0, arr[j] = 0 and arr[j + 1] = 5 => if returns false as 0 is less then 5
//len - i - 1 = 8
//second paass i = 0, j = 1, arr[j] = 5 and arr[j + 1] = 3 if returns true as 5 is bigger then 3
//we assign the smallest value to temp = arr[j + 1] = 3
//the we assign arr[j + 1] = 3 to the previous index of the array arr[j] = 5 where j = 1
//so value of arr at index 1 is now 3
//the to the index 2 which on this point of itteation is arr[j + 1] = 3 we assign the value of temp which is arr[j] = 5
//so at this point the arr is looking like this arr = [0, 3, 5, 2, 4, 6, 8, 7, 1]

//Selection Sort
function selectionSort(arr) {
    let lowest
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let index = arr.indexOf(arr[j])
                lowest = arr[j]
                arr.splice(index, 1)
                arr.unshift(lowest)
            }
        }
    }
    return arr
}

let val = [5, 1, 12, -5, 16, 2, 12, 14]
console.log(selectionSort(val))