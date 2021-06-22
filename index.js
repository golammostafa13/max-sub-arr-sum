let maxSubArrSum = function(nums) {
    let end = nums.length;
    if(end === 0) return;
    let resultMax = nums[0];
    let currMax = nums[0];
    for(let i = 1; i < end; i++){
        currMax = Math.max(currMax + nums[i], nums[i]);
        resultMax = Math.max(resultMax, currMax);
    }
    return resultMax;;
};
module.exports.maxSubArrSum = maxSubArrSum;