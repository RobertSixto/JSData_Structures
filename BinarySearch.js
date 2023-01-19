function binarySearch(arr, val)
    {
        let lp = 0;
        let rp = arr.length-1;
        let mid;
        while(lp<=rp)
            {
            mid = Math.floor((lp+rp)/2)
                if (arr[mid]===val)
                {
                    return mid;
                }

                else if(arr[mid]>val)
                {
                    rp = mid - 1;
                }

                else if(arr[mid]<val)
                {
                    lp = mid + 1;
                }
            }
        return -1;
    }

console.log(binarySearch([1,4,6,7,12,43,545,6900,80900,3463452], 6900));