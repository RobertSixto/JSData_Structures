
function insertionSort(arr, val)
    {
        for(let i = 0; i<arr.length; i++)
        {  let currentVal = arr[i];
        for(var j = i-1; j>=0 && arr[j]>currentVal; j--)
            {
               arr[j+1] = arr[j];
            }
         arr[j+1] = currentVal;
        }
        return arr;
    }

insertionSort([1,2,9,76,4,345,545,6,754,34,65,7,43,45,7]);