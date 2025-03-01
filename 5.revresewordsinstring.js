var reverseWords = function(s) {
  let result = "";  
  let word = "";    
  let i = s.length - 1; 

  while (i >= 0) {
      while (i >= 0 && s[i] === ' ')
       i--;
      word = "";
      while (i >= 0 && s[i] !== ' ') {
          word = s[i] + word; 
          i--;
      }
      if (word.length > 0) {
          if (result.length > 0)
          result+=" ";  
          result += word;
      }
  }

  return result;
  
};