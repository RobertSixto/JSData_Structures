function validAnagram(str1, str2){
    //create two objects to store char frequencies
    let freq1 ={};
    let freq2 = {};
    
    if (str1.length!=str2.length)
    {
        return false;
    }
    //get a frequency count of character in both strings
    for(let char in str1)
    {
        freq1[char]=(freq1[char]||0) +1;
    }
    
    for(let char2 in str2)
    {
        freq2[char2]=(freq2[char2]||0) +1;
    }
    
console.log(freq1);
console.log(freq2);
    //compare the frequencies of each char
        for (let key in freq1)
        {
            if (freq1[key]!=freq2[key])
                return false;
        }
        
    return true;
    //if same return true
    
    //if not return false
  // add whatever parameters you deem necessary - good luck!
}

validAnagram("hello", 'llohe');