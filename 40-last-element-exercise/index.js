// DEFINE YOUR FUNCTION BELOW:

function lastElement(nums) {
    let index = nums.length - 1;
    let finalChar = nums[index];
    if (nums.length === 0) {
        return null
    } else {
        return finalChar;
    }
}