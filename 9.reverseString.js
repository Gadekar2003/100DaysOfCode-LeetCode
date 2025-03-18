//leetcode 344
var reverseString = function(s) {
  let start=0;
  let end=s.length-1;
  while(start<end){
      let temp=s[start];  //using swap 
      s[start]=s[end]
      s[end]=temp;
      start++;
      end--;
  }

};