//Problem: write a algorithm that takes a sorted list and an average 
//and determines if the average exists  as an average of any two numbers in the list.

function averagePair(arr, avg){
  
  if (arr.length==0)
  {
     return false;
  }
  let k = 0;
  for(let i = 0; i<arr.length; i++)
  {
      let rp =arr.length-1-i;
      console.log(arr[k]+',' +arr[rp]);
      //console.log(arr[k] +',' + arr[rp]);
       if (((arr[k]+arr[rp])/2)==avg)
          {
              return true;
          }
          
        if (((arr[k]+arr[rp])/2)<avg)
            {
                k++;
                if (((arr[k]+arr[rp])/2)==avg)
                    {
                    return true;
                    }
                i--;
            }
    
        if (rp===k)
        {
             return false;
        }
    
  }

}

averagePair([1,2,5,10],7.5);
