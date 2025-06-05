function countChars(S){
// Write your code here!
  let freq={};
  let res="";
  for(let i=0;i<S.length;i++){
    let ch=S[i];
    if(freq[ch]){
      freq[ch]++;
    }else{
      freq[ch]=1;
    }
  }
  for(let i=0;i<S.length;i++){
    let ch=S[i];
    if(freq[ch]!==0){
      res+=ch+freq[ch];
      freq[ch]=0;
    }
  }
  console.log(res);
}