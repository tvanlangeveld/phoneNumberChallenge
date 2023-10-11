

function phoneNumberCreator(arr){
  arr.unshift('(')
  arr.splice(4, 0, ')')
  arr.splice(5, 0, ' ')
  arr.splice(9, 0, '-')
  return arr.join().replaceAll(',','')
}



console.log(phoneNumberCreator([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))