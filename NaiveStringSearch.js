function stringRecurrences(str, sub)
{
    let count = 0;
    for (let i = 0; i<str.length; i++)
        {
            for(let k =0; k<sub.length; k++)
                {
                    if(sub[k]!=str[i+k])
                        break;
                    if(k==2)
                        count++;
            }
        }
    return count;
}


stringRecurrences("lolavasdbadlollolasdblol","asd");