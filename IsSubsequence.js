function isSubsequence(str, str2) {
  // good luck. Add any arguments you deem necessary.
  let k = 0;
  let counter=0;
  
 
  for(let char of str2)
  {
      if(char==str[k])
      {
          k++;
          counter++;
      }
      else
      {
          k=0;
          counter=0;
           if(char==str[k])
            {
             k++;
             counter++;
            }
      }
      
      if(counter==str.length)
      {
          return true;
      }
  }
  return false;
}

isSubsequence('hello','hello world')