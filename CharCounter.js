function charCount(str)
    {
        myObj = {};
        for ( let char of str)
            {
                (myObj[char])?myObj[char]= myObj[char]+1:myObj[char]=1;
                
            }
        return myObj;
    }

console.log(charCount("hello"));