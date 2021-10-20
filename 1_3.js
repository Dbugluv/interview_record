// 第1天 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

var arr = [];
function getRandom() {
  return Math.floor(Math.random()*30 + 2);
}
while(arr.length!==5) {
  var random = getRandom()
  if (!arr.includes(random)){
    arr.push(random)
  }
}

console.log('arr', arr)