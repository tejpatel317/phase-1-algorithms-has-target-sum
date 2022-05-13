function hasTargetSum(array, target) {
  for (let i=0; i<array.length; i++) {
    if (array.indexOf(target-array[i], i+1) !== -1) {
      return true
    }
  }
  return false
}

/* 
  O(n^2)
*/

/* 
  Function takes in an array and a target
  For loop, which iterates as long as i is less than array.length
    Inside loop, take the current element array[i] and subtract from target
    Call array.indexOf on the result, starting at i+1
    If return is === 1, return true
    Else return false
*/

/*
  Given an array and a target, we want to return true if any two numbers in the array add up to the target. We will return false otherwise. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
