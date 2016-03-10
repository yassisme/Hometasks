var num = prompt('Введите число', '');

var exp = prompt('Введите степень', '');

var test = pow(num, exp);

console.log('pow = ', test);

function pow(a, b) {

  var result = a;

  for (var i = 1; i < b; i++) {
    result = result * a;
  }
  
  return result;
}
