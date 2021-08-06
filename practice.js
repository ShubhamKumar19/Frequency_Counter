//Program to find that a given String is anagram or not using Frequency Counter Approach
function Anagram(str1,str2)
{
    if(str1.length!==str2.length)
        {return false;}
    var s1={};
    var s2={};
    for(let i of str1)
    {
        s1[i]=(s1[i]||0)+1;
    }
  
    for(let i of str2)
    {
        s2[i]=(s2[i]||0)+1;
    }
   
    for (let i in s1)
    {
        if(s1[i]!==s2[i])
            return false;
    }
    return true;
}
console.log(Anagram('Helii','iileH'));
  

