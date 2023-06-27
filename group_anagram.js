var a = ['ate', 'tan', 'tap',  'nat', 'pat', 'eat', 'tea']
var res = {}
console.time()
for(let i = 0; i < a.length; i++) {
  var key = a[i].split('').sort().join('');
  res[key] = res[key] || [];
  res[key].push(a[i])
}

console.log(res)
console.timeEnd()