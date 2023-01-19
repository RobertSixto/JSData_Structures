function selectionSort(arr)
    {
        let min;
        for(let i = 0; i<arr.length; i++)
            {
                min = i;
                for(let j = i;j<arr.length; j++)
                    {
                        if (arr[j]<arr[min])
                        {
                            min = j;
                        }
                    }
                if(min!=i)
                {
                    temp = arr[i];
                    arr[i] = arr[min];
                    arr[min] = temp;
                }
            }
        return arr;
}

selectionSort([2,24,35,46,567,56,45,235,457,342,46]);
