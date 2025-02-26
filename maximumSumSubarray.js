var maxSubArray = function(nums) {
  let maxSum=-Infinity;
  let currentSum=0;
  let n=nums.length;
  for(let i=0;i<n;i++){
    currentSum=currentSum+nums[i];
    if(currentSum>maxSum){
        maxSum=currentSum;
    }
    if(currentSum<0){
        currentSum=0;
    }
  }
  return maxSum;
};