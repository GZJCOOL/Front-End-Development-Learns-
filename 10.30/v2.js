const a = [1, [2,  6], 3, [4, 5]];
const my_flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(my_flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(my_flatten(a));

const b=[0,9,[7,8],6,5]
const my_flatten2 = (arr) => {
    return arr.reduce((prev,next)=>{
      return prev.concat(Array.isArray(next)?my_flatten2(next):next)
    },[]);
  };
  console.log(my_flatten2(b));

