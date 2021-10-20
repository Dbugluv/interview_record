var text = 'test_tranform_text';
var arr = [];
var newText = text;
text.replace(/\_/g, (a, b,c) => {
  console.log('a', a, 'b', b, newText[b], c[b+1].toLocaleUpperCase())
  
  return newText
})