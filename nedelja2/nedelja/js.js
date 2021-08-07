let N = 5
let str = ''

for (let i = 1; i <= N; i++) {
  
  for (let j = N; j > i; j--) {
    str += ' '
  }
 
  for (let k = 0; k < i * 2 - 1; k++) {
    str += '*'
  }
  str += '\n'
}

for (let i = 1; i <= N - 1; i++) {
 
  for (let j = 0; j < i; j++) {
    str += ' ' 
  }
  
  for (let k = (N - i) * 2 - 1; k > 0; k--) {
    str += '*'
  }
  str += '\n'
}
console.log(str);