const nums = [2,7,11,6], target = 13
const addNum = (arr,target) => {
  const res = [];
  for(let i = 0; i< arr.length;i++){
    for(let j = i+1;j< arr.length;j++) {
      if(arr[i] + arr[j] === target) {
        res.push([i,j])
      }
    }
  }
  return res || [];
}
console.log(addNum(nums,target));