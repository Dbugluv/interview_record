var a = 'abcdefgccd';

function delAssign(str, del) {
  var lastLoc = 0;
  for(i = 0; i < a.length; i++) {
    if(a[i] === del)
      lastLoc = i;
  }

  return str.substring(0, lastLoc) + str.substring(lastLoc+1)
}
console.log(delAssign(a, 'c'))

