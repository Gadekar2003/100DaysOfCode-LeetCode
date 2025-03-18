class Solution {
  /**
  * @param number[] arr

  * @returns number
  */
  largest(arr) {
      // code here
      let n=arr.length;
      let largeEle=arr[0];
      for(let i=0;i<n;i++){
          if(arr[i]>largeEle)
          largeEle=arr[i];
      }
      return largeEle;
  }
}