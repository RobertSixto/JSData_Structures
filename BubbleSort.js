
function bubbleSort(arr){
let temp;
    for(let i =arr.length-1;i>=0; i--)
        {
            for(let j =0; j<i; j++)
                {
                    if(arr[j]>arr[j+1])
                    {
                        temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
}
    return arr;
}

bubbleSort([5,3,6,3,235,34,546,56,7674,456]);